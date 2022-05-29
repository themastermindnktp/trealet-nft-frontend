import { Box, Image } from "@chakra-ui/react";

// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import data from "./data.json";
import { PreviewImageModal } from "../PreviewImageModal/PreviewImageModal";

export const MyAssets: React.FunctionComponent = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry>
        {data.map((file) => {
          return (
            <Box key={file.id} p={2} overflow="hidden">
              <PreviewImageModal src={file.url} modalSize="6xl" />
            </Box>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};
