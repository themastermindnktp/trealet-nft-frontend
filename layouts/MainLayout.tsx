import { Container, ContainerProps } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { Header } from "../components/Header";

export const MainLayout: React.FunctionComponent<PropsWithChildren<{}>> = ({
  children,
  ...props
}: React.PropsWithChildren<ContainerProps>) => (
  <>
    <Header />
    <Container maxW="container.xl" {...props} pt={16}>
      {children}
    </Container>
  </>
);
