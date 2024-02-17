import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { FeaturesPage } from './components/FeaturePage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <FeaturesPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
