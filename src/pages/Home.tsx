import * as React from 'react';
import {
  Text,
} from '@chakra-ui/react';
import getAllProducts from '../services/getAllProducts';
import Product from '../ProductInterface';
import { Loading } from '../components/Loading';
import { Header } from '../components/Header';

export function Home(): JSX.Element {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res));
  }, []);

  return (
    <div>
      <Header />
      {
        products
          ? (products.map((product) => (<Text>{product.title}</Text>)))
          : (<Loading />)
      }
    </div>
  );
}
