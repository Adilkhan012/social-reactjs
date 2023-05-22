import React, { useState, useEffect, useCallback } from "react";
import Chart from "react-apexcharts";
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
import initStakingContract from "src/blockchain/stakingReward";
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
  const [sliderValue, setSliderValue] = useState(40);
  const [stakingContract, setStakingContract] = useState(null);
  const [userNameContract, setUserNameContract] = useState(null);
  const [laziTokenContract, setLaziTokenContract] = useState(null);
  const [totalStaked, setTotalStaked] = useState(0);
  const [userRewards, setUserRewards] = useState(0);
  const [selectedUserNames, setSelectedUserNames] = useState([]);
  const [mintedUserNames, setMintedUserNames] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [userAPR, setUserAPR] = useState(0);

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
        const contractStaking = await initStakingContract();
        const tokenContract = await initlaziTokenContract();
        const contractUserName = await initUserNameContract();
        setLaziTokenContract(tokenContract);
        setStakingContract(contractStaking);
        setUserNameContract(contractUserName);
        setAddress(address);
      } catch (error) {
        console.error("Contract initialization failed:", error);
      }
    };

    initialize();
  }, []);

  const monthOptions = [
    { label: "3 months (1.25x)", value: 91 },
    { label: "6 months (1.5x)", value: 182 },
    { label: "1 year (2x)", value: 365 },
    { label: "1.5 year (1.75x)", value: 547 },
    { label: "2 year (3.5x)", value: 730 },
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

  const handleStake = () => {
    const erc20Amount = sliderValue; // Use sliderValue state variable
    console.log("selected Amount:", erc20Amount);

    // const daysToStake = selectedTime; // Example: 30 days
    console.log("selected UserName:", selectedUserNames);
    console.log("selected TimePeriod:", selectedTime);

    // const erc721Ids = selectedUserNames; // Example: ERC721 token IDs    if (web3 && stakingContract) {
    stakingContract.methods
      .stake(erc20Amount, selectedTime, selectedUserNames)
      .send({ from: userAddress })
      .on("transactionHash", (hash) => {
        console.log(hash);
      })
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("error", (error) => {
        console.log(error);
      });
  };

  const fetchTotalStaked = useCallback(async () => {
    try {
      const totalStaked = await stakingContract.methods.totalStaked().call();
      setTotalStaked(totalStaked);
      console.log("toktal staked! ", totalStaked);
    } catch (error) {
      console.error("Error fetching total staked:", error);
    }
  }, [stakingContract]);

  const fetchUserRewards = useCallback(async () => {
    try {
      console.log("address: ", userAddress);
      const userRewardsValue = await stakingContract.methods
        .getUserRewards(userAddress)
        .call();
      const etherValue = parseInt(userRewardsValue) / 10 ** 18;
      setUserRewards(etherValue);
    } catch (error) {
      console.error("Error fetching user rewards:", error);
    }
  }, [userAddress, stakingContract]);

  const fetchUserAPR = useCallback(async () => {
    try {
      console.log("address: ", userAddress);
      const REWARD_PER_DAY = await stakingContract.methods
        .REWARD_PER_DAY()
        .call();
      const totalStaked = await stakingContract.methods.totalStaked().call();

      if (totalStaked === "0") {
        console.log("No tokens staked.");
      } else {
        const APR =
          (BigInt(REWARD_PER_DAY) * BigInt(365) * BigInt(100)) /
          BigInt(totalStaked);
        console.log("APR = " + APR.toString() + "%");
        setUserAPR(APR); // Assuming you want to set the APR in the state variable `userAPR`
      }
    } catch (error) {
      console.error("Error fetching user APR:", error);
    }
  }, [userAddress, stakingContract]);

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
      const daysToStake = [30, 91, 82, 365, 547, 730]; // Example data

      const distributions = await stakingContract.methods
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
  }, [userAddress, stakingContract, userNameContract]);

  useEffect(() => {
    if (userAddress && stakingContract && userNameContract) {
      fetchUserRewards();
      fetchTotalStaked();
      getOwnerMintedUserNames();
      fetchDistributionsData();
      fetchUserAPR();
    }
  }, [
    userAddress,
    userNameContract,
    stakingContract,
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
      if (!stakingContract) {
        await initStakingContract();
      }

      // execute the getReward function in the smart contract
      const tx = await stakingContract.methods
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
                <Box className={classes.tooltipIconHeader}>
                  <Typography variant="h2">Stake Reward</Typography>
                  <Tooltip
                    title="This is the stake reward tooltip."
                    style={{ cursor: "pointer" }}
                    placement={"top"}
                  >
                    <InfoIcon fontSize={"medium"} />
                  </Tooltip>
                </Box>

                <br></br>
                <Box mt={2} mb={2}>
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
                </Box>
                <Box mt={4}>
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
                </Box>
                <br></br>
                <div style={{ display: "flex" }}>
                  <div>
                    <Box className={classes.heading}>
                      <Typography variant="h2">Users Stake</Typography>
                    </Box>
                    <br></br>
                    <Box>
                      {mintedUserNames.map(({ domainName, tokenId }) => (
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
                      ))}
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
                </div>
                <Box className={classes.Buttonbox} mt={2}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#e31a89", color: "#fff" }}
                      onClick={handleStake}
                    >
                      Stake
                    </Button>
                  </Box>
                </Box>
                <br></br>
                <Box mt={2}>
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
                          marginLeft: "5px",
                          verticalAlign: "middle",
                          width: "25px",
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
                </Box>
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
