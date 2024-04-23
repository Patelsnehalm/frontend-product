import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMessage(null); 
    try {
      if (!email || !password) {
        setErrorMessage('Please fill in all fields.'); // Show error if any field is empty
        return;
      }
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setSuccessMessage('Login successful. Redirecting to products page...');
      setTimeout(() => {
        setSuccessMessage(null);
        navigate('/products');
      }, 3000); 
    } catch (error) {
      setErrorMessage('Invalid email or password. Please try again.');
      setTimeout(()=>
        {
          //setErrorMessage(null);
        },4000);
    }
  };

  const Styles={
    login_container: {
     
      "width": "90%",
      "margin": "0 auto",
      "marginTop":"10px",
      "padding": "20px",
      "border": "1px solid #ccc",
      "borderRadius": "5px",
      "backgroundColor": "#f9f9f9"
    },
    login_container_h2: {
      "textAlign": "center",
      "marginBottom": "20px"
    },
    login_container_input: {
      "width": "100%",
      "marginBottom": "10px",
      "padding": "8px",
      "border": "1px solid #ccc",
      "borderRadius": "3px",
      "fontSize": "16px"
    },
    login_container_button: {
      "width": "100%",
      "padding": "10px",
      "backgroundColor": "#1F2D4A",
      "color": "#fff",
      "border": "none",
      "borderRadius": "3px",
      "cursor": "pointer",
      "fontSize": "16px"
    },
    login_container_button_hover: {
      "backgroundColor": "#0056b3"
    },
    login_container__error: {
      "color": "red",
      "marginTop": "10px",
      "textAlign":"center"
    },
    login_container_success: {
      "color": "red",
      "marginTop": "10px",
      "textAlign":"center"
    },
  }

  return (
    
     <div>
      <Navbar></Navbar>
    <div  style={Styles.login_container}>
      <h2  >Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={Styles.login_container_input}/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  style={Styles.login_container_input}/>
      <button onClick={handleLogin} style={Styles.login_container_button}>Login</button>
      {errorMessage && <p style={Styles.login_container__error as React.CSSProperties}>{errorMessage}</p>}
      {successMessage && <p style={Styles.login_container_success  as React.CSSProperties}>{successMessage}</p>}
    </div>
    <Footer></Footer>
    </div>
  );
};

export default LoginPage;
