// import styles from "../styles/ConnectWallet.module.css";
import { BorderAllRounded } from '@material-ui/icons';
import React, { Component }  from 'react';
import logo from '../metamask/metamask-logo.png';
const ConnectWalletButton = ({
  onPressLogout,
  handleLogin,
  loading,
  address,
}) => {
  return (
    <div style={styles.container}>
    

      {address && !loading ? (
        <button onClick={handleLogin} className={styles["connect-wallet"]}>
          Disconnect
        </button>
      ) : loading ? (
        <button
          className={`${styles["connect-wallet"]} ${styles["connect-button-loading"]}`}
          disabled
        >
          <div>Loading...</div>
        </button>
      ) : (
        <div>
        
        <button 
            onClick={handleLogin} 
            style={styles.button}
            
            >
          <img src={logo} alt="MetaMask logo" style={styles.logo} />
          MetaMask Connection
        </button>
        </div>
      )}
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '8px',
    width: '230px',
    textAlign: 'center',
  },
  logo: {
    height: '30px',
    alignItems: 'left'
  },
  button: {
    backgroundColor: '#4CAF50',
    width: '230px',
    height: '50px',
    display: 'flex',
    textAlign: 'center',
    justify: 'space-around',
    fontSize: '15px',
    font: 'bold',
    border: '1px solid transparent',
    borderRadius: '40px',
    padding: '0.8rem 1rem',
    cursor: 'pointer',
    color: 'white',
  },
};

export default ConnectWalletButton;