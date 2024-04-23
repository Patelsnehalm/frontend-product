import React from 'react';

const HomeContent: React.FC = () => {
    const styles = {
        container: {
          "margin": '0 auto',
         "padding" : '20px',
          "textAlign": 'center',
          fontSize: '18px' 
        },
    
      };
  return (
    <div  style={styles.container as React.CSSProperties}>
        <h1>Welcome to Product Management</h1>
        <p>
          Manage your products easily with our product management application. Add and delete products effortlessly to keep your inventory organized.
        </p>
        
        <p>
          Get started by <a href="/signup">Signing up</a> or <a href="/login">Logging in</a>.
        </p>
      </div>
  );
};

export default HomeContent;