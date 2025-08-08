import ProductList from "./ProductList"
import { ProductSidebar } from "./ProductSidebar"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { fetchProducts } from "../../redux/apiCalls/productAPICalls"
import "./products.css"
import Pagination from "./Pagination"
const Products = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.product)
  const [filter, setFilter] = useState("all")
  const [sort, setSort] = useState("noSort")
  const [currPage, setCurrPage] = useState(1)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  const filteredProducts = products.filter(item =>
    filter === "laptop" ? item.isLaptop === true :
      filter === "mobile" ? item.isLaptop === false :
        item
  )
  const sortedProducts =
    sort === "low" ? filteredProducts.sort((a, b) => a.price - b.price) :
      sort === "high" ? filteredProducts.sort((a, b) => b.price - a.price) :
        filteredProducts.sort((a, b) => (a.title > b.title ? 1 : -1))


  const PRODUCT_PER_PAGE = 6
  const pages = Math.ceil(sortedProducts.length / PRODUCT_PER_PAGE)
  const startIndex=(currPage-1)*PRODUCT_PER_PAGE;
  const endIndex=currPage*PRODUCT_PER_PAGE;
  const finalProducts=sortedProducts.slice(startIndex,endIndex);
  console.log()
  return (
    <>
      <div className="products">
        <ProductSidebar filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
        <ProductList products={finalProducts} />
      </div>
      <Pagination pages={pages} currPage={currPage} setCurrPage={setCurrPage} />
    </>
  )
}

export default Products