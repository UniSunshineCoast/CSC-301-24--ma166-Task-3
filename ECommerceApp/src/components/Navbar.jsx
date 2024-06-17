import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../components/AuthContext'; // Import AuthContext for user authentication

const Navbar = () => {
  const { isAdmin, isLoggedIn, logout } = useContext(AuthContext); // Destructure isAdmin, isLoggedIn, and logout from AuthContext
  const navigate = useNavigate(); // Navigate hook from React Router DOM for programmatic navigation

  // Function to handle logout
  const handleLogout = () => {
    logout(); // Call logout function from AuthContext to logout user
    navigate('/'); // Redirect to login page after logout
  };

  // Render nothing if user is not logged in
  if (!isLoggedIn) {
    return null;
  }

  // Render Navbar component if user is logged in
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Home link */}
        <Link to="/home" className="navbar-link">Home</Link>

        {/* Products link */}
        <Link to="/products" className="navbar-link">Products</Link>

        {/* Add Product link (only visible to admin users) */}
        {isLoggedIn && (
          <>
            {isAdmin && (
              <Link to="/add" className="navbar-link">Add Product</Link>
            )}
          </>
        )}

        {/* Logout button */}
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
