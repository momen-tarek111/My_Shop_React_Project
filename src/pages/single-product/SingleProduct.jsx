import "./single-product.css"
import { useParams } from "react-router-dom"
import Rating from "../../components/rating/Rating"
import ProductDescription from "../special-offer-page/ProductDescription"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductById } from '../../redux/apiCalls/productAPICalls';
import Spinner from "../../components/spinner/Spinner"
import { useSelector } from 'react-redux';
import { addToCart } from "../../redux/apiCalls/cartAPICalls";
import { useState } from "react";
const SingleProduct = () => {
  const dispatch=useDispatch();
  const {product,loading}=useSelector(state=>state.product)
  const [qty,setQty]=useState(1)
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductById(id))
  },[id])
  const addToCartHandler=()=>{
    dispatch(addToCart({
      id:product?.id,
      quantity:qty,
      price:product?.price,
      title:product?.title,
      image:product?.image
    }))
  }
  if(loading) return <Spinner/>
  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={[product?.image]} alt="" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className="product-price">${product?.price}</div>
          <div className="product-add-to-cart">
            <div>الكميه</div>
            <input type="number" min="1" max="10" value={qty} onChange={(e)=>setQty(e.target.value)} />
            <button onClick={addToCartHandler} className="add-to-cart-btn" >
              اضافه الي سله التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </div>
  )
}

export default SingleProduct