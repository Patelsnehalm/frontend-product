import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation


const Navbar: React.FC = () => {

    const styles = {
        navbar: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#1F2D4A',
          color: '#1F2D4A',
          fontWeight: 'bold',
          width: '97%',
        },
        header: {
         
          color: '#fff',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
        },
        navMenu: {
          display: 'flex',
          listStyle: 'none',
          padding: 0,
        },
        navItem: {
          marginLeft: '20px',
        },
        link: {
          color: '#fff',
          textDecoration: 'none',
          fontSize: '20px' 
        },
        logoContainer: {
          display: 'flex',
          alignItems: 'center',
        },
        logo: {
          width: '40px',
          height: '40px',
          marginRight: '10px',
          borderRadius: '70%',
        },
      };
  return (
    <nav style={styles.navbar}>
      <div style={styles.header}>
      <div style={styles.logoContainer}>
      <Link to="/" style={{ textDecoration: 'none' }}> 
      <img src="/images/logo.jpg" alt="Logo" style={styles.logo} />
      </Link>
      </div>
        <Link to="/" style={styles.link}>Product Management</Link>
      </div>
      <ul style={styles.navMenu}>
        <li style={styles.navItem}>
          <Link to="/products" style={styles.link}>Products</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/products/add" style={styles.link}>Add Product</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.link}>Login</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/signup" style={styles.link}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

