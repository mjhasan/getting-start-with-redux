export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addTocart = id => {
    return {type: ADD_TO_CART, id}
}

export const removeFromcart = id => {
    return {type: REMOVE_FROM_CART, id}
}