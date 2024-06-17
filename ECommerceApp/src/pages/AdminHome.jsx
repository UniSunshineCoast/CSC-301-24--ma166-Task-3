import React from 'react';
import Navbar from '../components/Navbar'

const AdminDashboard = () => {
  return (
    <div>
      <Navbar isAdmin={true}/>
      <h2>Welcome Admin!</h2>
      <p>You are logged in as an admin.</p>
      <hr />
    </div>
  );
};

export default AdminDashboard;
