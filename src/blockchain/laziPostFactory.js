import initMetamask from "./metamaskConnection";
import Web3 from "web3";

 //testnet
const laziPostFactoryContractAddress =
  "0x43AEC522AA7F25c4a9F40Cee6a3763492A6542b3";

// mainnet
// const laziPostFactoryContractAddress =
//   "0xe6B7E59f22E4955d41c2bd1676966284F044560e";

//testnet
// const laziPostFactoryContractABI = [
//   { inputs: [], stateMutability: "nonpayable", type: "constructor" },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "address",
//         name: "postAddress",
//         type: "address",
//       },
//     ],
//     name: "LaziPostCreated",
//     type: "event",
//   },
//   {
//     inputs: [],
//     name: "createLaziPost",
//     outputs: [{ internalType: "address", name: "", type: "address" }],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     name: "deployedLaziPosts",
//     outputs: [{ internalType: "address", name: "", type: "address" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "factoryOwner",
//     outputs: [{ internalType: "address", name: "", type: "address" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getDeployedLaziPosts",
//     outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getDeployedLaziPostsCount",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getFactoryOwner",
//     outputs: [{ internalType: "address", name: "", type: "address" }],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
//     name: "transferOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];


const laziPostFactoryContractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"postAddress","type":"address"}],"name":"LaziPostCreated","type":"event"},{"inputs":[],"name":"createLaziPost","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deployedLaziPosts","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factoryOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDeployedLaziPosts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDeployedLaziPostsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFactoryOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const initLaziPostFactoryContract = async () => {
  const web3 = new Web3(window.ethereum);
  return new Promise((resolve, reject) => {
    const stakingContract = new web3.eth.Contract(
      laziPostFactoryContractABI,
      laziPostFactoryContractAddress
    );
    resolve(stakingContract);
  });
};

export default initLaziPostFactoryContract;
