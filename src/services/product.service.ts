import { Product } from "../types/Product.type";

export { getProducts, getProduct };

// https://dummyjson.com/docs/products

async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return data.products as Product[];
}

async function getProduct(productId: number): Promise<Product> {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();

  return data as Product;
}
