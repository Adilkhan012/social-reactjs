import React, { useState, useEffect, useCallback } from "react";
import Chart from "react-apexcharts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Checkbox,
  Grid,
  makeStyles,
  Paper,
  Slider,
  TextField,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import { Tooltip } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { toast } from "react-toastify";
import BigInt from "big-integer";


import initMetamask from "src/blockchain/metamaskConnection";
import initLpRewardContract from "src/blockchain/LpRewardContract";
import initlaziTokenContract from "src/blockchain/laziTokenContract";
import initUserNameContract from "src/blockchain/laziUserNameContract";
import { styles } from "@material-ui/pickers/views/Clock/Clock";
// import MetaMaskOnboarding from "@metamask/onboarding";
const laziTokenAddress = "0xf472134D28216581F47304c66Fb18922a146e514";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  tooltipIconHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  tooltip: {
    backgroundColor: "secondary",
    textAlign: "center",
  },
  sliderThumb: {
    transition: "transform 0.2s ease-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },

  heading: {
    display: "flex",
  },
  toolTipHeader: {
    position: "absolute",
    top: "11.5%",
    left: "47%",
  },
  bannerBox: {
    padding: "10px 0px 150px 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "90px 0",
    },
    "& label": {
      color: "#e8aa3e",
      fontSize: "14px",
    },
  },
  root: {
    padding: "15px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
  Buttonbox: {
    "& Button": {
      padding: "11px 16px",
      borderRadius: "4px",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#EC167F",
      border: "none",
      "&::before": {
        content: '""',
        position: "absolute",
        top: "0",
        left: "-50%",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        transform: "translateX(-150%) skewX(-45deg)",
        animation: "$shining 1.5s ease-in-out infinite",
      },
    },
  },
  "@keyframes shining": {
    "0%": {
      transform: "translateX(-150%) skewX(-45deg)",
    },
    "100%": {
      transform: "translateX(150%) skewX(-45deg)",
    },
  },
  input: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      color: "white",
      borderRadius: 10,
      height: "40px",
      border: "1px solid #575758",
      fontSize: 12,
    },
  },
  inputLabel: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 14,
    marginLeft: 12,
  },
}));

// const msg_desk = "Please install MetaMask Wallet extension";
// const msg_mobile = "Please use MetaMask!";
// const deepLink = "https://metamask.app.link/dapp/social-reactjs.pages.dev/mint";

// const showMessage = () => {
//   if (require("is-mobile")()) {
//     if (window.confirm(msg_mobile)) window.location.href = deepLink;
//   } else {
//     if (window.confirm(msg_desk));
//   }
// };

