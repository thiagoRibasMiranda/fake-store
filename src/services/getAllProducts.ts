import Product from '../ProductInterface';

function getAllProducts(): Promise<Product[]> {
  return (
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
  );
}

export default getAllProducts;
