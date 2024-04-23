import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ProductForm: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/products', { name, price, description }, { headers: { Authorization: token } });
      setSuccessMessage('Product has been added. Redirecting to products page...');
      setTimeout(() => {
        setSuccessMessage(null); 
        navigate('/products');
      }, 3000);
    } catch (error) {
      setErrorMessage('All fields are mandatory!!');
      setTimeout(()=>
      {
        setErrorMessage(null);
      },4000);
    }
  };

  const styles = {
    product_list_container: {
      "width": '90%',
      margin: '0 auto',
      marginTop:"10px",
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
    },
    product_item: {
      width: '100%',
      marginBottom: '10px',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '3px',
      fontSize: '16px',
    },
    delete_button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#1F2D4A',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    add_container__error: {
      "color": "red",
      "marginTop": "10px",
      "textAlign":"center"
    },
    add_container_success: {
      "color": "red",
      "marginTop": "10px",
      "textAlign":"center"
    },
  };
  return (
    <div>
      <Navbar></Navbar>
    <div style={styles.product_list_container}>
    <h2 style={{"textAlign":"center"}}>Add Product</h2>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" style={styles.product_item} />
    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" style={styles.product_item} />
    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" style={styles.product_item} />
    <button onClick={handleAddProduct} style={styles.delete_button}>Add Product</button>
    {errorMessage && <p style={styles.add_container__error as React.CSSProperties  }>{errorMessage}</p>}
      {successMessage && <p style={styles.add_container_success as React.CSSProperties }>{successMessage}</p>}
  </div>
  <Footer></Footer>
  </div>
  );
};

export default ProductForm;
