// import React from 'react';
// import { Box, Heading, VStack, Input, Textarea, Button } from '@chakra-ui/react';

// const Contact = () => {
//   return (
//     <Box textAlign="center" py={10} px={6}>
//       <Heading as="h1" size="xl" mb={6}>
//         Contact Us
//       </Heading>
//       <VStack spacing={4} alignItems="flex-start">
//         <Input placeholder="Your Name" />
//         <Input placeholder="Your Email" />
//         <Textarea placeholder="Your Message" />
//         <Button colorScheme="teal">Send Message</Button>
//       </VStack>
//     </Box>
//   );
// };

// export default Contact;
import React from 'react';
import {
  Box,
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const Contact = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.700'); // Light and dark mode background
  const cardBgColor = useColorModeValue('white', 'gray.800'); // Card background for light and dark modes
  const headingColor = useColorModeValue('slateblue', 'lavender'); // Heading color
  const textColor = useColorModeValue('gray.600', 'gray.300'); // Text color

  return (
    <Box textAlign="center" py={10} px={6} bg={bgColor} minHeight="100vh">
      <Box
        bg={cardBgColor}
        p={8}
        rounded="lg"
        boxShadow="lg"
        maxW="500px"
        mx="auto"
      >
        <Heading as="h1" size="xl" mb={6} color={headingColor}>
          Contact Us
        </Heading>
        <VStack spacing={4} alignItems="stretch">
          <Input
            placeholder="Your Name"
            variant="outline"
            borderColor="slateblue"
            _hover={{ borderColor: 'lightblue' }}
            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
          />
          <Input
            placeholder="Your Email"
            variant="outline"
            borderColor="slateblue"
            _hover={{ borderColor: 'lightblue' }}
            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
          />
          <Textarea
            placeholder="Your Message"
            variant="outline"
            borderColor="slateblue"
            _hover={{ borderColor: 'lightblue' }}
            _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
          />
          <Button
            colorScheme="blue" // Changed to blue for better visibility
            size="lg" // Large button size
            mt={4} // Margin top for spacing
            _hover={{ bg: 'lightblue', color: 'white' }} // Hover effect
            _active={{ bg: 'blue.700' }} // Darker blue for active state
            _focus={{ boxShadow: '0 0 0 1px blue.300' }} // Focus outline
          >
            Send Message
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Contact;





