import { useState } from "react";
import Web3 from "web3";

// custom network for testnet
const customNetwork = {
  chainId: "0x13881", // Mumbai Testnet Chain ID
  chainName: "Mumbai Testnet",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: ["https://rpc-mumbai.maticvigil.com"], // Mumbai Testnet RPC endpoint
  blockExplorerUrls: ["https://explorer-mumbai.maticvigil.com"], // Mumbai Testnet Block Explorer URL
};



// // custom network for testnet
// const customNetwork = {
//   chainId: "0x61", // BSC Testnet Chain ID
//   chainName: "BSC Testnet",
//   nativeCurrency: {
//     name: "BNB",
//     symbol: "BNB",
//     decimals: 18,
//   },
//   rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"], // BSC Testnet RPC endpoint
//   blockExplorerUrls: ["https://testnet.bscscan.com"], // BSC Testnet Block Explorer URL
// };

// custom network for mainnet

  // const customNetwork = {
  //   chainId: '0x38', // BSC Mainnet Chain ID
  //   chainName: 'Binance Smart Chain Mainnet',
  //   nativeCurrency: {
  //     name: 'BNB',
  //     symbol: 'BNB',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://bsc-dataseed1.binance.org'], // BSC Mainnet RPC endpoint
  //   blockExplorerUrls: ['https://bscscan.com'], // BSC Mainnet Block Explorer URL
  // };

const initMetamask = async () => {
  let address = null;
  try {
    if (!window.ethereum) {
      // MetaMask not installed
      throw new Error("Please install MetaMask to sign in");
    }

    // Request permission to connect to MetaMask
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Check if user is on BSC Testnet
    const chainId = await window.ethereum.request({ method: "eth_chainId" });

    if (chainId !== customNetwork.chainId) {
      // Listen for accountsChanged event
      window.ethereum.on("accountsChanged", (accounts) => {
        address = accounts[0];
      });

      // Switch network to BSC Testnet
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: customNetwork.chainId }],
        });
      } catch (error) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [customNetwork],
        });
      }
    }

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    address = accounts[0];


    return {address};
  } catch (error) {
    console.error(error);
  }
};

export default initMetamask;