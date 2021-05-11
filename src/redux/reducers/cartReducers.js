import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: []
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { cart: [...state.cart, action] }
        case REMOVE_FROM_CART:
            return { cart: state.cart.filter(item => item !== action.id) }
        default:
            return state;
    }
}

export default cartReducers;