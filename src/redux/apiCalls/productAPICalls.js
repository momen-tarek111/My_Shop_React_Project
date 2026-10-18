import { productActions } from "../slices/productSlices";

const BASE_URL = "https://6ad5203f48476c0785d96b3a.mockapi.io/products";

export function fetchProducts() {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            dispatch(productActions.setProducts(data));
        } catch (error) {
            console.log(error);
        }
    };
}

export function getProductById(productId) {
    return async (dispatch) => {
        try {
            dispatch(productActions.setLoading());
            
            const response = await fetch(BASE_URL);
            const data = await response.json();
            const product = data.find((item) => Number(item.id) === Number(productId));
            if (product) {
                dispatch(productActions.setProduct(product));
            } else {
                console.log("Product not found");
            }
            dispatch(productActions.clearLoading());
        } catch (error) {
            console.log(error);
            dispatch(productActions.clearLoading());
        }
    };
}