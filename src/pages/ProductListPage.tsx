import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/products', { headers: { Authorization: token } });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        // Handle fetch products error
      }
    };
   
    fetchProducts();
  }, []);


  const handleDeleteProduct = async (productId: string) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/products/${productId}`, {
        headers: {
          Authorization: token
        } 
      });
      console.log("Product has been deleted");
         // Reload the page or fetch products again
         window.location.reload();

    } catch (error) {
      console.error(error);
      // Handle error (e.g., show error message)
    }
  };

 
const styles = {
  productsContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  h2: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  columnsContainer: {
    display: 'flex',
    
  },
  productColumn: {
    flex: '1',
  },
  buttonColumn: {
    marginLeft: '20px',
  },
  ul: {
    listStyle: 'none',
    padding: '0',
  },
  li: {
    marginBottom: '10px',
    fontSize: '20px',
  },
  productInfo: {
    textAlign: 'justify',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: "#1F2D4A",
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    display: 'block',
    marginBottom: '10px',
    fontSize: '20px',
  },
};
  return (
    <div>
      <Navbar></Navbar>
      <div style={styles.productsContainer as React.CSSProperties}>
      <h2 style={styles.h2  as React.CSSProperties} >Products</h2>
      <div style={styles.columnsContainer  as React.CSSProperties}>
        <div style={styles.productColumn  as React.CSSProperties}>
          <ul style={styles.ul}>
            {products.map((product: any) => (
              <li key={product._id} style={styles.li  as React.CSSProperties}>
                <span style={styles.productInfo  as React.CSSProperties}>{product.name} - ${product.price} - {product.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.buttonColumn  as React.CSSProperties} >
          {products.map((product: any) => (
            <button key={product._id} onClick={() => handleDeleteProduct(product._id)} style={styles.deleteButton}>Delete</button>
          ))}
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  );
};

export default ProductListPage;
