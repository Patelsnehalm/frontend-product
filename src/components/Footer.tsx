import React from 'react';

const Footer: React.FC = () => {
   
const styles = {
    footer: {
      backgroundColor: '#1F2D4A',
      borderTop: '5px solid #ccc',
      padding: '5px 0',
      textAlign: 'center',
      position: 'absolute',
      bottom: 0,
      width: '97%',
    },
    container: {
      maxWidth: '700px',
      margin: '0 auto',
      color: '#fff',
    },
    a:{
      color: '#fff',
    }
  };
  return (
    <footer style={styles.footer as React.CSSProperties}>
      <div style={styles.container}>
        <p>&copy; 2024 Product Management</p>
        <p >
          <a style={styles.a} href="/">About Us</a> | <a style={styles.a}  href="/">Contact Us</a>
        </p>
      </div>    
    </footer>
  );
};

export default Footer;

