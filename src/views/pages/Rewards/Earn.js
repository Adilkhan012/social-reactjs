import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import {
  Box,
  Checkbox,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
  LinearProgress,
  withStyles,
  Tooltip,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ApiConfig from "src/ApiConfig/ApiConfig";
import { toast } from "react-toastify";
import initMetamask from "src/blockchain/metamaskConnection";
import initEngagementContract from "src/blockchain/engagementContract";
import initlaziTokenContract from "src/blockchain/laziTokenContract";
import initUserNameContract from "src/blockchain/laziUserNameContract";
import Autocomplete from "@material-ui/lab/Autocomplete";

const CustomBar = withStyles({
  root: {
    backgroundColor: "#E9E9E9",
    borderRadius: 4,
    height: 6,
  },
  bar: {
    backgroundColor: "#E71486",
    borderRadius: 4,
  },
})(LinearProgress);

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
    fontSize: "20px",
  },
  sliderThumb: {
    transition: "transform 0.2s ease-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  checkboxContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Two columns
    gap: theme.spacing(2), // Gap between items
  },
  heading: {
    display: "flex",
  },
  head: {
    fontSize: 20,
    fontWeight: 600,
    whiteSpace: "nowrap",
    fontFamily: "Montserrat",
  },
  header: {
    fontSize: 14,
    fontWeight: 600,
    whiteSpace: "nowrap",
    fontFamily: "Montserrat",
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
      // padding: "11px 16px",
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
        // left: "-50%",
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
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textFieldWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    // marginBottom: 24,
    width: "100%",
  },
  checboxText: {
    fontSize: 14,
    whiteSpace: "nowrap",
  },
  input: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      color: "white",
      borderRadius: 10,
      height: "40px",
      border: "1px solid #fff",
      fontSize: 12,
    },
  },
  inputLabel: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 14,
    marginLeft: 12,
  },
  containerProgress: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // minHeight: "100vh",
  },
  progressBar: {
    width: 400,
    padding: theme.spacing(2),
  },
  progressValue: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
    fontWeight: "bold",
  },
}));
const EngageReward = () => {
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedContribution, setSelectedContribution] = useState("");
  const [selectedContribution2, setSelectedContribution2] = useState("");
  const [selectedStakeScore, setSelectedStakeScore] = useState("");
  const [selectedMiningReward, setSelectedMiningReward] = useState("");
  const [selectedUsername, setSelectedUsername] = useState("");
  const [valueOfT, setValueOfT] = useState("");
  const [valueOfU, setValueOfU] = useState("");
  const [valueOfS, setValueOfS] = useState("");
  const [valueOfFinalMultiplier, setValueOfFinalMultiplier] = useState("");
  const [userRank, setUserRank] = useState("");
  const [userScore, setUserScore] = useState("");
  const [winReward, setWinReward] = useState("");
  const [remainingDays, setRemainingDays] = useState(2);
  const [engagementContract, setEngagementContract] = useState(null);
  const [userNameContract, setUserNameContract] = useState(null);
  const [laziTokenContract, setLaziTokenContract] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [selectedUserNames, setSelectedUserNames] = useState([]);
  const [mintedUserNames, setMintedUserNames] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [tokenStakeValue, setTokenStakeValue] = useState(20);
  const [userBalance, setUserBalance] = useState(0);
  // const [totalContribution, setTotalContribution] = useState(0);
  const [userContributionScore, setUserContributionScore] = useState(0);
  const [userStakedDuration, setUserStakedDuration] = useState(0);
  const [userStakedTokens, setUserStakedTokens] = useState(0);
  const [totalStakedLazi, setTotalStakedLazi] = useState(0);
  const [totalStakedDuration, setTotalStakedDuration] = useState(0);
  const [userStakedScore, setUserStakedScore] = useState(0);
  const [userDurationScore, setUserDurationScore] = useState(0);
  const [totalStakers, setTotalStakers] = useState(0);
  const [avgStakedLazi, setAvgStakedLazi] = useState(0);
  const [avgStakedDuration, setAvgStakedDuration] = useState(0);

  const monthOptions = [
    { label: "90 Days (1.25x)", value: 90 },
    { label: "180 Days (1.5x)", value: 180 },
    { label: "365 Days (2x)", value: 365 },
    { label: "547 Days (1.75x)", value: 547 },
    { label: "730 Days (3.5x)", value: 730 },
  ];
  const calculateTotalMultiplier = () => {
    let multiplier = 1;

    if (selectedTime) {
      switch (selectedTime) {
        case 90:
          multiplier += 0.25;
          break;
        case 180:
          multiplier += 0.5;
          break;
        case 365:
          multiplier += 1;
          break;
        case 547:
          multiplier += 0.75;
          break;
        case 730:
          multiplier += 2.5;
          break;
        default:
          break;
      }
    }

    multiplier += 0.25 * selectedUserNames.length;
    return multiplier;
  };

  const totalMultiplier = calculateTotalMultiplier();

  useEffect(() => {
    const initialize = async () => {
      try {
        const { address } = await initMetamask();
        const engagementStaking = await initEngagementContract();
        const tokenContract = await initlaziTokenContract();
        const contractUserName = await initUserNameContract();
        setLaziTokenContract(tokenContract);
        setEngagementContract(engagementStaking);
        setUserNameContract(contractUserName);
        setUserAddress(address);
      } catch (error) {
        console.error("Contract initialization failed:", error);
      }
    };

    initialize();
    fetchScore();
  }, []);

  const handleStakeTokenChange = (event) => {
    setTokenStakeValue(event.target.value);
  };

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
  };
  const handleDurationScoreChange = (event, newValue) => {
    setUserDurationScore(newValue);
  };
  const handleStakedScoreChange = (event, newValue) => {
    setUserStakedScore(newValue);
  };

  const isMobile = useMediaQuery("(max-width:600px)");
  // https://meet.google.com/tdr-grfk-vzg

  const fetchScore = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: ApiConfig.contributionScore,
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      const userScore = response.data.userScore;
      // setTotalContribution(totalContribution);
      setUserContributionScore(userScore);
      console.log(userScore);
      toast.success("Contribution score fetched successfully!");
    } catch (error) {
      console.error("Error fetching contribution score:", error.response);

      // Display error toast message
      toast.error("Error fetching contribution score. Please try again.");

      // Handle specific error scenarios
      if (error.response && error.response.status === 401) {
        console.log("Error 401");
      } else {
        console.log("Error Fetching Scores!!!");
      }
    }
  };

  //function to fetch UserNames
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

  const handleStake = async () => {
    const erc20Amount = tokenStakeValue; // Use sliderValue state variable
    console.log("selected Amount:", erc20Amount);

    // const daysToStake = selectedTime; // Example: 30 days
    console.log("selected UserName:", selectedUserNames);
    console.log("selected TimePeriod:", selectedTime);
    console.log("user Duration:", userStakedDuration);
    console.log("user Tokens:", userStakedTokens);
    console.log("Total Duration:", totalStakedDuration);
    console.log("Total StakedTokens:", totalStakedLazi);

    // const erc721Ids = selectedUserNames; // Example: ERC721 token IDs    if (web3 && lpRewardContract) {
    if (engagementContract) {
      try {
        const gasEstimate = await engagementContract.methods
          .stake(erc20Amount, selectedTime, selectedUserNames)
          .estimateGas({ from: userAddress });

        engagementContract.methods
          .stake(erc20Amount, selectedTime, selectedUserNames)
          .send({ from: userAddress, gas: gasEstimate })
          .on("transactionHash", (hash) => {
            console.log(hash);
          })
          .on("receipt", (receipt) => {
            console.log(receipt);
            toast.success("Stake successful!", {
              position: toast.POSITION.TOP_RIGHT,
            });
          })
          .on("error", (error) => {
            console.log(error);
            const errorMessage = error.message.split("reverted: ")[1];
            toast.error(errorMessage, { position: toast.POSITION.TOP_RIGHT });
          });
      } catch (error) {
        console.log(error);
        const errorMessage = error.message.split("reverted: ")[1];
        toast.error(errorMessage, { position: toast.POSITION.TOP_RIGHT });
      }
    }
  };

  const fetchInformation = useCallback(async () => {
    try {
      // Call the balanceOf() function to get the user's balance
      const balance = await laziTokenContract.methods
        .balanceOf(userAddress)
        .call();
      setUserBalance(balance);
      const totalStakedLazi = await engagementContract.methods
        .totalStakedLazi()
        .call();
      setTotalStakedLazi(totalStakedLazi);
      const totalStakers = await engagementContract.methods.totalUsers().call();
      setTotalStakers(totalStakers);

      const totalStakedDuration = await engagementContract.methods
        .totalStakedDuration()
        .call();
      setTotalStakedDuration(totalStakedDuration);

      const userInfo = await engagementContract.methods
        .users(userAddress)
        .call();
      setUserStakedDuration(userInfo.stakeDuration);
      setUserStakedTokens(userInfo.stakedLazi);
      const userDurationScore =
        (userInfo.stakeDuration / totalStakedDuration) * 100;
      const userStakedScore = (userInfo.stakedLazi / totalStakedLazi) * 100;
      const averageStakedLazi = totalStakedLazi / totalStakers;
      const averageStakedDuration = totalStakedDuration / totalStakers;
      setAvgStakedDuration(averageStakedDuration);
      setAvgStakedLazi(averageStakedLazi);
      setUserStakedScore(userStakedScore);
      setUserDurationScore(userDurationScore);
      // Update the userBalance state variable with the retrieved balance
      console.log("UserBalance", balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  }, [userAddress, laziTokenContract, engagementContract]);

  useEffect(() => {
    if (userAddress && engagementContract && userNameContract) {
      getOwnerMintedUserNames();
      fetchInformation();
    }
  }, [
    userAddress,
    userNameContract,
    engagementContract,
    fetchInformation,
    getOwnerMintedUserNames,
  ]);

  return (
    <>
      <Box className={classes.bannerBox}>
        <Grid container spacing={3}>
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root}>
                <Box className={classes.tooltipIconHeader}>
                  <Typography variant="h2">Start Engagement</Typography>
                  <Tooltip
                    title="This is the Engagement Session."
                    style={{ cursor: "pointer" }}
                    placement={"top"}
                    classes={{ tooltip: classes.tooltip }}
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
                    value={tokenStakeValue}
                    onChange={handleStakeTokenChange}
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#e31a89",
                      color: "#fff",
                      height: 40,
                      fontSize: 14,
                      marginTop: 2,
                    }}
                    onClick={() => setTokenStakeValue(userBalance)}
                  >
                    Max
                  </Button>
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
                </div>
                <Box className={classes.Buttonbox} mt={2}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#e31a89", color: "#fff" }}
                      onClick={handleStake}
                    >
                      Start Now
                    </Button>
                  </Box>
                </Box>
                <br></br>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Box
                className={classes.root}
                height="auto"
                width="auto"
                overflow="auto"
              >
                <div>
                  <Box
                    bgcolor="#EC167F"
                    borderRadius={10}
                    p={2}
                    mb={4}
                    display="flex"
                    alignItems="center"
                  >
                    <Typography
                      variant="h2"
                      className={classes.head}
                      style={{ color: "white" }}
                    >
                      Multiplier
                    </Typography>
                  </Box>

                  <Box
                    bgcolor="#EC167F"
                    borderRadius={10}
                    p={2}
                    mb={4}
                    display="flex"
                    alignItems="center"
                  >
                    <Typography variant="h4" style={{ color: "white" }}>
                      Total Multiplier: {totalMultiplier}x{" "}
                    </Typography>
                  </Box>

                  <Box bgcolor="#EC167F" borderRadius={10} p={2} mb={4}>
                    <Typography variant="h4" style={{ color: "white" }}>
                      Average Stake Duration: {avgStakedDuration} days{" "}
                    </Typography>
                    <Typography variant="h4" style={{ color: "white" }}>
                      Average Staked Lazi: {avgStakedLazi}{" "}
                    </Typography>
                  </Box>
                </div>
              </Box>
              <Paper
                className={classes.root}
                elevation={2}
                style={{ marginTop: "10px" }}
              >
                <Box>
                  <Typography variant="h2" className={classes.head}>
                    Contribution Reward
                  </Typography>
                </Box>

                <div className={classes.containerProgress}>
                  <Box className={classes.progressBar}>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{ fontSize: 12 }}
                    >
                      Contribution Score
                    </Typography>
                    <CustomBar
                      variant="determinate"
                      value={userContributionScore}
                    />
                  </Box>
                  <Box className={classes.progressValue}>
                    <Typography variant="body1">
                      {userContributionScore.toFixed(2)}%
                    </Typography>
                  </Box>
                </div>

                <div className={classes.containerProgress}>
                  <Box className={classes.progressBar}>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{ fontSize: 12 }}
                    >
                      Duration Score
                    </Typography>
                    <CustomBar
                      variant="determinate"
                      value={userDurationScore}
                      onChange={handleDurationScoreChange}
                    />
                  </Box>
                  <Box className={classes.progressValue}>
                    <Typography variant="body1">
                      {userDurationScore.toFixed(2)}%
                    </Typography>
                  </Box>
                </div>
                <div className={classes.containerProgress}>
                  <Box className={classes.progressBar}>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{ fontSize: 12 }}
                    >
                      Staked Lazi Score
                    </Typography>
                    <CustomBar
                      variant="determinate"
                      value={userStakedScore}
                      onChange={handleStakedScoreChange}
                    />
                  </Box>
                  <Box className={classes.progressValue}>
                    <Typography variant="body1">
                      {userStakedScore.toFixed(2)}%
                    </Typography>
                  </Box>
                </div>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default EngageReward;
