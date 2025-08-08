import React from 'react'
import ProductFilterBox from './ProductFilterBox'
import ProductSortBox from './ProductSortBox'

export const ProductSidebar = ({filter,setFilter,sort,setSort}) => {
  return (
    <div className="product-sidebar">
        <div className="sidebar-item">
            <h4 className="product-sidebar-title">
                فلتر حسب السلعه
            </h4>
            <ProductFilterBox  filter={filter} setFilter={setFilter}/>
        </div>
        <div className="sidebar-item">
            <h4 className="product-sidebar-title">
                ترتيب حسب السعر
            </h4>
            <ProductSortBox sort={sort} setSort={setSort}/>
        </div>
    </div>
  )
}
