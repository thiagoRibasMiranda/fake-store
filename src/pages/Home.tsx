import * as React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import getAllProducts from '../services/getAllProducts';
import Product from '../ProductInterface';
import { Header } from '../components/Header';
import { StoreCategories } from '../components/StoreCategories';
import { ProductCard } from '../components/ProductCard';
import { SkeletonCard } from '../components/SkeletonCard';
import getProductByCategory from '../services/getProductsByCategory';

export function Home(): JSX.Element {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res))
      .then(() => setLoading(false));
  }, []);

  const handleClick = (category: string): void => {
    setLoading(true);
    if (category === 'AllCategories') {
      getAllProducts()
        .then((res) => setProducts(res))
        .then(() => setLoading(false));
    } else {
      getProductByCategory(category)
        .then((res) => setProducts(res))
        .then(() => setLoading(false));
    }
  };

  return (
    <Box width="100%">
      <Header />
      <StoreCategories handleClick={handleClick} />
      <Grid templateColumns="repeat(5, 1fr)" gap={2} p="2" background="gray.50" width="100%">
        {
          !loading
            ? (products.map((product) => (
              <Box display="flex" justifyContent="center">
                <ProductCard product={product} key={product.id} />
              </Box>
            )))
            : (Array.from(Array(10).keys()).map((item) => (<SkeletonCard key={item} />)))
        }
      </Grid>
    </Box>
  );
}
