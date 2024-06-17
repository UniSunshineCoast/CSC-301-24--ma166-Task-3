import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../components/AuthContext';
import { deleteProductById } from '../services/api';

// Component to list and manage products
const ProductList = ({ products }) => {
  // Get isAdmin from AuthContext to check if the user has admin privileges
  const { isAdmin } = useContext(AuthContext);

  // Function to handle the deletion of a product
  const handleDelete = async (productId) => {
    if (isAdmin) {
      try {
        await deleteProductById(productId); // Call API to delete the product
        window.location.reload(); // Reload the page after successful delete
      } catch (error) {
        console.error('Error deleting product:', error); // Log any errors
      }
    }
  };

  return (
    <div className="product-list">
      <div className="grid-container">
        {products.map((product, index) => (
          <div className="grid-item" key={product.id}>
            <div className="product-card">
              <img
                src={product.image_url}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <div className="button-group">
                  {/* Link to view product details */}
                  <Link to={`/productDetails/${product.id}`} className="view-button">
                    View
                  </Link>
                  {/* Show delete button only if the user is an admin */}
                  {isAdmin && (
                    <button onClick={() => handleDelete(product.id)} className="delete-button">
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
