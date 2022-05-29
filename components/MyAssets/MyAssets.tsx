import { Box, Image } from "@chakra-ui/react";

// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import data from "./data.json";
import {PreviewImageModal} from "../PreviewImageModal";
import {useEffect, useState  } from "react";
import axios from "axios";

async function getUser(setImageState: (value: any) => void) {
    try {
        const response = await axios.get('/user?ID=12345');
        //set response
        if(response) {
            setImageState(response);
        }
        setImageState(data);
    } catch (error) {
        setImageState(data);
        console.error(error);
    }
}

export const MyAssets: React.FunctionComponent = () => {
  const [imageState, setImageState] = useState<any>([]);
  useEffect(() => {
      getUser(setImageState);
  }, []);
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry>
        {imageState.map((file: any) => {
          return (
            <Box key={file.id} p={2} overflow="hidden">
                <PreviewImageModal src={file.url} modalSize="5xl"/>
            </Box>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};
