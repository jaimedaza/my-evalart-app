import { useEffect, useState } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { benefits, features } from '../utils/mockData';
import { Accordion } from './Accordion';
import Carousel from './Carousel';
import { FeatureCard } from './FeatureCard';

export const FeaturesPage = () => {
  const [featureData, setfeatureData] = useState(features);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.slingacademy.com/v1/sample-data/photos'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const imageData = await response.json();

        const updateFeatures = featureData.map((feature, index) => ({
          ...feature,
          imageUrl: imageData.photos[index].url,
        }));

        setfeatureData(updateFeatures);
      } catch (error) {}
    };

    fetchData();
  }, [featureData]);

  return (
    <>
      <Container maxW="container.xl" centerContent>
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py="12px"
        >
          <Logo pointerEvents="none" />
          <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
      </Container>

      <Box w="100%" bg="#01478f" marginY="30px" py="20px">
        <Container maxW="container.xl" bg="">
          <Carousel>
            {featureData.map(feature => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
              />
            ))}
          </Carousel>
        </Container>
      </Box>

      <Container maxW="container.xl" marginY="30px">
        <Heading as="h2" size="xl" paddingBottom="12px" textAlign="left">
          Benefits
        </Heading>
        <Accordion accordionItems={benefits} />
      </Container>

      <Box w="100%" bg="#01478f" marginTop="30px" py="10px">
        <Container maxW="container.xl" marginY="30px">
          <Heading as="h4" size="lg" textAlign="left">
            Jaime Daza's Evalart Assignment
          </Heading>
        </Container>
      </Box>
    </>
  );
};
