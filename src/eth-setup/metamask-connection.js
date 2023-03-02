import Web3 from "web3";
import { requiredChainId } from "./smart-contracts-config.js";
import MetaMaskOnboarding from "@metamask/onboarding";

// import { updateVisitorsAddress } from "./updateVisitors";
// Wallet Connectivity Settings

const msg_mobile = "Please use MetaMask App!";
const msg_desk = "Please install MetaMask Wallet extension";
const deepLink = "https://metamask.app.link/dapp/morphgenesis.com/mint";

// the responsibility of this method is to deal with blockchain
// irrespective of metamask installed or not
export const getBlockchainData = async (todo, todoAccChanged) => {
  const { ethereum } = window;

  if (!(ethereum && ethereum.isMetaMask)) {
    showMessage();
    return;
  }

  await ethereum
    .request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: requiredChainId,
        },
      ],
    })
    .catch((error) => {
      alert("Refresh Metamask!");
      console.log(error);
    });

  todoAccChanged && ethereum.on("chainChanged", todoAccChanged);
  todoAccChanged && ethereum.on("accountsChanged", todoAccChanged);

  const [account] = await ethereum.request({
    method: "eth_requestAccounts",
  });
  const chainId = await ethereum.request({
    method: "eth_chainId",
  });

  chainId === requiredChainId && todo && todo(account, new Web3(ethereum));
};

export const showMessage = () => {
  if (require("is-mobile")()) {
    if (window.confirm(msg_mobile)) window.location.href = deepLink;
  } else {
    if (window.confirm(msg_desk)) new MetaMaskOnboarding().startOnboarding();
  }
};