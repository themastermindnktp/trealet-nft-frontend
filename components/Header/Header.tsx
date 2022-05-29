import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Link as CLink,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { Logo } from "../Logo";

export const NavBar = styled(Box)`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(64px);
`;

export const Header: React.FunctionComponent = () => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure()
    const navItems = (
    <>
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
        <Link href="/me" passHref>
          <Button as="a" colorScheme="purple">
            Connect Wallet
          </Button>
        </Link>
    </>
    );
  return (
    <NavBar w="full" position="fixed" top="0" left="0" zIndex="100">
      <Flex maxW="container.xl" py={2} px={4} mx="auto">
        <Link href="/" passHref>
          <CLink>
            <Logo />
          </CLink>
        </Link>
        <Flex ml="auto" display={{base: "flex", sm: "none", md: "flex"}}>
          {navItems}
        </Flex>
          <Flex ml="auto" display={{base: "none", sm: "flex", md: "none"}}>
              <Button bgColor="gray.200" ml={2} ref={btnRef} onClick={onOpen}>
                  <IoMenu size={24} />
              </Button>
              <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
              >
                  <DrawerOverlay />
                  <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>Create your account</DrawerHeader>
                      <DrawerBody onClick={onClose}>
                          <VStack>{navItems}</VStack>
                      </DrawerBody>
                  </DrawerContent>
              </Drawer>
          </Flex>

      </Flex>
    </NavBar>
  );
};
