import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

type IProps = {
  thumbnail: string;
  title: string;
  description: string;
  id: number;
};

const ProductCard = (props: IProps) => {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/product/${props.id}`);
  };

  return (
    <div className="card productCard-card" onClick={onCardClick}>
      <img src={props.thumbnail} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text productCard-content">{props.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
