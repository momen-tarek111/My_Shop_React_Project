import HeadingTitle from '../../components/heading-title/HeadingTitle';
import Slider from '../../components/slider/Slider';
import SpecialOffers from '../../components/special-offers/Special-offers';
import Banner from '../../components/banner/Banner';
import Brands from '../../components/brands/Brands';
import Category from '../../components/category/Category';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/apiCalls/productAPICalls';
import { useSelector } from 'react-redux';
const Home = () => {
    const dispatch=useDispatch()
    const {products}=useSelector(state=>state.product )
    useEffect(()=>{
        dispatch(fetchProducts())   
    },[])
    const laptops = products.filter(p => p.isLaptop === true)
    const mobiles = products.filter(p => p.isLaptop === false)
    return (
        <>
            <Banner />
            <Category />
            <SpecialOffers />
            <HeadingTitle title="الجديد من اللابتوبات" />
            <Slider data={laptops} />
            <HeadingTitle title="الجديد من الموبيلات" />
            <Slider data={mobiles} />
            <HeadingTitle title="تسوق من المارك" />
            <Brands />
        </>
    )
}

export default Home