const StakeReward = () => {
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [userAddress, setAddress] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [lpRewardContract, setLpRewardContract] = useState(null);
  const [userNameContract, setUserNameContract] = useState(null);
  const [laziTokenContract, setLaziTokenContract] = useState(null);
  const [totalStaked, setTotalStaked] = useState(0);
  const [userRewards, setUserRewards] = useState(0);
  const [selectedUserNames, setSelectedUserNames] = useState([]);
  const [mintedUserNames, setMintedUserNames] = useState([]);
  const [selectedTime, setSelectedTime] = useState(0);
  const [userAPR, setUserAPR] = useState(0);
  const[flexible,  setFlexible]=useState(false)
  const[locked,setLocked]=useState(false)
  const [tokenStakeValue, setTokenStakeValue] = useState(0);
  const[confirmStaking,setConfirmStaking]=useState(false)
  const [lazinessProfit, setLazinessProfit] = useState(0);
const[afterLocked,setAfterLocked]=useState(false)
const[extendLockedButtom,setExtendLockedButton]=useState(false)

// function editing here


const handleGoBacktoLocked=()=>{
  setExtendLockedButton(false)
  setAfterLocked(true)
}

const handleExtendLockedButton = ()=>{
  setExtendLockedButton(true)
  setConfirmStaking(false)
  setLocked(false)
  setAfterLocked(false)
}

const handleGoBakcOfLocked = () => {
  setLocked(true);
  setFlexible(false);
  setAfterLocked(false);
};

const handleConfirmLockedButton = () => {
  setAfterLocked(true);
  setLocked(false);
  setFlexible(false);
};

const handleDayStake = (e) => {
  setSelectedTime(e.target.value);
};

const handleGoBacktoFlexible = () => {
    setFlexible(true);
    setLocked(false);
    setConfirmStaking(false);
  };

const handleIncrement = () => {
  setLazinessProfit((prevProfit) => prevProfit + 0.1);
};


const handleDecrement = () => {
  setLazinessProfit((prevProfit) => prevProfit - 0.1);
};


const handleConfirmStakingButton = () => {
  setConfirmStaking(true);
  setFlexible(false);
};


const handleStakeTokenChange = (event) => {
  setTokenStakeValue(event.target.value);
};

const handleDayStakeButton = (weeks) => {
  setSelectedTime(weeks * 7);
};

  // Back Icon

  const handleGoBack = () => {
    setFlexible(false);
    setLocked(false);
    // setConfirmStaking(false);
  };



  // Flexbile Button Function
  const handleFlexibleButton = () => {
    setTimeout(() => {
      setFlexible(!flexible);
      setLocked(false);
    }, 500);
  };
  // Locked Button Function


  const handleLockedButton = () => {
    setTimeout(() => {
      setLocked(!locked);
      setFlexible(false);
    }, 500);
  };

  //chart state
  const [state, setState] = useState({
    options: {
      title: {
        text: "chart",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
      },
      tooltip: {
        enabled: true,
        style: {
          fontFamily: "'Montserrat', 'sans-serif'",
        },

        theme: "dark",
      },
      toolbar: {
        foreColor: "#ffff",
        style: {
          color: "black",
        },
      },
      colors: ["#8a8688", "#e31a89"],
      chart: { foreColor: "#e6e5e8", id: "basic-bar" },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [40, 14, 51, 5, 42, 30, 22, 100],
      },
    ],
  });
  //lockPeriodState
  const [lockPeriodState, setLockPeriodState] = useState({
    options: {
      title: {
        text: "LockPeriodDistributions",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
      },
      tooltip: {
        enabled: true,
        style: {
          fontFamily: "'Montserrat', 'sans-serif'",
        },
        theme: "dark",
      },
      toolbar: {
        foreColor: "#ffff",
        style: {
          color: "black",
        },
      },
      colors: ["#8a8688", "#e31a89"],
      chart: { foreColor: "#e6e5e8", id: "basic-bar" },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "Lock Period Distributions",
        data: [],
      },
    ],
  });

  // stakedTokenState
  const [stakedTokenState, setStakedTokenState] = useState({
    options: {
      title: {
        text: "StakedTokenDistributions",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
      },
      tooltip: {
        enabled: true,
        style: {
          fontFamily: "'Montserrat', 'sans-serif'",
        },
        theme: "dark",
      },
      toolbar: {
        foreColor: "#ffff",
        style: {
          color: "black",
        },
      },
      colors: ["#8a8688", "#e31a89"],
      chart: { foreColor: "#e6e5e8", id: "basic-bar" },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "Staked Token Distributions",
        data: [],
      },
    ],
  });

  //Reward Token State
  const [rewardTokenState, setRewardTokenState] = useState({
    options: {
      title: {
        text: "RewardTokenDistributions",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
      },
      tooltip: {
        enabled: true,
        style: {
          fontFamily: "'Montserrat', 'sans-serif'",
        },
        theme: "dark",
      },
      toolbar: {
        foreColor: "#ffff",
        style: {
          color: "black",
        },
      },
      colors: ["#8a8688", "#e31a89"],
      chart: { foreColor: "#e6e5e8", id: "basic-bar" },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "Staked Token Distributions",
        data: [],
      },
    ],
  });

  //userName chart state
  const [userNameChart, setUserNameChartState] = useState({
    options: {
      title: {
        text: "chart",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
      },
      tooltip: {
        enabled: true,
        style: {
          fontFamily: "'Montserrat', 'sans-serif'",
        },

        theme: "dark",
      },
      toolbar: {
        foreColor: "#ffff",
        style: {
          color: "black",
        },
      },
      colors: ["#8a8688", "#e31a89"],
      chart: { foreColor: "#e6e5e8", id: "basic-bar" },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [0],
      },
      {
        name: "series-2",
        data: [0],
      },
    ],
  });

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const { address } = await initMetamask();
        const contractStaking = await initLpRewardContract();
        const tokenContract = await initlaziTokenContract();
        const contractUserName = await initUserNameContract();
        setLaziTokenContract(tokenContract);
        setLpRewardContract(contractStaking);
        setUserNameContract(contractUserName);
        setAddress(address);
      } catch (error) {
        console.error("Contract initialization failed:", error);
      }
    };

    initialize();
  }, []);

  const monthOptions = [
    { label: "90 Days (1.25x)", value: 90 },
    { label: "180 Days (1.5x)", value: 18 },
    { label: "365 Days (2x)", value: 365 },
    { label: "547 Days (1.75x)", value: 547 },
    { label: "730 Days (3.5x)", value: 730 },
  ];
  const userOptions = [
    { label: "User 1", value: 1 },
    { label: "User 2", value: 2 },
  ];

  const handleCheckboxChange = (event, userName, tokenId) => {
    const selectedTokenId = event.target.value;
    console.log("Selected Token ID:", selectedTokenId);

    if (event.target.checked) {
      setSelectedUserNames((prevSelectedUserNames) => [
        ...prevSelectedUserNames,
        tokenId,
      ]);
    } else {
      setSelectedUserNames((prevSelectedUserNames) =>
        prevSelectedUserNames.filter((id) => id !== tokenId)
      );
    }
    const progress = (selectedUserNames.length / mintedUserNames.length) * 100;
    setUserNameChartState({
      ...userNameChart,
      series: [progress],
    });
  };

  const handleSelectedOptionsChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };

  const isMobile = useMediaQuery("(max-width:600px)");
  const valuetext = (value) => {
    return `${value} LAZI`;
  };

  const handleStake = async () => {
    try {
      const erc20Amount = sliderValue; // Use sliderValue state variable
      console.log("Selected Amount:", erc20Amount);

      console.log("Selected UserName:", selectedUserNames);
      console.log("Selected TimePeriod:", selectedTime);

      if (erc20Amount === 0) {
        toast.error("Select a valid Amount to stake!");
        return; // Break the flow if erc20Amount is 0
      }

      if (!selectedTime) {
        toast.error("Select the Time Period to stake!");
        return; // Break the flow if time period is not selected
      }
      // Estimate gas fees
      const gasEstimate = await lpRewardContract.methods
        .stake(erc20Amount, selectedTime, selectedUserNames)
        .estimateGas({ from: userAddress });

      console.log("Estimated Gas Fees:", gasEstimate);

      // Execute the transaction
      const transaction = await lpRewardContract.methods
        .stake(erc20Amount, selectedTime, selectedUserNames)
        .send({ from: userAddress, gas: gasEstimate })
        .on("transactionHash", (hash) => {
          console.log("Transaction Hash:", hash);
        })
        .on("receipt", (receipt) => {
          console.log("Receipt:", receipt);
          const successMessage = "Stake transaction successful.";
          toast.success(successMessage); // Display toast success message
          console.log(successMessage);
        })
        .catch((error) => {
          console.log("Error:", error);
          const errorMessage =
            error.message || "An error occurred during the transaction.";
          toast.error(errorMessage); // Display toast error message
          throw new Error(errorMessage); // Rethrow the error with custom message
        });

      console.log("Transaction Successful:", transaction);
    } catch (error) {
      console.log(error);
      let errorMessage = "An error occurred during the transaction.";

      if (error.message) {
        const startIndex = error.message.indexOf(" reverted: ") + 10;
        const endIndex = error.message.indexOf(",", startIndex);
        const Message = error.message.substring(startIndex, endIndex);
        toast.error(Message); // Display toast error message
      }

      toast.error(errorMessage); // Display toast error message
      throw new Error(errorMessage); // Rethrow the error with custom message
    }
  };

  const fetchTotalStaked = useCallback(async () => {
    try {
      const totalStaked = await lpRewardContract.methods.totalStaked().call();
      setTotalStaked(totalStaked);
      console.log("toktal staked! ", totalStaked);
    } catch (error) {
      console.error("Error fetching total staked:", error);
    }
  }, [lpRewardContract]);

  const fetchUserRewards = useCallback(async () => {
    try {
      console.log("address: ", userAddress);
      const userRewardsValue = await lpRewardContract.methods
        .getUserRewards(userAddress)
        .call();
      const etherValue = parseInt(userRewardsValue) / 10 ** 18;
      setUserRewards(etherValue);
    } catch (error) {
      console.error("Error fetching user rewards:", error);
    }
  }, [userAddress, lpRewardContract]);

  const fetchUserAPR = useCallback(async () => {
    try {
      console.log("address: ", userAddress);
      const REWARD_PER_DAY = await lpRewardContract.methods
        .REWARD_PER_DAY()
        .call();
      const totalStaked = await lpRewardContract.methods.totalStaked().call();

      if (totalStaked === "0") {
        console.log("No tokens staked.");
      } else {
        const APR =
          (BigInt(REWARD_PER_DAY) * BigInt(365) * BigInt(100)) /
          BigInt(totalStaked);
        console.log("APR = " + APR.toString() + "%");
        const etherValue = parseInt(APR) / 10 ** 18;
        setUserAPR(etherValue); // Assuming you want to set the APR in the state variable `userAPR`
      }
    } catch (error) {
      console.error("Error fetching user APR:", error);
    }
  }, [userAddress, lpRewardContract]);

  const getOwnerMintedUserNames = useCallback(async () => {
    try {
      const mintedDomains = [];
      // Get the token IDs owned by the connected account
      const tokenIds = await userNameContract.methods
        .tokensOfOwner(userAddress)
        .call();
      console.log("tokenIDs: ", tokenIds);
      for (const tokenId of tokenIds) {
        const mintedDomain = await userNameContract.methods
          .domainNameOf(tokenId)
          .call();
        mintedDomains.push({ domainName: mintedDomain + ".lazi", tokenId });
      }

      setMintedUserNames(mintedDomains);
    } catch (error) {
      console.error(error);
    }
  }, [userAddress, userNameContract]);

  const fetchDistributionsData = useCallback(async () => {
    try {
      const daysToStake = [30, 60, 91, 82, 365, 547, 730]; // Example data

      const distributions = await lpRewardContract.methods
        .getDistributions(daysToStake)
        .call();
      const lockPeriodDistributions = distributions[0];
      const stakedTokenDistributions = distributions[1];
      const rewardTokenDistributions = distributions[2];

      console.log(lockPeriodDistributions); // array of lock period distributions
      console.log(stakedTokenDistributions); // array of staked token distributions
      console.log(rewardTokenDistributions); // array of reward token distributions
      // Rest of the code
      console.log("Graph data fetch success!!!");
      setLockPeriodState((prevState) => ({
        ...prevState,
        options: {
          ...prevState.options,
          xaxis: {
            categories: daysToStake,
          },
        },
        series: [
          {
            ...prevState.series[0],
            data: lockPeriodDistributions,
          },
        ],
      }));

      setStakedTokenState((prevState) => ({
        ...prevState,
        options: {
          ...prevState.options,
          xaxis: {
            categories: daysToStake,
          },
        },
        series: [
          {
            ...prevState.series[0],
            data: stakedTokenDistributions,
          },
        ],
      }));

      setRewardTokenState((prevState) => ({
        ...prevState,
        options: {
          ...prevState.options,
          xaxis: {
            categories: daysToStake,
          },
        },
        series: [
          {
            ...prevState.series[0],
            data: rewardTokenDistributions,
          },
        ],
      }));
      console.log("Graph data Update success!!!");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  }, [userAddress, lpRewardContract, userNameContract]);

  useEffect(() => {
    if (userAddress && lpRewardContract && userNameContract) {
      fetchUserRewards();
      fetchTotalStaked();
      getOwnerMintedUserNames();
      fetchDistributionsData();
      fetchUserAPR();
    }
  }, [
    userAddress,
    userNameContract,
    lpRewardContract,
    fetchUserRewards,
    fetchTotalStaked,
    getOwnerMintedUserNames,
    fetchDistributionsData,
    fetchUserAPR,
  ]);

  const handleUserRewardsClick = async () => {
    fetchUserRewards();
  };
  const handleTotalStakedClick = async () => {
    fetchTotalStaked();
  };
  const handleCollectButtonClick = async () => {
    try {
      // ensure the staking contract instance has been initialized
      if (!lpRewardContract) {
        await initLpRewardContract();
      }

      // execute the getReward function in the smart contract
      const tx = await lpRewardContract.methods
        .harvest()
        .send({ from: userAddress });

      // Wait for the transaction to be confirmed
      const receipt = await tx.wait();

      // Check for errors in the transaction receipt
      if (receipt.status === false) {
        throw new Error(
          `Transaction failed with status code ${receipt.status}`
        );
      }

      // Display a success message to the user
      alert("Rewards collected successfully!");
    } catch (error) {
      // Display an error message to the user
      alert(`Error collecting rewards: ${error.message}`);
    }
  };

  //funtion to add token to metamsk
  const addTokenToMetaMask = async () => {
    const { ethereum } = window;

    if (!(ethereum && ethereum.isMetaMask)) {
      toast.message("Use Metamask!");
      return;
    }
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: laziTokenAddress, // The address that the token is at.
            symbol: "LAZI", // A ticker symbol or shorthand, up to 5 chars.
            decimals: 18, // The number of decimals in the token
            image:
              "https://pbs.twimg.com/profile_images/1609799908101324800/6RP_7TpH_400x400.jpg", // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Access the selected option value whenever it changes
    if (selectedTime) {
      console.log("Selected Option:", selectedTime);
    }
  }, [selectedTime]);

  function AnimatedNumber({ targetNumber, suffix }) {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (currentNumber < targetNumber) {
          setCurrentNumber((prevNumber) => prevNumber + 1);
        }
      }, 5);

      return () => clearInterval(interval);
    }, [currentNumber, targetNumber]);

    return (
      <b>
        {currentNumber}
        {suffix}
      </b>
    );
  }
  function AnimatedNumber1({ targetNumber, suffix }) {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (currentNumber < targetNumber) {
          setCurrentNumber((prevNumber) => prevNumber + 1500);
        }
      }, 1);

      return () => clearInterval(interval);
    }, [currentNumber, targetNumber]);

    return (
      <b>
        {currentNumber}
        {suffix}
      </b>
    );
  }

  return (
    <>
      <Box className={classes.bannerBox}>
        <Grid container spacing={3}>
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>

              <Box className={classes.root}>
              {!(locked || flexible || confirmStaking || afterLocked ||extendLockedButtom) && (  <Box className={classes.tooltipIconHeader}>
                  <Typography variant="h2">LP Reward</Typography>
                  <Tooltip
                    title="This is the LP Reward tooltip."
                    style={{ cursor: "pointer" }}
                    placement={"top"}
                  >
                    <InfoIcon fontSize={"medium"} />
                  </Tooltip>
                </Box>)}

                <br></br>
                {/* <Box mt={2} mb={2}>
                  <Typography
                    variant="body2"
                    className={classes.inputLabel}
                    style={{ fontSize: "12px", marginBottom: 2 }}
                  >
                    Enter Token to Stake
                  </Typography>
                  <TextField
                    className={classes.input}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    variant="outlined"
                  />
                </Box> */}
                {/* <Box mt={2}>
                  <Autocomplete
                    disablePortal
                    id="tags-standard"
                    sx={{ width: 300 }}
                    options={monthOptions}
                    value={
                      monthOptions.find(
                        (option) => option.value === selectedTime
                      ) || null
                    }
                    getOptionLabel={(option) => option.label}
                    onChange={(event, newValue) =>
                      setSelectedTime(newValue?.value || null)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Month Stake"
                      />
                    )}
                  />
                  <br></br>
                </Box> */}
                <br></br>
                {/* <div style={{ display: "flex" }}>
                  <div>
                    <Box className={classes.heading}>
                      <Typography variant="h2">Users Stake</Typography>
                    </Box>
                    <br></br>
                    <Box>
                      {mintedUserNames.length === 0 ? (
                        <Typography variant="h5">
                          No User Name minted yet.
                        </Typography>
                      ) : (
                        mintedUserNames.map(({ domainName, tokenId }) => (
                          <Box className={classes.checkbox} key={domainName}>
                            <Checkbox
                              checked={selectedUserNames.includes(tokenId)}
                              onChange={(event) =>
                                handleCheckboxChange(event, domainName, tokenId)
                              }
                              value={tokenId}
                              size="small"
                              inputProps={{
                                "aria-label": "checkbox with small size",
                              }}
                            />
                            <Typography variant="h5">{domainName}</Typography>
                          </Box>
                        ))
                      )}
                    </Box>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <Chart
                      options={userNameChart.options}
                      series={[
                        selectedUserNames.length,
                        mintedUserNames.length + 1,
                      ]}
                      type="donut"
                      width="80%"
                    />{" "}
                  </div>
                </div> */}
                {/* <Box className={classes.Buttonbox} mt={2}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#e31a89", color: "#fff" }}
                      onClick={handleStake}
                    >
                      Stake
                    </Button>
                  </Box>
                </Box> */}
                <br></br>
                {/* <Box mt={2}>
                  <h3>Text Area</h3>
                  <div
                    style={{
                      border: "1px solid",
                      padding: "10px",
                      borderRadius: "7px",
                    }}
                  >
                    <div class="info">
                      <div class="label">Total Locked:</div>
                      <div class="value">
                        <AnimatedNumber1 targetNumber={1888888} suffix="LAZI" />
                      </div>
                    </div>
                   <div class="info">
                      <div class="label">Average lock duration:</div>
                      <div
                        class="value"
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <AnimatedNumber targetNumber={42} suffix="weeks" />
                        <div class="image-container">
                          <img
                            src="./images/clock.png"
                            alt="Your image description"
                            style={{ width: "20px" }}
                          />
                          <div class="info-text">Time remaining</div>
                        </div>
                      </div>
                    </div> 
                     <div class="info">
                      <div class="label">Performance fee:</div>
                      <div class="value">
                        <AnimatedNumber targetNumber={0} suffix="" />
                        ~ <AnimatedNumber targetNumber={2} suffix="%" />
                      </div>
                    </div> 
                    <a
                      href="https://mumbai.polygonscan.com/address/0xf472134D28216581F47304c66Fb18922a146e514"
                      style={{
                        fontSize: "20px",
                        marginTop: "15px",
                        color: "#e31a89",
                      }}
                    >
                      {" "}
                      See Token Info
                      <img
                        src="./images/link.png"
                        alt="External Link Icon"
                        style={{ verticalAlign: "middle", width: "25px" }}
                      />
                    </a>
                    <br></br>
                    <a
                      href="https://lazi.gitbook.io/whitepaper/staking-rewards"
                      style={{
                        fontSize: "20px",
                        marginTop: "15px",
                        color: "#e31a89",
                      }}
                    >
                      {" "}
                      View Tutorial
                      <img
                        src="./images/link.png"
                        alt="External Link Icon"
                        style={{ verticalAlign: "middle", width: "25px" }}
                      />
                    </a>
                    <br></br>
                    <a
                      href="https://mumbai.polygonscan.com/address/0xba83dA230E4727013E7d38D8e87A6A811F1514d9"
                      style={{
                        fontSize: "20px",
                        marginTop: "15px",
                        color: "#e31a89",
                      }}
                    >
                      {" "}
                      View Contract
                      <img
                        src="./images/etherscan.svg"
                        alt="External Link Icon"
                        style={{
                          marginLeft: "3px",
                          verticalAlign: "middle",
                          width: "25px",
                        }}
                      />
                    </a>
                    <br></br>
                    <button
                      style={{
                        fontSize: "20px",
                        marginTop: "10px",
                        color: "#e31a89",
                        border: "2px solid #e31a89",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onClick={addTokenToMetaMask}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#e31a89";
                        e.target.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#e31a89";
                      }}
                    >
                      Add to Wallet
                      <img
                        src="./images/metamask.png"
                        alt="Metamask logo"
                        style={{
                          border: "none",
                          marginLeft: "5px",
                          verticalAlign: "middle",
                          width: "25px",
                          backgroundColor: "transparent",
                        }}
                      />
                    </button>

                    <br></br>
                    <Button
                      variant="outlined"
                      style={{ color: "#e31a89", marginTop: "15px" }}
                    >
                      Auto/Locked
                    </Button>
                    <div class="image-container">
                      <img
                        src="./images/info.png"
                        alt="Your image description"
                        style={{
                          verticalAlign: "middle",
                          width: "20px",
                          marginTop: "13px",
                          marginLeft: "10px",
                        }}
                      />
                      <div class="info-text">information</div>
                    </div>
                  </div>
                </Box> */}

{!(locked || flexible || confirmStaking || afterLocked ||extendLockedButtom) && (<Box
                    mt={2}
                    mb={2}
                    style={{
                      border: "2px solid #3C3C3C",
                      borderRadius: 8,
                      padding: 5,
                      paddingBlock: 10,
                      transition: "all 0.5s",
                      marginTop:-28
                    }}
                  >
                    <Typography
                      variant="h2"
                      style={{
                        fontSize: 12,
                        whiteSpace: "nowrap",
                        marginLeft: 10,
                      }}
                    >
                      LAZI Stake
                    </Typography>

                    <Box display="flex" justifyContent="space-around" mt={2}>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#e31a89",
                          color: "#fff",
                          height: 30,
                          fontSize: 14,
                          marginLeft: 5,
                          transition: "opacity 0.5s ease-in-out",
                        }}
                        onClick={handleFlexibleButton}
                      >
                        Flexible
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#e31a89",
                          color: "#fff",
                          height: 30,
                          fontSize: 14,
                          transition: "all 0.5s",
                        }}
                        onClick={handleLockedButton}
                      >
                        Locked
                      </Button>
                    </Box>
                  </Box>)}
                 
                  {/* Content to be shown when Clicked on flexible button */}
                {flexible && (
                  <Box
                    style={{
                      height: flexible ? "auto" : 0,
                      overflow: "hidden",
                    }}
                  >
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box>
                        <Typography variant="h2" className={classes.head}>
                          Flexible
                        </Typography>
                      </Box>
                      <Box>
                        <ArrowBackIcon
                          onClick={handleGoBack}
                          style={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>

                    <Box mt={2} mb={2} style={{}}>
                      <Box>
                        <Typography
                          variant="body2"
                          className={classes.inputLabel}
                          style={{ fontSize: "13px", marginBottom: 2 }}
                        >
                          Enter Token to Stake
                        </Typography>
                        <TextField
                          className={classes.input}
                          value={tokenStakeValue}
                          onChange={handleStakeTokenChange}
                          variant="outlined"
                        />
                      </Box>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#e31a89",
                          color: "#fff",
                          height: 25,
                          borderRadius: 20,
                          fontSize: 12,
                          fontWeight: "bold",
                          marginTop: 17,
                        }}
                        onClick={() => handleDayStakeButton(1)}
                      >
                        25%
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#e31a89",
                          color: "#fff",
                          height: 25,
                          borderRadius: 20,
                          fontSize: 12,
                          fontWeight: "bold",
                          marginTop: 17,
                        }}
                        onClick={() => handleDayStakeButton(2)}
                      >
                        50%
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#e31a89",
                          color: "#fff",
                          height: 25,
                          borderRadius: 20,
                          fontSize: 12,
                          fontWeight: "bold",
                          marginTop: 17,
                        }}
                        onClick={() => handleDayStakeButton(3)}
                      >
                        75%
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#e31a89",
                          color: "#fff",
                          height: 25,
                          borderRadius: 20,
                          fontSize: 12,
                          fontWeight: "bold",
                          marginTop: 17,
                        }}
                        onClick={() => handleDayStakeButton(4)}
                      >
                        max
                      </Button>
                    </Box>
                    <br></br>
                    {/* <div style={{ display: "flex", marginTop: 20 }}>
                      <div>
                        <Box className={classes.heading}>
                          <Typography variant="h2" className={classes.head}>
                            User Names Stake
                          </Typography>
                        </Box>
                        <br></br>
                        <Box>
                          {mintedUserNames.length === 0 ? (
                            <Typography variant="h5" style={{ fontSize: 14 }}>
                              No User Name minted yet.
                            </Typography>
                          ) : (
                            mintedUserNames.map(({ domainName, tokenId }) => (
                              <Box
                                className={classes.checkbox}
                                key={domainName}
                              >
                                <Checkbox
                                  checked={selectedUserNames.includes(tokenId)}
                                  onChange={(event) =>
                                    handleCheckboxChange(
                                      event,
                                      domainName,
                                      tokenId
                                    )
                                  }
                                  value={tokenId}
                                  size="small"
                                  inputProps={{
                                    "aria-label": "checkbox with small size",
                                  }}
                                />
                                <Typography variant="h5">
                                  {domainName}
                                </Typography>
                              </Box>
                            ))
                          )}
                        </Box>
                      </div>
                    </div> */}
                    <Box className={classes.Buttonbox} mt={2}>
                      <Box mt={2}>
                        {/* <Button
                          variant="contained"
                          style={{ backgroundColor: "#e31a89", color: "#fff" }}
                          onClick={handleStake}
                        >
                          Start Now
                        </Button> */}

                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#e31a89",
                            color: "#fff",
                            height: 40,
                            paddingInline: 30,
                            fontSize: 16,
                            marginTop: 25,
                            marginLeft: 70,
                          }}
                          onClick={handleConfirmStakingButton}
                        >
                          Confirm
                        </Button>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#e31a89",
                            color: "#fff",
                            height: 40,
                            paddingInline: 30,
                            fontSize: 16,
                            marginTop: 25,
                            marginLeft: 70,
                          }}
                        >
                          Add LAZI
                        </Button>
                      </Box>
                    </Box>
                    {/* On Clicking Extend Button */}
                    {/* currently working here */}
                  </Box>
                )}
                {/* for Confirm Flexible Staking */}
                {confirmStaking && (
                  <Box>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h2"
                          style={{ fontSize: 14, whiteSpace: "none" }}
                        >
                          My position
                          <span
                            style={{
                              backgroundColor: "#e31a89",
                              paddingInline: 4,
                              fontSize: 16,
                              borderRadius: 2,
                              marginLeft: 2,
                            }}
                          >
                            Flexible
                          </span>
                        </Typography>
                      </Box>
                      <Box>
                        <ArrowBackIcon
                          onClick={handleGoBacktoFlexible}
                          style={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>

                    <Box
                      style={{
                        border: "1px solid #3C3C3C",
                        borderRadius: 10,
                        marginTop: 40,
                        paddingBottom: 20,
                        paddingTop: 10,
                        paddingInline: 10,
                      }}
                    >
                      <div>
                        <Typography
                          variant="h4"
                          style={{ fontSize: 18, fontWeight: "bold" }}
                        >
                          Recent Lazi Profit
                        </Typography>
                        <Typography variant="body1" component="div">
                          0.00000
                        </Typography>
                      </div>
                    </Box>

                    <Box
                      style={{
                        border: "1px solid #3C3C3C",
                        borderRadius: 10,
                        marginTop: 40,
                        paddingBottom: 20,
                        paddingTop: 10,
                        paddingInline: 10,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <Typography
                          variant="h4"
                          style={{ fontSize: 18, fontWeight: "bold" }}
                        >
                          Lazi Staked
                        </Typography>
                        <Typography variant="body1" component="div">
                          {lazinessProfit.toFixed(5)}
                        </Typography>
                      </div>
                      <div>
                        <Button
                          style={{
                            border: "2px solid #e31a89",
                            borderRadius: 8,
                            color: "#e31a89",
                            height: 25,
                          }}
                          onClick={handleDecrement}
                        >
                          -
                        </Button>
                        <span style={{ width: 10 }}></span>{" "}
                        {/* Gap between buttons */}
                        <Button
                          style={{
                            border: "2px solid #e31a89",
                            borderRadius: 8,
                            color: "#e31a89",
                            height: 25,
                          }}
                          onClick={handleIncrement}
                        >
                          +
                        </Button>
                      </div>
                    </Box>

                    <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#e31a89",
                          color: "#fff",
                          height: 40,
                          paddingInline: 30,
                          fontSize: 16,
                          marginTop: 25,
                          marginLeft: 70,
                        }}
                        // onClick={handleConfirmLockedButton}
                      >
                        Convert to Lock
                      </Button>

                    
                  </Box>
                )}

{/* For Lccked Button */}
         {/* For Locked */}

         <Box>
                  {locked && (
                    <Box>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        style={{ marginBottom: 4 }}
                      >
                        <Box>
                          <Typography variant="h2" className={classes.head}>
                            Locked
                          </Typography>
                        </Box>
                        <Box>
                          <ArrowBackIcon
                            onClick={handleGoBack}
                            style={{ cursor: "pointer" }}
                          />
                        </Box>
                      </Box>

                      <Box marginBottom={3}>
                        <Typography
                          variant="body2"
                          className={classes.inputLabel}
                          style={{ fontSize: "13px", marginBottom: 5 }}
                        >
                          Enter Token to Stake
                        </Typography>
                        <TextField
                          className={classes.input}
                          value={tokenStakeValue}
                          onChange={handleStakeTokenChange}
                          variant="outlined"
                          style={{ marginBottom: 5 }}
                        />
                      </Box>

                      {/* Percentage buttons in Locked buttons */}
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          marginTop: -25,
                          marginBottom: 22,
                        }}
                      >
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#e31a89",
                            color: "#fff",
                            height: 25,
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 17,
                          }}
                          onClick={() => handleDayStakeButton(1)}
                        >
                          25%
                        </Button>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#e31a89",
                            color: "#fff",
                            height: 25,
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 17,
                          }}
                          onClick={() => handleDayStakeButton(2)}
                        >
                          50%
                        </Button>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#e31a89",
                            color: "#fff",
                            height: 25,
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 17,
                          }}
                          onClick={() => handleDayStakeButton(3)}
                        >
                          75%
                        </Button>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#e31a89",
                            color: "#fff",
                            height: 25,
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 17,
                          }}
                          onClick={() => handleDayStakeButton(4)}
                        >
                          max
                        </Button>
                      </Box>

                      <Box>
                        <Typography
                          variant="body2"
                          className={classes.inputLabel}
                          style={{
                            fontSize: "13px",
                            marginBottom: 5,
                            paddingLeft: 2,
                          }}
                        >
                          Day Stake
                        </Typography>
                        <TextField
                          className={classes.input}
                          value={selectedTime}
                          onChange={handleDayStake}
                          variant="outlined"
                        />
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#e31a89",
                            color: "#fff",
                            height: 25,
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 17,
                          }}
                          onClick={() => handleDayStakeButton(1)}
                        >
                          1W
                        </Button>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#e31a89",
                            color: "#fff",
                            height: 25,
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 17,
                          }}
                          onClick={() => handleDayStakeButton(2)}
                        >
                          2W
                        </Button>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#e31a89",
                            color: "#fff",
                            height: 25,
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 17,
                          }}
                          onClick={() => handleDayStakeButton(3)}
                        >
                          3W
                        </Button>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#e31a89",
                            color: "#fff",
                            height: 25,
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 17,
                          }}
                          onClick={() => handleDayStakeButton(4)}
                        >
                          4W
                        </Button>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#e31a89",
                            color: "#fff",
                            height: 25,
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 17,
                          }}
                          onClick={() => handleDayStakeButton(52)}
                        >
                          Max
                        </Button>
                      </Box>
                      {/* Card Place */}

                      <Box
                        bgcolor={"black"}
                        paddingBlock={4}
                        borderRadius={8}
                        marginTop={4}
                      >
                        <Box paddingBottom={2} paddingTop={2}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              paddingInline: 15,
                              paddingBlock: 6,
                            }}
                          >
                            <div>Lazi to be locked </div>
                            <div style={{ fontWeight: "bold" }}>11111</div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              paddingInline: 15,
                              paddingBlock: 6,
                            }}
                          >
                            <div>Duration</div>
                            <div style={{ fontWeight: "bold" }}>2222</div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              paddingInline: 15,
                              paddingBlock: 6,
                            }}
                          >
                            <div>APR</div>
                            <div style={{ fontWeight: "bold" }}>3333</div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              paddingInline: 15,
                              paddingBlock: 6,
                            }}
                          >
                            <div>User Balance</div>
                            <div style={{ fontWeight: "bold" }}>444</div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              paddingInline: 15,
                              paddingBlock: 6,
                            }}
                          >
                            <div>Yield Boost</div>
                            <div style={{ fontWeight: "bold" }}>2x</div>
                          </div>
                        </Box>
                      </Box>

                      {/* Confirm Button */}

                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#e31a89",
                          color: "#fff",
                          height: 40,
                          paddingInline: 30,
                          fontSize: 16,
                          marginTop: 25,
                          marginLeft: 70,
                        }}
                        onClick={handleConfirmLockedButton}
                      >
                        Confirm
                      </Button>
                    </Box>
                  )}
                </Box>

                {/* After Locking is Confirm */}
                {afterLocked && (
                  <Box>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h2"
                          style={{ fontSize: 14, whiteSpace: "none" }}
                        >
                          My position
                          <span
                            style={{
                              backgroundColor: "#e31a89",
                              paddingInline: 4,
                              fontSize: 16,
                              borderRadius: 2,
                              marginLeft: 2,
                            }}
                          >
                            Locked
                          </span>
                        </Typography>
                      </Box>
                      <Box>
                        <ArrowBackIcon
                          onClick={handleGoBakcOfLocked}
                          style={{ cursor: "pointer" }}
                        />
                      </Box>
                    </Box>

                    <Box
                      style={{
                        border: "1px solid #3C3C3C",
                        borderRadius: 10,
                        marginTop: 40,
                        paddingBottom: 20,
                        paddingTop: 10,
                        paddingInline: 10,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <Typography
                          variant="h4"
                          style={{ fontSize: 15, fontWeight: "bold" }}
                        >
                          Recent Lazi Profit
                        </Typography>
                        <Typography variant="body1" component="div">
                          0.00000
                        </Typography>
                      </div>

                      <div>
                        <Typography
                          variant="h4"
                          style={{ fontSize: 15, fontWeight: "bold" }}
                        >
                          Yield Boost
                        </Typography>
                        <Typography variant="body1" component="div">
                          1.3x
                        </Typography>
                      </div>
                    </Box>
                    <Box
                      style={{
                        border: "1px solid #3C3C3C",
                        borderRadius: 10,
                        marginTop: 40,
                        paddingBottom: 20,
                        paddingTop: 30,
                        paddingInline: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <div>
                          <Typography
                            variant="h4"
                            style={{ fontSize: 12, fontWeight: "bold" }}
                          >
                            LOCKED LAZI
                          </Typography>
                          <Typography variant="body1" component="div">
                            0.00000
                          </Typography>
                        </div>

                        <div>
                          <Typography
                            variant="h4"
                            style={{ fontSize: 12, fontWeight: "bold" }}
                          >
                            UNLOCKED IN
                          </Typography>
                          <Typography variant="body1" component="div">
                            7 Days
                          </Typography>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          marginTop: 20,
                          marginBottom:10
                        }}
                      >
                        <Button variant="contained" color="primary"  style={{ backgroundColor: "#e31a89",
                            color: "#fff",
                            // height: 40,
                            paddingInline: 30,}}>
                          Add LAZI
                        </Button>
                        <Button variant="contained" color="primary" style={{ backgroundColor: "#e31a89",
                            color: "#fff",
                            // height: 40,
                            paddingInline: 30,}}
                            
                            onClick={handleExtendLockedButton}
                            >
                          Extend
                        </Button>
                      </div>
                    </Box>
                  </Box>
                )}

{/* Extend Locked Screen */}
{extendLockedButtom &&(
  <Box>
  <Box
    display={"flex"}
    justifyContent={"space-between"}
    style={{ marginBottom: 4 }}
  >
    <Box>
      <Typography variant="h2" className={classes.head}>
        Extend Lock
      </Typography>
    </Box>
    <Box>
      <ArrowBackIcon
        onClick={handleGoBacktoLocked}
        style={{ cursor: "pointer" }}
      />
    </Box>
  </Box>

  <Box marginBottom={3}>
    <Typography
      variant="body2"
      className={classes.inputLabel}
      style={{ fontSize: "13px", marginBottom: 5 }}
    >
      Enter Token to Stake
    </Typography>
    <TextField
      className={classes.input}
      value={tokenStakeValue}
      onChange={handleStakeTokenChange}
      variant="outlined"
      style={{ marginBottom: 5 }}
    />
  </Box>

  {/* Percentage buttons in Locked buttons */}
  <Box
    style={{
      display: "flex",
      justifyContent: "space-around",
      marginTop: -25,
      marginBottom: 22,
    }}
  >
    <Button
      variant="contained"
      style={{
        backgroundColor: "#e31a89",
        color: "#fff",
        height: 25,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 17,
      }}
      onClick={() => handleDayStakeButton(1)}
    >
      25%
    </Button>
    <Button
      variant="contained"
      style={{
        backgroundColor: "#e31a89",
        color: "#fff",
        height: 25,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 17,
      }}
      onClick={() => handleDayStakeButton(2)}
    >
      50%
    </Button>
    <Button
      variant="contained"
      style={{
        backgroundColor: "#e31a89",
        color: "#fff",
        height: 25,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 17,
      }}
      onClick={() => handleDayStakeButton(3)}
    >
      75%
    </Button>
    <Button
      variant="contained"
      style={{
        backgroundColor: "#e31a89",
        color: "#fff",
        height: 25,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 17,
      }}
      onClick={() => handleDayStakeButton(4)}
    >
      max
    </Button>
  </Box>

  {/* <Box>
    <Typography
      variant="body2"
      className={classes.inputLabel}
      style={{
        fontSize: "13px",
        marginBottom: 5,
        paddingLeft: 2,
      }}
    >
      Day Stake
    </Typography>
    <TextField
      className={classes.input}
      value={selectedTime}
      onChange={handleDayStake}
      variant="outlined"
    />
  </Box>
  <Box
    style={{
      display: "flex",
      justifyContent: "space-around",
    }}
  >
    <Button
      variant="contained"
      style={{
        backgroundColor: "#e31a89",
        color: "#fff",
        height: 25,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 17,
      }}
      onClick={() => handleDayStakeButton(1)}
    >
      1W
    </Button>
    <Button
      variant="contained"
      style={{
        backgroundColor: "#e31a89",
        color: "#fff",
        height: 25,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 17,
      }}
      onClick={() => handleDayStakeButton(2)}
    >
      2W
    </Button>
    <Button
      variant="contained"
      style={{
        backgroundColor: "#e31a89",
        color: "#fff",
        height: 25,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 17,
      }}
      onClick={() => handleDayStakeButton(3)}
    >
      3W
    </Button>
    <Button
      variant="contained"
      style={{
        backgroundColor: "#e31a89",
        color: "#fff",
        height: 25,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 17,
      }}
      onClick={() => handleDayStakeButton(4)}
    >
      4W
    </Button>
    <Button
      variant="contained"
      style={{
        backgroundColor: "#e31a89",
        color: "#fff",
        height: 25,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 17,
      }}
      onClick={() => handleDayStakeButton(52)}
    >
      Max
    </Button>
  </Box> */}
  {/* Card Place */}

  <Box
    bgcolor={"black"}
    paddingBlock={4}
    borderRadius={8}
    marginTop={4}
  >
    <Box paddingBottom={2} paddingTop={2}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: 15,
          paddingBlock: 6,
        }}
      >
        <div>Lazi to be locked </div>
        <div style={{ fontWeight: "bold" }}>11111</div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: 15,
          paddingBlock: 6,
        }}
      >
        <div>Duration</div>
        <div style={{ fontWeight: "bold" }}>2222</div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: 15,
          paddingBlock: 6,
        }}
      >
        <div>APR</div>
        <div style={{ fontWeight: "bold" }}>3333</div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: 15,
          paddingBlock: 6,
        }}
      >
        <div>User Balance</div>
        <div style={{ fontWeight: "bold" }}>444</div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: 15,
          paddingBlock: 6,
        }}
      >
        <div>Yield Boost</div>
        <div style={{ fontWeight: "bold" }}>2x</div>
      </div>
    </Box>
  </Box>

  {/* Confirm Button */}

  <Button
    variant="contained"
    style={{
      backgroundColor: "#e31a89",
      color: "#fff",
      height: 40,
      paddingInline: 30,
      fontSize: 16,
      marginTop: 25,
      marginLeft: 70,
    }}
    // onClick={handleConfirmLockedButton}
  >
    Confirm
  </Button>
