function getAllCategories(): Promise<string[]> {
  return (
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
  );
}

export default getAllCategories;
