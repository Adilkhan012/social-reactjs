import initMetamask from "./metamaskConnection";
import Web3 from "web3";

const engagementAddress = "0x95E11f221C6479dBbEd8eE4211dE1DBd740b3029";

const engagementABI = "";
const initEngagementContract = async () => {
  const web3 = new Web3(window.ethereum);
  return new Promise((resolve, reject) => {
    const stakingContract = new web3.eth.Contract(
      engagementABI,
      engagementAddress
    );
    resolve(stakingContract);
  });
};

export default initEngagementContract;
