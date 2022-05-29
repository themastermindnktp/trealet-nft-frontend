import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoDocumentsOutline, IoFolderOpenOutline } from "react-icons/io5";
export const UserSidebar: React.FunctionComponent = () => (
  <>
    <Flex justifyContent="center" mb={4}>
      <Box width="280px">
        <Avatar
          name="KD"
          size="full"
          src="https://cdnb.artstation.com/p/assets/images/images/001/452/685/large/ernest-jan-vincent-munoz-totoro-square.jpg?1446673397"
        />
      </Box>
    </Flex>
    <Box color="gray.600">
      <Text as="h2" fontWeight="bold" fontSize="xl">
        Friedrich Engels
      </Text>
      <Text as="span" color="gray.500" lineHeight="1">
        @friedrich
      </Text>

      <Stack spacing="1" mt="2">
        <HStack fontSize="sm">
          <Icon as={IoDocumentsOutline} color="gray.500" />
          <Text>Ontario, Canada</Text>
        </HStack>
        <HStack fontSize="sm">
          <Icon as={IoFolderOpenOutline} color="gray.500" />
          <Text>July, 2021</Text>
        </HStack>
      </Stack>
    </Box>
  </>
);
