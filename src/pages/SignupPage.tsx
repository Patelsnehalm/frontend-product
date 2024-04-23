import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


 const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { email, password });
      setSuccessMessage('Signup successful. Redirecting to login page...');
      setTimeout(() => {
        setSuccessMessage(null);
        navigate('/login');
      }, 1000); 
   
    } catch (error) {
      setErrorMessage('All fields are mandatory');
      setTimeout(()=>
        {
          setErrorMessage(null);
        },4000);
    }
  };

  const Styles={
    signup_container: {
      "width": "90%",
      "margin": "0 auto",
      "marginTop":"10px",
      "padding": "20px",
      "border": "1px solid #ccc",
      "borderRadius": "5px",
      "backgroundColor": "#f9f9f9"
    },
    signup_container_h2: {
      "textAlign":"center",
      "marginBottom": "20px"
    },
    signup_container_input: {
      "width": "100%",
      "marginBottom": "10px",
      "padding": "8px",
      "border": "1px solid #ccc",
      "borderRadius": "3px",
      "fontSize": "16px"
    },
    signup_container_button: {
      "width": "100%",
      "padding": "10px",
      "backgroundColor": "#1F2D4A",
      "color": "#fff",
      "border": "none",
      "borderRadius": "3px",
      "cursor": "pointer",
      "fontSize": "16px"
    },
    signup_container_button_hover: {
      "backgroundColor": "#0056b3"
    },
    signup_container__error: {
      "color": "red",
      "marginTop": "10px",
      "textAlign":"center"
    },
    signup_container_success: {
      "color": "red",
      "marginTop": "10px",
      "textAlign":"center"
    },
  }

  return (
    <div>
      <Navbar></Navbar>
    <div style={Styles.signup_container} >
      <h2  style={Styles.signup_container_h2 as React.CSSProperties} >Sign Up</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={Styles.signup_container_input} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  style={Styles.signup_container_input} />
      <button onClick={handleSignup} style={Styles.signup_container_button } >Sign Up</button>
      {errorMessage && <p style={Styles.signup_container__error as React.CSSProperties}>{errorMessage}</p>}
      {successMessage && <p style={Styles.signup_container_success  as React.CSSProperties}>{successMessage}</p>}
    </div>
    <Footer></Footer>
    </div>
  );
};

export default SignupPage;
