// import React from 'react';
// import { Box, Heading, Text, Button, VStack, Image, Flex } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// // import tumorImage1 from './broken-image1.jpg';
// // import tumorImage2 from './broken-image2.jpg';
// // import tumorImage3 from './broken-image3.jpg';

// const Footer = () => (
//   <Box as="footer" py={4} textAlign="center" bg="gray.800" color="white">
//     <Text fontSize="sm">© 2024 Brain Tumor Detection. All rights reserved.</Text>
//   </Box>
// );

// const Home = () => {
//   return (
//     <Flex direction="column" minHeight="100vh">
//       <Box flex="1" py={10} px={6} bg="gray.900" color="white">
//         <Heading as="h1" size="2xl" mb={8} textAlign="center">
//           Welcome to Brain Tumor Detection
//         </Heading>
//         <Text fontSize="lg" mb={8} textAlign="center">
//           Empowering you with early detection and reliable information to fight brain tumors.
//         </Text>

//         <VStack spacing={8} align="start" maxW="800px" mx="auto">
//           <Box>
//             {/* <Image src='' alt="Brain Tumor Awareness" borderRadius="md" mb={4} /> */}
//             <Heading as="h2" size="lg" mb={4}>
//               What is a Brain Tumor?
//             </Heading>
//             <Text fontSize="md">
//               A brain tumor is a mass or growth of abnormal cells in your brain. Brain tumors can be 
//               benign (non-cancerous) or malignant (cancerous). Early detection is key to effective treatment.
//             </Text>
//           </Box>

//           <Box>
//             {/* <Image src='' alt="Brain Tumor Causes" borderRadius="md" mb={4} /> */}
//             <Heading as="h2" size="lg" mb={4}>
//               Causes of Brain Tumors
//             </Heading>
//             <Text fontSize="md">
//               The causes of brain tumors aren't always clear. However, genetic mutations, exposure to radiation, 
//               and a family history of brain tumors can increase the risk. It's important to get diagnosed early 
//               through imaging like X-rays, CT scans, and MRIs.
//             </Text>
//           </Box>

//           <Box>
//             {/* <Image src='' alt="Brain Tumor Statistics" borderRadius="md" mb={4} /> */}
//             <Heading as="h2" size="lg" mb={4}>
//               Global Brain Tumor Statistics
//             </Heading>
//             <Text fontSize="md">
//               Brain tumors account for a significant number of cancer-related deaths. With about 250,000 new cases 
//               annually worldwide, early diagnosis and treatment are critical for improving survival rates.
//             </Text>
//           </Box>
//         </VStack>

//         <VStack spacing={4} mt={10} textAlign="center">
//           <Button colorScheme="teal" size="lg" as={Link} to="/predict" _hover={{ transform: 'scale(1.05)', transition: 'all 0.2s' }}>
//             Get Started
//           </Button>
//           <Button variant="outline" colorScheme="teal" size="lg" as={Link} to="/about" _hover={{ transform: 'scale(1.05)', transition: 'all 0.2s' }}>
//             Learn More
//           </Button>
//         </VStack>
//       </Box>

//       <Footer />
//     </Flex>
//   );
// };

// export default Home;

import React from 'react';
import { Box, Heading, Text, Button, VStack, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Import the background image
const bgImage = "../assets/bg.jpeg"; // Make sure the path is correct

const Footer = () => (
  <Box as="footer" py={4} textAlign="center" bg="gray.800" color="white">
    <Text fontSize="sm">© 2024 Brain Tumor Detection. All rights reserved.</Text>
  </Box>
);

const Home = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Main section with background image */}
      <Box
        flex="1"
        py={10}
        px={6}
        color="white"
        bgImage={`url(${bgImage})`} // Setting the background image
        bgSize="cover"               // Cover the entire section
        bgPosition="center"          // Center the background image
        bgRepeat="no-repeat"         // Don't repeat the image
        position="relative"          // Allow overlay effects
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text readability
          zIndex: 1,
        }}
      >
        {/* Content Box */}
        <Box position="relative" zIndex={2} maxW="800px" mx="auto">
          <Heading as="h1" size="2xl" mb={8} textAlign="center">
            Welcome to Brain Tumor Detection
          </Heading>
          <Text fontSize="lg" mb={8} textAlign="center">
            Empowering you with early detection and reliable information to fight brain tumors.
          </Text>

          <VStack spacing={8} align="start">
            <Box>
              <Heading as="h2" size="lg" mb={4}>
                What is a Brain Tumor?
              </Heading>
              <Text fontSize="md">
                A brain tumor is a mass or growth of abnormal cells in your brain. Brain tumors can be 
                benign (non-cancerous) or malignant (cancerous). Early detection is key to effective treatment.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                Causes of Brain Tumors
              </Heading>
              <Text fontSize="md">
                The causes of brain tumors aren't always clear. However, genetic mutations, exposure to radiation, 
                and a family history of brain tumors can increase the risk. It's important to get diagnosed early 
                through imaging like X-rays, CT scans, and MRIs.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={4}>
                Global Brain Tumor Statistics
              </Heading>
              <Text fontSize="md">
                Brain tumors account for a significant number of cancer-related deaths. With about 250,000 new cases 
                annually worldwide, early diagnosis and treatment are critical for improving survival rates.
              </Text>
            </Box>
          </VStack>

          {/* Buttons */}
          <VStack spacing={4} mt={10} textAlign="center">
            <Button
              colorScheme="teal"
              size="lg"
              as={Link}
              to="/predict"
              _hover={{ transform: 'scale(1.05)', transition: 'all 0.2s' }}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              colorScheme="teal"
              size="lg"
              as={Link}
              to="/about"
              _hover={{ transform: 'scale(1.05)', transition: 'all 0.2s' }}
            >
              Learn More
            </Button>
          </VStack>
        </Box>
      </Box>

      <Footer />
    </Flex>
  );
};

export default Home;
