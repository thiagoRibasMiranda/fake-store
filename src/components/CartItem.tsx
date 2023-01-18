import * as React from 'react';
import {
  Text,
  Flex,
  Image,
  Skeleton,
  Center,
} from '@chakra-ui/react';
import getProductById from '../services/getProductById';
import Product from '../ProductInterface';
import { CartItemType } from '../context/cartItensContext';
import { ButtonDeleteItem } from './ButtonDeleteItem';
import { QuantitySelect } from './QuantitySelect';
import { SkeletonItem } from './SkeletonItem';

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
          ? (<SkeletonItem />)
          : (
            <Flex direction="row" justify="space-around" align="center">
              <Center width="10%" height="70%">
                <Image
                  src={product?.image}
                  alt={product?.title}
                  draggable="false"
                  fallback={<Skeleton />}
                  width="90%"
                />
              </Center>
              <Text noOfLines={1} width="15%" fontSize="16px" color="gray.700">
                {product?.title}
              </Text>
              <QuantitySelect itemId={id} itemQtd={qtd} />
              <Text
                as="span"
                fontSize="16px"
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
