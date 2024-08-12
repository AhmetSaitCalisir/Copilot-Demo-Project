import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/product.service";
import "./ProductDetailPage.css";
import { IProduct } from "../../types/Product.type";

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.productId;

  const [product, setProducts] = useState<IProduct>({
    availabilityStatus: "",
    category: "",
    description: "",
    discountPercentage: 0,
    id: 0,
    images: [],
    price: 0,
    rating: 0,
    shippingInformation: "",
    stock: 0,
    tags: [],
    thumbnail: "",
    title: "",
    brand: "",
    warrantyInformation: "",
  });

  useEffect(() => {
    getProduct(Number(productId)).then((data) => {
      setProducts(data);

      console.log(product);
      console.log(data);
    });
  }, []);

  return (
    <div className="container" style={{ paddingBottom: "10px" }}>
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col">
          <h2>
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </h2>
        </div>
        <div className="col" style={{ textAlign: "end" }}>
          User Rating: <b>{product.rating}</b>/5
        </div>
      </div>
      <div className="carousel-container">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {product.images.map((src, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={src}
                  className="d-block"
                  alt={`${product.title}-${index}`}
                  style={{ maxHeight: "500px", width: "max-content" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="productDetail-titleContainer">
        <h1>{product.title}</h1>
        <h3>{product.brand}</h3>
      </div>
      <div className="productDetail-descriptionContainer">
        <h3>{product.description}</h3>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <div>Price</div>
          <div>{product.price}₺</div>
        </li>
        <li className="list-group-item">
          <div>Stock</div>
          <div>{product.stock}</div>
        </li>
        <li className="list-group-item">
          <div>Waranty</div>
          <div>{product.warrantyInformation}</div>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetailPage;
