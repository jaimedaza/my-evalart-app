import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Spinner,
} from '@chakra-ui/react';

export const FeatureCard = props => {
  const { title, description, imageUrl } = props;

  return (
    <Card maxW="sm" mx="15px" minH="550px">
      <CardBody>
        {imageUrl ? (
          <Image src={imageUrl} alt="image alt text" borderRadius="lg" />
        ) : (
          <Spinner color="#01478f" size="xl" data-testid="spinner" />
        )}
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text fontSize="medium" textAlign="left">
            {description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
