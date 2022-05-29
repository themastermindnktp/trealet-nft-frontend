import {
  Stack,
  Box,
  useColorModeValue,
  Heading,
  HStack,
  Icon,
  Flex,
  Skeleton,
  Image,
  Link,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export const FeatureExhibition: React.FunctionComponent = () => (
  <Stack
    direction={{ base: "column-reverse", lg: "row" }}
    spacing={{ base: "0", lg: "20" }}
  >
    <Box
      width={{ lg: "sm" }}
      transform={{ base: "translateY(-50%)", lg: "none" }}
      bg={{
        base: useColorModeValue("purple.50", "gray.700"),
        lg: "transparent",
      }}
      mx={{ base: "6", md: "8", lg: "0" }}
      px={{ base: "6", md: "8", lg: "0" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack spacing={{ base: "8", lg: "10" }}>
        <Stack spacing={{ base: "2", lg: "4" }}>
          <Heading
            size="xl"
            color={useColorModeValue("purple.500", "purple.300")}
          >
            Misguided
          </Heading>
          <Heading size="xl" fontWeight="normal">
            Refresh your wardrobe
          </Heading>
        </Stack>
        <HStack spacing="3">
          <Link
            color={useColorModeValue("purple.500", "purple.300")}
            fontWeight="bold"
            fontSize="lg"
          >
            Discover now
          </Link>
          <Icon
            color={useColorModeValue("purple.500", "purple.300")}
            as={FaArrowRight}
          />
        </HStack>
      </Stack>
    </Box>
    <Flex flex="1" overflow="hidden">
      <Image
        borderRadius={8}
        src="https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Lovely Image"
        fallback={<Skeleton />}
        maxH="450px"
        minW="300px"
        objectFit="cover"
        flex="1"
      />
    </Flex>
  </Stack>
);
