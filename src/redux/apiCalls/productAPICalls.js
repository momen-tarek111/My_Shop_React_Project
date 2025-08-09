import { productActions } from "../slices/productSlices";

export function fetchProducts() {
    return async (dispatch) => {
        try {
            // const response = await fetch("http://localhost:5000/products")
            const response = await fetch("https://my-json-server.typicode.com/momen-tarek111/json_server_My_Shop_Project/products")
            const data = await response.json()
            dispatch(productActions.setProducts(data))
        } catch (error) {
            console.log(error)
        }
    }

}
export function getProductById(productId) {
    return async (dispatch) => {
        try {
            dispatch(productActions.setLoading())
            // const response = await fetch(`http://localhost:5000/products/${productId}`)
            const response = await fetch(`https://my-json-server.typicode.com/momen-tarek111/json_server_My_Shop_Project/products/${productId}`)
            const data = await response.json()
            dispatch(productActions.setProduct(data))
            dispatch(productActions.clearLoading())
        } catch (error) {
            console.log(error)
        }
    }

}