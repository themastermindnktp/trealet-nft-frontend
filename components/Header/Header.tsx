import { Box, Button, Flex, Link as CLink } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Logo } from "../Logo";

export const NavBar = styled(Box)`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(64px);
`;

export const Header: React.FunctionComponent = () => {
  const router = useRouter();
  const onConnectWallet = () => {
    router.push("/me");
  };
  return (
    <NavBar w="full" position="fixed" top="0" left="0" zIndex="100">
      <Flex maxW="container.xl" py={2} px={4} mx="auto">
        <Link href="/" passHref>
          <CLink>
            <Logo />
          </CLink>
        </Link>
        <Flex ml="auto">
          <Link href="/auctions" passHref>
            <CLink px={6} py={2} fontWeight="medium">
              Auctions
            </CLink>
          </Link>
          <Link href="/exhibitions" passHref>
            <CLink px={6} py={2} fontWeight="medium">
              Exhibitions
            </CLink>
          </Link>
          <Button colorScheme="purple" onClick={onConnectWallet}>
            Connect Wallet
          </Button>
        </Flex>
      </Flex>
    </NavBar>
  );
};
