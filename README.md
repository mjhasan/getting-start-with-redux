## Getting start with react redux

**Create react project**

```javascript
npx create-react-app my-app
```

```javascript
cd my-app
```

```javascript
npm start
```
**Install redux and react-redux**
```javascript
npm install redux react-redux
```

**Dir structure for redux**
Dir structure could change person wise. Let's create our won dir structure for work with redux. 

`> redux > actions
        > reducers
        > store
`

**Create actions**
Let's create actions on redux > reducers folder. Bellow code for our demo project's actions.
Go to redux > actions > cartActions.js and insert this code.

```javascript
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addTocart = id => {
    return {type: ADD_TO_CART, id}
}

export const removeFromcart = id => {
    return {type: REMOVE_FROM_CART, id}
}
```

**Create reducers**
Let's create actions on redux > reducers folder. Bellow code for our demo project's actions.
Go to redux > reducers > cartReducers.js and insert this code.

```javascript
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
```







