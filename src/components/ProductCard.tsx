import * as React from 'react';
import {
  Text,
  Box,
  AspectRatio,
  Image,
  Skeleton,
  HStack,
  useBreakpointValue,
  Center,
} from '@chakra-ui/react';
import Product from '../ProductInterface';
import { ButtonAddToCart } from './ButtonAddToCart';

interface Props {
  product: Product,
}

export function ProductCard(props: Props): JSX.Element {
  const { product } = props;
  const {
    title, price, image, rating, id,
  } = product;
  return (
    <Box width="150px" border="1px" borderColor="blue.800" borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}>
      <Center>
        <AspectRatio ratio={4 / 4} width="90%" height="80%">
          <Image
            src={image}
            alt={title}
            draggable="false"
            fallback={<Skeleton />}
          />
        </AspectRatio>
      </Center>
      <Text noOfLines={2} fontSize="16px" color="gray.700">
        {title}
      </Text>
      <HStack>
        <Text fontSize="12px" color="gray.600">
          {`Rate ${rating.rate} - ${rating.count} Reviews`}
        </Text>
      </HStack>
      <Text
        as="span"
        fontSize="14px"
        color="gray.700"
      >
        {`$${price}`}
      </Text>
      <ButtonAddToCart productId={id} />
    </Box>
  );
}
