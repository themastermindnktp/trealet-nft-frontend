import { Box, Flex, Heading } from "@chakra-ui/react";

export const Logo: React.FunctionComponent = () => {
  return (
    <Flex alignItems="center">
      <Box
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        w={10}
        h={10}
        color="gray.700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </Box>
      <Heading size="lg" ml={2} color="gray.700">
        Trealet
      </Heading>
    </Flex>
  );
};
