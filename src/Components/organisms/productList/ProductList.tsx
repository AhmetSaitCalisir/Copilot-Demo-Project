import { useEffect } from "react";
import "./ProductList.css";
import { IProduct } from "../../../types/Product.type";
import ProductCard from "../../molecules/productCard/ProductCard";

type IProps = {
  products: IProduct[];
};

const ProductList = ({ products }: IProps) => {
  useEffect(() => {
    setTimeout(() => {
      const cards = document.querySelectorAll(".productCard-card");
      const heightList = Array.from(cards).map((element) => {
        return element.scrollHeight;
      });
      const maxNumber = Math.max(...heightList);

      Array.from(cards).forEach((card) => {
        (card as HTMLDivElement).style.height = `${maxNumber}px`;
      });
    }, 500);
  }, [products]);

  window.addEventListener("resize", () => {
    const cards = document.querySelectorAll(".productCard-card");
    const heightList = Array.from(cards).map((element) => {
      return element.scrollHeight;
    });
    const maxNumber = Math.max(...heightList);

    Array.from(cards).forEach((card) => {
      (card as HTMLDivElement).style.height = `${maxNumber}px`;
    });
  });

  return (
    <div className="container productPage-container">
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
};

export default ProductList;
