import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';


const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/products', {
          headers: {
            Authorization: token
          }
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        // Handle error (e.g., redirect to login page)
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
      // Reload the page or fetch products again after deletion
     // fetchProducts();
     window.location.reload();
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <h2>Products</h2>
      <ul>
        {products.map((product: any) => (
          <li key={product._id}>
            <div>
              <span >{product.name} - ${product.price} - {product.description}</span>
              <button onClick={() => handleDeleteProduct(product._id)} >Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <Footer></Footer>
    </div>
  );
};

export default ProductListPage;
