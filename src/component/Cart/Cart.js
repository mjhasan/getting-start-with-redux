import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    const totalPrice = cart.reduce((accum, item) => accum + item.price, 0)
    return (
        <div style={{ textAlign: 'center' }}>
            <h4>Cart : {cart.length}</h4>
            <ul>
                {
                    cart.map(cart => <li style={{ listStyle: 'none' }}>{cart.name} <button onClick={() => removeFromCart(cart.cartId)}>X</button> </li>)
                }
            </ul>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { cart: state.cart }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);