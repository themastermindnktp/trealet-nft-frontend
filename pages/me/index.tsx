import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Link as CLink,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { MyAssets } from "../../components/MyAssets";
import { MyAuctions } from "../../components/MyAuctions";
import { MyTickets } from "../../components/MyTickets";
import { Scrollable } from "../../components/Scrollable";
import { UserSidebar } from "../../components/UserSidebar";

const Me: NextPage = () => {
  return (
    <Grid templateColumns={{ lg: "2fr 6fr" }} gap={10}>
      <Box display={{ base: "none", lg: "block" }}>
        <Box position="sticky" top="16">
          <Scrollable>
            <UserSidebar />
          </Scrollable>
        </Box>
      </Box>
      <Box>
        <Tabs variant="soft-rounded" colorScheme="purple">
          <TabList>
            <Tab>My assets</Tab>
            <Tab>My tickets</Tab>
            <Tab>My auctions</Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              <MyAssets />
            </TabPanel>
            <TabPanel>
              <MyTickets />
            </TabPanel>
            <TabPanel>
              <MyAuctions />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Grid>
  );
};

export default Me;
