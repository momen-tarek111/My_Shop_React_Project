
const ProductSortBox = ({sort,setSort}) => {
    const onChangeHandler=(e)=>{
        setSort(e.target.id)
    }
  return (
    <div className="product-sort">
            <div className="form-group">
                <input value={sort} onChange={onChangeHandler} checked={sort==="noSort"} type="radio" name="sort" id="noSort" />
                <label htmlFor="noSort">بدون ترتيب</label>
            </div>
            <div className="form-group">
                <input value={sort} onChange={onChangeHandler} checked={sort==="low"} type="radio" name="sort" id="low" />
                <label htmlFor="low">من الاقل الي الاعلي</label>
            </div>
            <div className="form-group">
                <input value={sort} onChange={onChangeHandler} checked={sort==="high"} type="radio" name="sort" id="high" />
                <label htmlFor="high">من الاعلي الي الاقل</label>
            </div>
        </div>
  )
}

export default ProductSortBox