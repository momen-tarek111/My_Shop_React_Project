import { cartActions } from "../slices/cartSlice";

export function addToCart(newItem) {
    return async (dispatch,getState) => {
        try {
            
            dispatch(cartActions.addItemToCart(newItem))
            const {cart}=getState()
            localStorage.setItem("cartItems",JSON.stringify(cart.cartItems))
        } catch (error) {
            console.log(error)
        }
    }

}
export function removeFromCart(cartId) {
    return async (dispatch,getState) => {
        try {
            dispatch(cartActions.removeItemFromCart(cartId))
            const {cart}=getState()
            localStorage.setItem("cartItems",JSON.stringify(cart.cartItems))
        } catch (error) {
            console.log(error)
        }
    }

}