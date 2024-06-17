import React from 'react';

// The ProductDetails component receives a product prop and displays its details.
const ProductDetails = ({ product }) => {
    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product.image_url} alt={product.name} />
            </div>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p className="product-description">Description: {product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-category">Category: {product.category}</p>
                <button className="buy-now-button">Buy Now</button>
            </div>
        </div>
    );
}

export default ProductDetails;