import React from 'react';

const Product = (props) => {
    const { addToCart } = props
    const { imageUrl, name, price} = props.product
    return (
        <div style={{ margin: '10px' }}>
            <img width={100} src={imageUrl} alt={name} />
            <p>Price: ${price}</p>
            <h5>{name}</h5>
            <button onClick={() => addToCart(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;