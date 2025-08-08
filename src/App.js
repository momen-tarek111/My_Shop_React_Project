import './App.css';
import { Footer } from './components/footer/Footer';
import Header from './components/header/header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Products from './pages/products/Products';
import SingleProduct from './pages/single-product/SingleProduct';
import SpecialOfferPage from "./pages/special-offer-page/SpecialOfferPage" 
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<SingleProduct/>}/>
          <Route path='/special-offer/:id' element={<SpecialOfferPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
