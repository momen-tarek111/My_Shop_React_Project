import { Link } from "react-router-dom";
import Rating from "../../components/rating/Rating";
const ProductItem = ({product}) => {
    const {id,title,price,image,rating,reviews}=product;
  return (
    <Link
        to={`/products/${id}`}
        className="product-item"
    >
        <img src={image} alt={title} className="product-item-img"/>
        <h3 className="product-item-title">{title}</h3>
        <Rating reviews={reviews} rating={rating}/>
        <div className="product-item-price">${price}</div>
    </Link>
  )
}

export default ProductItem