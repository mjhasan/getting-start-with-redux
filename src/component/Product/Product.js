import React from 'react';

const Product = (props) => {
    const { imageUrl, name, price } = props.product
    return (
        <div>
            <img width={100} src={imageUrl} alt={name} />
            <p>Price: ${price}</p>
            <h5>{name}</h5>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;