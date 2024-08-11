import { useEffect, useState } from "react";
import ProductList from "../../Components/organisms/ProductList";
import { getProducts } from "../../services/product.service";
import { Product } from "../../types/Product.type";
import "./ProductPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
