// import React from 'react';
// import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react';

// const Footer = () => (
//   <Box as="footer" py={4} textAlign="center" bg="gray.800" color="white">
//     <Text fontSize="sm">© 2024 Brain Tumor Detection. All rights reserved.</Text>
//   </Box>
// );

// const About = () => {
//   return (
//     <Flex direction="column" minHeight="100vh" bg="gray.900" color="white">
//       <Box flex="1" textAlign="center" py={10} px={6}>
//         <Heading as="h1" size="2xl" mb={8}>
//           About Us
//         </Heading>
        
//         <VStack spacing={8} alignItems="flex-start" maxW="800px" mx="auto">
//           <Box>
//             <Heading as="h2" size="lg" mb={4}>
//               Our Mission
//             </Heading>
//             <Text fontSize="lg">
//               Our mission is to empower individuals with the tools to detect Brain Tumor early and effectively.
//             </Text>
//           </Box>

//           <Box>
//             <Heading as="h2" size="lg" mb={4}>
//               Our Technology
//             </Heading>
//             <Text fontSize="lg">
//               Using state-of-the-art AI technology, we aim to provide accurate predictions and educational resources.
//             </Text>
//           </Box>

//           <Box>
//             <Heading as="h2" size="lg" mb={4}>
//               Our Vision
//             </Heading>
//             <Text fontSize="lg">
//               We envision a world where early detection of Brain Tumor is accessible to everyone, leading to better 
//               outcomes and saving lives.
//             </Text>
//           </Box>
//         </VStack>
//       </Box>

//       <Footer />
//     </Flex>
//   );
// };

// export default About;

import React from 'react';
import { Box, Heading, Text, VStack, Flex } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" py={4} textAlign="center" bg="gray.700" color="gray.200">
    <Text fontSize="sm">© 2024 Brain Tumor Detection. All rights reserved.</Text>
  </Box>
);

const About = () => {
  return (
    <Flex direction="column" minHeight="100vh" bg="gray.50" color="gray.900">
      {/* Header Section */}
      <Box flex="1" textAlign="center" py={12} px={6} bg="mintcream">
        <Heading as="h1" size="2xl" mb={4} color="slateblue">
          About Us
        </Heading>
        <Text fontSize="lg" maxW="700px" mx="auto" color="gray.700">
          Our mission is to revolutionize brain tumor detection through advanced technology, making early diagnosis accessible to all.
        </Text>
      </Box>

      {/* Text Boxes Container */}
      <Flex
        direction={['column', 'row']}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        gap={8}
        py={16}
        px={4}
      >
        {/* Box 1 */}
        <Box
          flex="1"
          p={10}
          borderRadius="lg"
          textAlign="center"
          border="2px solid"
          borderColor="lightblue"
          _hover={{ borderColor: 'lightskyblue' }}
          bg="lavender"
        >
          <Heading as="h2" size="lg" mb={4} color="lightskyblue">
            Our Mission
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={4}>
            Our mission is to revolutionize brain tumor detection through advanced technology, making early diagnosis accessible to all.
          </Text>
          <Text fontSize="md" color="gray.600">
            We believe that we can empower patients and medical professionals alike to
            detect brain tumors at the earliest stage possible. Our goal is not just about creating technology but about creating hope and 
            awareness around brain health.
          </Text>
          
        </Box>

        {/* Box 2 */}
        <Box
          flex="1"
          p={10}
          borderRadius="lg"
          textAlign="center"
          border="2px solid"
          borderColor="lightgreen"
          _hover={{ borderColor: 'mediumaquamarine' }}
          bg="honeydew"
        >
          <Heading as="h2" size="lg" mb={4} color="mediumaquamarine">
            Our Technology
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={4}>
            Using state-of-the-art AI technology, we aim to provide accurate predictions and educational resources.
          </Text>
          <Text fontSize="md" color="gray.600">
            The system analyzes vast datasets, looking for patterns in imaging data that may indicate the presence of brain
            tumors. Beyond detection, our platform also provides educational resources to guide patients and their families
            through the treatment journey.
          </Text>
        </Box>

        {/* Box 3 */}
        <Box
          flex="1"
          p={10}
          borderRadius="lg"
          textAlign="center"
          border="2px solid"
          borderColor="lightcoral"
          _hover={{ borderColor: 'palevioletred' }}
          bg="mistyrose"
        >
          <Heading as="h2" size="lg" mb={4} color="palevioletred">
            Our Vision
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={4}>
            We envision a world where early detection of Brain Tumor is accessible to everyone, leading to better 
                       outcomes and saving lives.
          </Text>
          <Text fontSize="md" color="gray.600">
            Our vision is centered on equity in healthcare. We aim to make advanced medical tools accessible to all, regardless of geographic
            location or financial status. With innovation at the core, we believe that this future is not 
            far away.
          </Text>
        </Box>
      </Flex>

      {/* Footer */}
      <Footer />
    </Flex>
  );
};

export default About;

