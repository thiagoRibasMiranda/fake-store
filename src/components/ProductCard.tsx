import * as React from 'react';
import {
  Text,
  Box,
  AspectRatio,
  Image,
  Skeleton,
  HStack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import Product from '../ProductInterface';

interface Props {
  product: Product
}

export function ProductCard(props: Props): JSX.Element {
  const { product } = props;
  const {
    title, price, image, rating,
  } = product;
  return (
    <Box>
      <AspectRatio ratio={4 / 3}>
        <Image
          src={image}
          alt={title}
          draggable="false"
          fallback={<Skeleton />}
          borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
        />
      </AspectRatio>
      <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
        {title}
      </Text>
      <HStack>
        <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
          Rate
          {rating.rate}
          {rating.count}
          Reviews
        </Text>
      </HStack>
      <Text
        as="span"
        fontWeight="medium"
        color="gray.700"
      >
        {price}
      </Text>
    </Box>
  );
}
