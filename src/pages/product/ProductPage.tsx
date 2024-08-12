import { useEffect, useState } from "react";
import { getProducts } from "../../services/product.service";
import "./ProductPage.css";
import { IProduct } from "../../types/Product.type";
import ProductList from "../../Components/organisms/productList/ProductList";

const ProductPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

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
