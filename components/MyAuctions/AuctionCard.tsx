import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Link,
  Skeleton,
  Stack,
  StackProps,
  useBreakpointValue,
  useColorModeValue,
  Image,
  Text,
} from "@chakra-ui/react";
import { Rating } from "../Rating";
import { PriceTag } from "./PriceTag";
import { Auction } from "./_data";

interface Props {
  auction: Auction;
  rootProps?: StackProps;
}

export const AuctionCard: React.FunctionComponent<Props> = (props) => {
  const { auction, rootProps } = props;
  const { name, imageUrl, price, salePrice, rating } = auction;
  return (
    <Stack spacing={useBreakpointValue({ base: "4", md: "5" })} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {name}
          </Text>
          <PriceTag price={price} salePrice={salePrice} currency="USD" />
        </Stack>
        <HStack>
          <Rating defaultValue={rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            12 Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="purple" isFullWidth>
          Bid
        </Button>
      </Stack>
    </Stack>
  );
};
