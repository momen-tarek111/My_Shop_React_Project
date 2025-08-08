
const ProductFilterBox = ({filter,setFilter}) => {
    const onChangeHandler=(e)=>{
        setFilter(e.target.id)
    }
    return (
        <div className="product-filter">
            <div className="form-group">
                <input value={filter} checked={filter==="all"} onChange={onChangeHandler} type="radio" name="filter" id="all" />
                <label htmlFor="all">بدون فلتر</label>
            </div>
            <div className="form-group">
                <input value={filter} checked={filter==="laptop"} onChange={onChangeHandler} type="radio" name="filter" id="laptop" />
                <label htmlFor="laptop">لابتوب</label>
            </div>
            <div className="form-group">
                <input value={filter} checked={filter==="mobile"} onChange={onChangeHandler} type="radio" name="filter" id="mobile" />
                <label htmlFor="mobile">موبيل</label>
            </div>
        </div>
    )
}

export default ProductFilterBox