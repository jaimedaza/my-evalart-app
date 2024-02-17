import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';

export const Accordion = props => {
  const { accordionItems } = props;

  const borderColor = useColorModeValue(
    'var(--chakra-colors-gray-200)',
    'var(--chakra-colors-whiteAlpha-300)'
  );

  const expandedBgColor = useColorModeValue(
    'var(--chakra-colors-blackAlpha-50)',
    '#01478f'
  );

  return (
    <>
      <ChakraAccordion
        allowMultiple
        border={`1px solid ${borderColor}`}
        borderRadius="8px"
      >
        {accordionItems?.map(item => (
          <AccordionItem key={item.title} border="none">
            <h2>
              <AccordionButton _expanded={{ bg: expandedBgColor }}>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg" textAlign="left">
              {item.description}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </ChakraAccordion>
    </>
  );
};
