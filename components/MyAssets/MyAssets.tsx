import { Box, Image } from "@chakra-ui/react";

// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import data from "./data.json";

export const MyAssets: React.FunctionComponent = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry>
        {data.map((file) => {
          return (
            <Box key={file.id} p={2} overflow="hidden">
              <Image
                src={file.url}
                alt=""
                w="full"
                padding={1}
                bgColor="gray.200"
                boxShadow="sm"
                borderRadius="md"
                loading="lazy"
              />
            </Box>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};
