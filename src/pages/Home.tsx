import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeContent from '../components/HomeContent';

const Home: React.FC = () => {    
    const styles = {
        container: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        },
        content: {
          display: 'flex',
          flexGrow: 1,
        },
        contentBelowHeader: {
            flexGrow: 1,
            padding: '20px', 
          },
      }; 
  return (
    
    <div style={styles.container as React.CSSProperties}>
      <Navbar />
      <div style={styles.content}>
      <div style={styles.contentBelowHeader}>
      <HomeContent></HomeContent>
      <Footer></Footer>
      </div>
      </div>
    </div>
  );
};


export default Home;
