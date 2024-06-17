import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { addProduct } from '../services/api'; 
import '../styles/AddProduct.css';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState('');
  const navigate = useNavigate(); // Allows navigation to different pages
  
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior (page reload)

    // Construct productData object from form state
    const productData = {
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice), // Convert price to float
      category: productCategory,
      image: productImage,
    };

    try {
      // Send productData to addProduct API function
      const response = await addProduct(productData);
      console.log('Product added:', response); // Log success message and response

      // Clear form fields after successful submission
      setProductName('');
      setProductDescription('');
      setProductPrice('');
      setProductCategory('');
      setProductImage('');

      // Redirect to product list page
      navigate('/products');
    } catch (error) {
      console.error('Error adding product:', error); // Log error if addProduct API call fails
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Product Name input field */}
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required // Field is required
        />

        {/* Product Description textarea */}
        <label htmlFor="productDescription">Product Description:</label>
        <textarea
          id="productDescription"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          required // Field is required
        />

        {/* Product Price input field */}
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required // Field is required
          step="0.01" // Allows decimal values with two decimal places
          className="no-spinner" // Removes spinner from number input
        />

        {/* Product Category input field */}
        <label htmlFor="productCategory">Product Category:</label>
        <input
          type="text"
          id="productCategory"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          required // Field is required
        />

        {/* Product Image URL input field */}
        <label htmlFor="productImage">Product Image URL:</label>
        <input
          type="text"
          id="productImage"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />

        {/* Submit button */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
