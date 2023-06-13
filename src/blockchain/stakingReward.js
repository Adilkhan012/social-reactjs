import initMetamask from "./metamaskConnection";
import Web3 from "web3";

//testnet
const stakingRewardAddress = "0x3d5b20d2e8dE2FfE1C80226A82E84Dc3A67853c1";
//mainnet
// const stakingRewardAddress = "0x489bA6AE9E6eA991Db6842b09682d15a76194D51";

//testnet
// const stakingRewardABI = [
// 	{
// 		"inputs": [],
// 		"name": "harvest",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "bytes",
// 				"name": "",
// 				"type": "bytes"
// 			}
// 		],
// 		"name": "onERC721Received",
// 		"outputs": [
// 			{
// 				"internalType": "bytes4",
// 				"name": "",
// 				"type": "bytes4"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "contract IERC20",
// 				"name": "_stakingToken",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "contract LAZI",
// 				"name": "_rewardToken",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "contract IERC721",
// 				"name": "_erc721",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "previousOwner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "OwnershipTransferred",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "renounceOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "erc20Amount",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "lockPeriod",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256[]",
// 				"name": "erc721TokenIds",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"name": "stake",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "newOwner",
// 				"type": "address"
// 			}
// 		],
// 		"name": "transferOwnership",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "unstake",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "maxLockDuration",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "updateMaxLockDuration",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "minLockDuration",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "updateMinLockDuration",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "increment",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "updateMultiplierIncrementErc721",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "increment",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "updateMultiplierIncrementLockPeriod",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "rewardPerSec",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "updateRewardPerSec",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "stopTime",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "updateRewardStopTime",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_erc20",
// 				"type": "address"
// 			}
// 		],
// 		"name": "withdrawERC20",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "erc721",
// 		"outputs": [
// 			{
// 				"internalType": "contract IERC721",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256[]",
// 				"name": "timeToStake",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"name": "getDistributions",
// 		"outputs": [
// 			{
// 				"internalType": "uint256[]",
// 				"name": "txDistributions",
// 				"type": "uint256[]"
// 			},
// 			{
// 				"internalType": "uint256[]",
// 				"name": "stakedTokenDistributions",
// 				"type": "uint256[]"
// 			},
// 			{
// 				"internalType": "uint256[]",
// 				"name": "rewardTokenDistributions",
// 				"type": "uint256[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "user",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getUserRewards",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "MAX_LOCK_DURATION",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "MIN_LOCK_DURATION",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "owner",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "REWARD_PER_SEC",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "REWARD_STOP_TIME",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "rewardToken",
// 		"outputs": [
// 			{
// 				"internalType": "contract LAZI",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "stakes",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "stakingAmount",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "lockPeriod",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "stakeStartTime",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "weightedStake",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "claimedRewards",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "stakingToken",
// 		"outputs": [
// 			{
// 				"internalType": "contract IERC20",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalStaked",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalWeightedStake",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]

//mainnet ABI
const stakingRewardABI = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stakingToken",
        type: "address",
      },
      { internalType: "contract LAZI", name: "_rewardToken", type: "address" },
      { internalType: "contract IERC721", name: "_erc721", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_LOCK_DURATION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_LOCK_DURATION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD_PER_SEC",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD_STOP_TIME",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "erc721",
    outputs: [{ internalType: "contract IERC721", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "timeToStake", type: "uint256[]" },
    ],
    name: "getDistributions",
    outputs: [
      { internalType: "uint256[]", name: "txDistributions", type: "uint256[]" },
      {
        internalType: "uint256[]",
        name: "stakedTokenDistributions",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "rewardTokenDistributions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getUserRewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [{ internalType: "contract LAZI", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "erc20Amount", type: "uint256" },
      { internalType: "uint256", name: "lockPeriod", type: "uint256" },
      { internalType: "uint256[]", name: "erc721TokenIds", type: "uint256[]" },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "stakes",
    outputs: [
      { internalType: "uint256", name: "stakingAmount", type: "uint256" },
      { internalType: "uint256", name: "lockPeriod", type: "uint256" },
      { internalType: "uint256", name: "stakeStartTime", type: "uint256" },
      { internalType: "uint256", name: "weightedStake", type: "uint256" },
      { internalType: "uint256", name: "claimedRewards", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalWeightedStake",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "maxLockDuration", type: "uint256" },
    ],
    name: "updateMaxLockDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "minLockDuration", type: "uint256" },
    ],
    name: "updateMinLockDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "increment", type: "uint256" }],
    name: "updateMultiplierIncrementErc721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "increment", type: "uint256" }],
    name: "updateMultiplierIncrementLockPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "rewardPerSec", type: "uint256" },
    ],
    name: "updateRewardPerSec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "stopTime", type: "uint256" }],
    name: "updateRewardStopTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_erc20", type: "address" }],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const initStakingContract = async () => {
  const web3 = new Web3(window.ethereum);
  return new Promise((resolve, reject) => {
    const stakingContract = new web3.eth.Contract(
      stakingRewardABI,
      stakingRewardAddress
    );
    resolve(stakingContract);
  });
};

export default initStakingContract;
