import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import museumImg from "./museum.jpg";

export const FeatureSlide: React.FunctionComponent = () => (
  <Box pb={8}>
    <Box height="460px" borderRadius={8} overflow="hidden" mb={4}>
      <Box as={Image} src={museumImg} alt="" objectFit="cover" />
    </Box>
    <Box>
      <Heading color="purple.600">Museum of Art</Heading>
      <Text>
        This immersive installation by Brooklyn-based artist Amanda
        Phingbodhipakkiya is inspired by the resiliency of New York’s Asian
        American and Pacific Islander community.
      </Text>
    </Box>
  </Box>
);
