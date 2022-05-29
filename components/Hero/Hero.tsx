import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import { FeatureSlide } from "./FeatureSlide";
import { Box } from "@chakra-ui/react";

export const Hero: React.FunctionComponent = () => {
  return (
    <Box>
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <FeatureSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FeatureSlide />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
