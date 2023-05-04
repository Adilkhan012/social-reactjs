import initMetamask from "./metamaskConnection";

const laziPostFactoryContractAddress =
  "0x3a38a796a48a55d75ff5477Eb90f76c78a237cb0";

const laziPostFactoryContractABI = [
	{
		"inputs": [],
		"name": "createLaziPost",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createLaziPostDeploy",
		"outputs": [
			{
				"internalType": "contract LaziPost",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "deployedLaziPosts",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDeployedLaziPosts",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDeployedLaziPostsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const initLaziPostFactoryContract = async () => {
  const { web3 } = await initMetamask();
  return new Promise((resolve, reject) => {
    const stakingContract = new web3.eth.Contract(
      laziPostFactoryContractABI,
      laziPostFactoryContractAddress
    );
    resolve(stakingContract);
  });
};

export default initLaziPostFactoryContract;
