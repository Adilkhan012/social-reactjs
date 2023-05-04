import initMetamask from "./metamaskConnection";


const laziPostFactoryContractAddress = '0x8930B1445Adc1Aa8D6cF240F9326309FC60436a7';

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

  