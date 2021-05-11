import React from 'react';
import { fakeProduct } from '../../data/fakeProduct'
import Product from '../Product/Product';
const Shop = () => {
    const products = fakeProduct.filter(pd => pd.imageUrl === "https://dummyimage.com/400x350");
    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <h3 style={{ textAlign: 'center' }}>
                Demo Shop
            </h3>
            <div style={
                {
                    display: 'flex', flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }
            }>
                {products.map(pd => <Product product={pd} />)}
            </div>
        </div >
    );
};

export default Shop;