import * as React from 'react';
import {
  Text,
} from '@chakra-ui/react';
import Product from '../ProductInterface';
import { Loading } from '../components/Loading';
import getProductById from '../services/getProductById';

export function ProductDetail(): JSX.Element {
  const [product, setProduct] = React.useState<Product>();

  React.useEffect(() => {
    getProductById(1)
      .then((res) => setProduct(res));
  }, []);

  return (
    <div>
      {
        product
          ? (<Text>{product.title}</Text>)
          : (<Loading />)
      }
    </div>
  );
}
