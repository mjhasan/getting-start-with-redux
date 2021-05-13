import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: []
}

const cartReducers = (state = initialState, action) => {
    const product = { ...action.product, cartId: state.cart.length + 1 }
    switch (action.type) {
        case ADD_TO_CART:
            return { cart: [...state.cart, product] }
        case REMOVE_FROM_CART:
            return { cart: state.cart.filter(item => item.cartId !== action.id) }
        default:
            return state;
    }
}

export default cartReducers;