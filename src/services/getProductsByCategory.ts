import Product from '../ProductInterface';

function getProductByCategory(category: string): Promise<Product[]> {
  return (
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
  );
}

export default getProductByCategory;
