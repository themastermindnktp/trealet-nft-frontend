import { Box, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Cta } from "../components/Cta";
import { FeatureExhibition } from "../components/FeatureExhibition";
import { Hero } from "../components/Hero";
import { Testimonial } from "../components/Testimonial";
import {router} from "next/client";

const Home: NextPage = () => {
  return (
    <Stack spacing={16}>
        <button onClick={() => {
            router.push("/me");
        }}>Route me</button>
      <Hero />
      <Testimonial />
      <FeatureExhibition />
      <Cta />
    </Stack>
  );
};

export default Home;
