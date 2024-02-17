import { useEffect, useState } from 'react';
import {
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { benefits, features } from '../utils/mockData';
import { Accordion } from './Accordion';

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

      {/* <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra con Jaime
          </Link>
        </VStack>
      </Grid> */}
    </>
  );
};
