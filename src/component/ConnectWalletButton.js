import styles from "../styles/ConnectWallet.module.css";
import React, { Component } from "react";

const ConnectWalletButton = ({ onPressLogout, onPressConnect, loading, address }) => {
  return (
    <div>
      {address && !loading ? (
        <button onClick={onPressLogout} className={styles["connect-wallet"]}>
          {address.substring(0, 6) + "..." + address.substring(address.length - 4, address.length)}
        </button>
      ) : loading ? (
        <button className={`${styles["connect-wallet"]} ${styles["connect-button-loading"]}`} disabled>
          <div>Loading...</div>
        </button>
      ) : (
        <button onClick={onPressConnect} className={styles["connect-wallet"]}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
