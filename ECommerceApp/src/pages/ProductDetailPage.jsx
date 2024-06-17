import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import ProductDetails from '../components/ProductDetails';
import '../styles/productDetails.css';

const ProductDetail = () => {
    const { id } = useParams(); // Extracts the `id` parameter from the URL using useParams hook
    const [product, setProduct] = useState(null); // State variable to store the product details
  
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Fetch product details by Id from the API
                const productData = await getProductById(id);
                setProduct(productData); // Update state with fetched product details
            } catch (error) {
                console.error('Error fetching product:', error); // Log error if fetching product fails
            }
        };
  
        fetchProduct(); // Invokes the fetchProduct function on component mount and whenever `id` changes
    }, [id]); // Dependency array ensures the effect runs whenever `id` changes
  
    if (!product) {
        return <div>Loading...</div>; // Display loading message while product data is being fetched
    }
  
    return (
        <div>
            <h2>Our Products</h2>
            <ProductDetails product={product} /> {/* Render the ProductDetails component with fetched product */}
        </div>
    );
};

export default ProductDetail;