</Box>

)}



              </Box>


              
            </Paper>
            
            <Paper
              className={classes.root}
              elevation={2}
              style={{ marginTop: "10px" }}
            >
              <div style={{ display: "flex" }}>
                <div>
                  <Box className={classes.heading} style={{ display: "block" }}>
                    <Typography variant="h2" style={{ fontSize: "26px" }}>
                      Your Total Staking
                    </Typography>
                    {/* <Button onClick={handleTotalStakedClick}>Refresh</Button> */}
                  </Box>
                  <br></br>
                  <p style={{ fontSize: "17px" }}>
                    <b>{totalStaked ? `${totalStaked} LAZI` : ""}</b>
                  </p>
                  <p style={{ fontSize: "17px" }}>
                    <b>
                      <AnimatedNumber
                        targetNumber={
                          totalStaked ? (totalStaked * 100) / 200000000 : 0
                        }
                        suffix="%"
                      />
                    </b>
                  </p>
                </div>
                <br></br>
                <div style={{ marginLeft: "auto" }}>
                  <Chart
                    options={state.options}
                    series={[
                      totalStaked ? (totalStaked * 100) / 200000000 : 0,
                      100 - (totalStaked ? (totalStaked * 100) / 200000000 : 0),
                    ]}
                    type="donut"
                    width="70%"
                  />
                </div>
              </div>
            </Paper>
          </Grid>{" "}
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root} height={400} overflow="auto">
                <div style={{ display: "flex" }}>
                  <div>
                    <Box
                      className={classes.heading}
                      style={{ display: "block" }}
                    >
                      <Typography variant="h2" style={{ fontSize: "26px" }}>
                        Locked APR
                      </Typography>
                      {/* <Button onClick={handleTotalStakedClick}>Refresh</Button> */}
                    </Box>
                    <br></br>
                    <p style={{ fontSize: "17px" }}>
                      <b>{userAPR ? `${userAPR} APR` : "0 APR"}</b>
                    </p>
                    {/* <p style={{ fontSize: "17px" }}>
                      <b>
                        <AnimatedNumber
                          targetNumber={
                            totalStaked ? (totalStaked * 100) / 200000000 : 0
                          }
                          suffix="%"
                        />
                      </b>
                    </p> */}
                  </div>
                  <br></br>
                  <div style={{ marginLeft: "auto" }}>
                    <Chart
                      options={state.options}
                      series={[
                        totalStaked ? (totalStaked * 100) / 200000000 : 0,
                        100 -
                          (totalStaked ? (totalStaked * 100) / 200000000 : 0),
                      ]}
                      type="donut"
                      width="70%"
                    />
                  </div>
                </div>
                <br></br>

                <div style={{ display: "flex" }}>
                  <div>
                    <Box className={classes.heading}>
                      <Typography variant="h2" style={{ fontSize: "26px" }}>
                        <h>Your Rewards</h>
                      </Typography>
                    </Box>
                    <br></br>
                    <p style={{ fontSize: "17px" }}>
                      <b>{`${userRewards} LAZI`}</b>
                    </p>
                    <br></br>
                    {/* <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUserRewardsClick}
                    >
                      Get Your Rewards
                    </Button> */}
                    <Box className={classes.Buttonbox} mt={2}>
                      <Box mt={2}>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "#e31a89", color: "#fff" }}
                          onClick={handleCollectButtonClick}
                        >
                          Collect
                        </Button>
                      </Box>
                    </Box>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <Chart
                      options={state.options}
                      series={[23, 45]}
                      type="donut"
                      width="70%"
                    />{" "}
                  </div>
                </div>
              </Box>
            </Paper>
            <Paper
              className={classes.root}
              elevation={2}
              style={{ marginTop: "10px" }}
            >
              <Chart
                options={lockPeriodState.options}
                series={lockPeriodState.series}
                type="bar"
                width="100%"
              />
            </Paper>
            <Paper
              className={classes.root}
              elevation={2}
              style={{ marginTop: "10px" }}
            >
              <Chart
                options={stakedTokenState.options}
                series={stakedTokenState.series}
                type="area"
                width="100%"
              />
            </Paper>
            <Paper
              className={classes.root}
              elevation={2}
              style={{ marginTop: "10px" }}
            >
              <Chart
                options={rewardTokenState.options}
                series={rewardTokenState.series}
                type="line"
                width="100%"
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default StakeReward;
