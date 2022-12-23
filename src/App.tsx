import * as React from 'react';
import {
  ChakraProvider,
  Text,
} from '@chakra-ui/react';
import getAllCategories from './services/getAllCategories';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';

export function App(): JSX.Element {
  const [categories, setCategories] = React.useState<string[]>([]);

  React.useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res));
  }, []);

  return (
    <ChakraProvider>
      <div>
        <Home />
        <ProductDetail />
        {categories && categories.map((category) => (<Text>{category}</Text>))}
      </div>
    </ChakraProvider>
  );
}
