import React from 'react';
import { connect } from 'react-redux';
import { fakeProduct } from '../../data/fakeProduct'
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';
const Shop = (props) => {
    console.log(props);
    const { addToCart } = props;
    const products = fakeProduct.filter(pd => pd.imageUrl === "https://dummyimage.com/400x350");
    return (
        <div style={{ width: '80%', margin: '0 auto'}}>
            <h3 style={{ textAlign: 'center' }}>
                Demo Shop
            </h3>
            <div style={
                {
                    display: 'flex', flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }
            }>
                {products.map(pd => <Product addToCart={addToCart} key={pd.id} product={pd} />)}
            </div>
        </div >
    );
};

const mapStateToProps = (state) => {
    return { cart: state.cart }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);