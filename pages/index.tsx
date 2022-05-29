import { Box, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Cta } from "../components/Cta";
import { FeatureExhibition } from "../components/FeatureExhibition";
import { Hero } from "../components/Hero";
import { Testimonial } from "../components/Testimonial";

const Home: NextPage = () => {
  return (
    <Stack spacing={16}>
      <Hero />
      <Testimonial />
      <FeatureExhibition />
      <Cta />
    </Stack>
  );
};

export default Home;
