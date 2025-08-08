import { useParams } from "react-router-dom"
import { specialOffers } from "../../data/special-offers"
import Rating from "../../components/rating/Rating"
import ProductDescription from "./ProductDescription"
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/apiCalls/cartAPICalls";
import "./special-offer-pages.css"
const SpecialOfferPage = () => {
  const dispatch = useDispatch();
  const [ qty, setQty ] = useState(1)
  const { id } = useParams();
  const { images, title, price, discount, reviews, rating } = specialOffers.find(p => p.id === +id)
  const [imageIndex, setImageIndex] = useState(0)
  const calculateDiscount = price - (discount * price) / 100;
  const addToCartHandler = () => {
    dispatch(addToCart({
      id:id,
      quantity: qty,
      price: calculateDiscount,
      title: title,
      image: images[0]
    }))
  }
  return (
    <>
      <div className="special-offers-page">
        <div className="special-offers-page-img-wrapper">
          <img
            src={images[imageIndex]}
            alt=""
            className="special-offers-page-img"
          />
          <div className="special-offers-page-select">
            {images.map((img, index) => (
              <img
                onClick={() => setImageIndex(index)}
                className="select-img"
                key={index}
                src={img}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="special-offers-page-info">
          <h3 className="special-offers-page-title">{title}</h3>
          <Rating rating={rating} reviews={reviews} />
          <div className="special-offers-price">
            <b className="special-offers-item">${price}</b>
            <b className="special-offers-final-price-item">
              ${calculateDiscount}
            </b>
          </div>
          <div className="special-offers-add-to-cart">
            <div>الکمیه</div>
            <input type="number" min="1" max="10" value={qty} onChange={(e) => setQty(e.target.value)} />
            <button onClick={addToCartHandler} className="add-to-cart-btn" >
              اضافه الي سله التسوق
            </button>          
          </div>
        </div>
      </div>
      <ProductDescription />
    </>
  )
}

export default SpecialOfferPage