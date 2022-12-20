import Product from '../ProductInterface';

function getProductById(id: number): Promise<Product> {
  return (
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
  );
}

export default getProductById;
