import config from '../../config.json';
const API_BASE_URL = config.API_BASE_URL;

// Function to fetch all products
export const getProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

// Function to fetch a product by ID
export const getProductById = async (productId) => {
  const response = await fetch(`${API_BASE_URL}/products/${productId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }
  return response.json();
};

// Function to add a new product
export const addProduct = async (productData) => {
    const response = await fetch(`${API_BASE_URL}/addProduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
  
    if (!response.ok) {
      throw new Error('Failed to add product');
    }
  
    return response.json();
  };

// Function to delete a product by ID
export const deleteProductById = async (productId) => {
    const response = await fetch(`${API_BASE_URL}/product/${productId}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete product');
    }
  
    return response.json();
  };
  