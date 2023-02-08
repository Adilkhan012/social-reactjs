import styles from "../styles/ConnectWallet.module.css";
import React, { Component }  from 'react';

const ConnectWalletButton = ({
  onPressLogout,
  handleLogin,
  loading,
  address,
}) => {
  return (
    <div>
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
        <button onClick={handleLogin} className={styles["connect-wallet"]}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletButton;