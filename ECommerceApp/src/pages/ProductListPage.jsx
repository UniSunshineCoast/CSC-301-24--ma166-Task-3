import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../services/api';
import '../styles/ProductListing.css';

// ProductListPage component displays a list of products fetched from the backend API
const ProductListPage = () => {
  const [products, setProducts] = useState([]); // State variable to store the list of products

  useEffect(() => {
    // useEffect hook to fetch products from backend API when the component mounts
    const fetchProducts = async () => {
      try {
        // Fetch all products using the getProducts function from the API service
        const productsData = await getProducts(); 
        setProducts(productsData); // Update state with fetched products
      } catch (error) {
        console.error('Error fetching products:', error); // Log error if fetching products fails
      }
    };
    fetchProducts(); // Invoke the fetchProducts function
  }, []); // Empty dependency array ensures the effect runs only once, on component mount

  return (
    <div>
      <h2>Our Products</h2>
      <ProductList products={products} /> {/* Render the ProductList component with fetched products */}
    </div>
  );
};

export default ProductListPage;
