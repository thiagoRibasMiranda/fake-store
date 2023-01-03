import * as React from 'react';
import {
  Text,
  Flex,
  Image,
  Skeleton,
  Select,
  Center,
} from '@chakra-ui/react';
import getProductById from '../services/getProductById';
import Product from '../ProductInterface';
import { CartItemType } from '../context/cartItensContext';
import { SkeletonCard } from './SkeletonCard';
import { ButtonDeleteItem } from './ButtonDeleteItem';

export function CartItem(props: CartItemType): JSX.Element {
  const { id, qtd } = props;
  const [product, setProduct] = React.useState<Product>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res))
      .then(() => setLoading(false));
  });

  return (
    <div>
      {
        loading
          ? (<SkeletonCard />)
          : (
            <Flex direction="row" justify="space-between" align="center">
              <Center width="10%">
                <Image
                  src={product?.image}
                  alt={product?.title}
                  draggable="false"
                  fallback={<Skeleton />}
                  width="90%"
                />
              </Center>
              <Text noOfLines={1} maxWidth="25%" fontSize="12px" color="gray.700">
                {product?.title}
              </Text>
              <Select maxWidth="10%">
                {Array.from(Array(10).keys()).map((item) => (
                  <option key={item} value={qtd}>{item}</option>))}
              </Select>
              <Text
                as="span"
                fontSize="14px"
                color="gray.700"
              >
                {`$${product?.price}`}
              </Text>
              <ButtonDeleteItem itemId={id} />
            </Flex>
          )
    }
    </div>
  );
}
