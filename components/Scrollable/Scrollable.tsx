import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";

const ScrollableContainer = styled.div`
  max-height: calc(100vh - 56px);
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Scrollable: React.FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  return <ScrollableContainer>{children}</ScrollableContainer>;
};
