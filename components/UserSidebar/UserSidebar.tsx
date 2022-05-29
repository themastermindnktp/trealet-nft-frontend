import { Avatar, Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { IoDocumentsOutline, IoFolderOpenOutline } from "react-icons/io5";
import data from "./data.json";
export const UserSidebar: React.FunctionComponent = () => {
  const { avatar, address, userName, fullName, createdAt } = data;
  return (
    <>
      <Flex justifyContent="center" mb={4}>
        <Box width="280px">
          <Avatar name="KD" size="full" src={avatar} />
        </Box>
      </Flex>
      <Box color="gray.600">
        <Text as="h2" fontWeight="bold" fontSize="xl">
          {fullName}
        </Text>
        <Text as="span" color="gray.500" lineHeight="1">
          {`@${userName}`}
        </Text>

        <Stack spacing="1" mt="2">
          <HStack fontSize="sm">
            <Icon as={IoDocumentsOutline} color="gray.500" />
            <Text>{address}</Text>
          </HStack>
          <HStack fontSize="sm">
            <Icon as={IoFolderOpenOutline} color="gray.500" />
            <Text>{createdAt}</Text>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};
