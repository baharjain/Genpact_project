// import React from 'react';
// import { Box, Heading, Text, VStack, HStack, Image, Divider } from '@chakra-ui/react';
// import skinCancerData from '../data';

// const SkinCancerInfo = () => {
//   return (
//     <Box textAlign="center" py={10} px={6}>
//       <Heading as="h1" size="xl" mb={6}>
//         Skin Cancer Information
//       </Heading>

//       {/* Horizontal Carousel with Skin Images */}
//       <HStack overflowX="scroll" spacing={4} mb={10} p={2}>
//         {skinCancerData.map((cancer) => (
//           <Box key={cancer.id} minW="200px" boxShadow="lg" borderRadius="md" p={3}>
//             <Image src={`../assets/${cancer.id}.png`} alt={cancer.name} borderRadius="md" />
//             <Text mt={2} fontWeight="bold">{cancer.name}</Text>
//           </Box>
//         ))}
//       </HStack>

//       <VStack spacing={8} alignItems="flex-start">
//         {skinCancerData.map((cancer) => (
//           <Box key={cancer.id} textAlign="left" p={4} boxShadow="md" borderRadius="md" w="full">
//             <Heading as="h2" size="lg" mb={4}>
//               {cancer.name}
//             </Heading>
//             <Text fontSize="md" mb={2}>
//               <strong>Description:</strong> {cancer.description}
//             </Text>
//             <Text fontSize="md" mb={2}>
//               <strong>Early Signs:</strong> {cancer.earlySigns}
//             </Text>
//             <Text fontSize="md">
//               <strong>Prevention Tips:</strong> {cancer.preventionTips}
//             </Text>
//             <Divider mt={4} />
//           </Box>
//         ))}
//       </VStack>
//     </Box>
//   );
// };

// export default SkinCancerInfo;

import React from 'react';
import { Box, Heading, Text, VStack, Grid, GridItem, Divider, Icon, Flex, HStack, useColorModeValue, UnorderedList, ListItem, Image } from '@chakra-ui/react';
import { FaBrain, FaFileMedical } from 'react-icons/fa';
import brainTumorData from '../data';  // Adjust path to wherever your data.js is stored

const BrainTumorInfo = () => {
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const headingColor = useColorModeValue("teal.500", "teal.300");
  const subheadingColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={10} color={headingColor}>
        Brain Tumor Information
      </Heading>

      {/* Section for Types of Brain Tumors */}
      <VStack spacing={8} alignItems="flex-start">
        {brainTumorData.filter(data => data.id === 'brainTumors').map((tumorData) => (
          <Box key={tumorData.id} textAlign="left" p={6} boxShadow="lg" borderRadius="md" bg={cardBg} w="full">
            <Flex align="center" mb={6}>
              <Icon as={FaBrain} w={8} h={8} color="teal.400" mr={4} />
              <Heading as="h2" size="lg" mb={4} color={headingColor}>
                {tumorData.name}
              </Heading>
            </Flex>
            <Text fontSize="md" mb={4} color={subheadingColor}>
              {tumorData.description}
            </Text>

            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              {tumorData.types.map((tumorType, index) => (
                <GridItem key={index}>
                  <Box p={4} borderWidth={1} borderRadius="lg" bg="white" boxShadow="md" h="100%">
                    <Heading as="h3" size="md" mb={2} color={headingColor}>
                      {tumorType.type}
                    </Heading>
                    <Text fontSize="sm">{tumorType.details}</Text>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>
        ))}

        {/* Section for Symptoms of Brain Tumors */}
        {brainTumorData.filter(data => data.id === 'brainTumorSymptoms').map((symptomData) => (
          <Box key={symptomData.id} textAlign="left" p={6} boxShadow="lg" borderRadius="md" bg={cardBg} w="full">
            <Flex align="center" mb={6}>
              <Icon as={FaFileMedical} w={8} h={8} color="teal.400" mr={4} />
              <Heading as="h2" size="lg" mb={4} color={headingColor}>
                {symptomData.name}
              </Heading>
            </Flex>
            <Text fontSize="md" mb={4} color={subheadingColor}>
              {symptomData.description}
            </Text>

            {/* Grid layout for symptoms and image */}
            <Grid templateColumns={['1fr', '2fr 1fr']} gap={6}>
              {/* Symptoms on the left */}
              <GridItem>
                <Heading as="h3" size="md" mb={2} color={headingColor}>
                  General Symptoms
                </Heading>
                <UnorderedList spacing={3} pl={5} mb={6}>
                  {symptomData.symptoms.map((symptom, index) => (
                    <ListItem key={index}>
                      <Text>{symptom}</Text>
                    </ListItem>
                  ))}
                </UnorderedList>

                {/* Location-based symptoms */}
                <Heading as="h3" size="md" mt={6} mb={4} color={headingColor}>
                  Symptoms Based on Tumor Location
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  {Object.entries(symptomData.locationSymptoms).map(([location, locationSymptom], index) => (
                    <GridItem key={index}>
                      <Box p={4} borderWidth={1} borderRadius="lg" bg="white" boxShadow="md" h="100%">
                        <Heading as="h4" size="sm" mb={2} color={headingColor}>
                          {location.charAt(0).toUpperCase() + location.slice(1)} Lobe
                        </Heading>
                        <Text fontSize="sm">{locationSymptom}</Text>
                      </Box>
                    </GridItem>
                  ))}
                </Grid>
              </GridItem>

              {/* Image on the right */}
              <GridItem display="flex" justifyContent="center" alignItems="flex-start" mt={-16}>
                <Image
                  src="../assets/brain_tumor_types.jpeg"  // Replace with your actual image path
                  alt="Brain Tumor Illustration"
                  borderRadius="lg"
                  boxShadow="md"
                  boxSize={['100%', '500px']}  // Adjust to fit the space and align properly
                  objectFit="contain"  // Changed to "contain" to fit within its container
                  maxW="100%"  // Ensure the image does not overflow horizontally
                />
              </GridItem>
            </Grid>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default BrainTumorInfo;
