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
import {useEffect} from "react";

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
        <Tabs
            isFitted={true}
            colorScheme="purple"
          isLazy={true}
          lazyBehavior={"keepMounted"}
        >
          <TabList>
            <Tab>On-chain assets</Tab>
            <Tab>Off-chain assets</Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              <Tabs
                  variant="soft-rounded" colorScheme="purple"
                  isLazy={true}
                  lazyBehavior={"keepMounted"}
              >
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
            </TabPanel>
            <TabPanel>
              <Tabs
                  variant="soft-rounded" colorScheme="purple"
                  isLazy={true}
                  lazyBehavior={"keepMounted"}
              >
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
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Grid>
  );
};

export default Me;
