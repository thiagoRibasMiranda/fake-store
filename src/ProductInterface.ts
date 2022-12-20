interface Product {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  }
}

export default Product;
