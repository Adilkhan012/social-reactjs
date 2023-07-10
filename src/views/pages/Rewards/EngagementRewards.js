import React, { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  Box,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
  withStyles,
  LinearProgress,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Tooltip } from "@material-ui/core";
import InfoIcon from "@mui/icons-material/Info";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import initMetamask from "src/blockchain/metamaskConnection";
import initEngagementContract from "src/blockchain/engagementContract";
import initlaziTokenContract from "src/blockchain/laziTokenContract";
import initUserNameContract from "src/blockchain/laziUserNameContract";
import ApiConfig from "src/ApiConfig/ApiConfig";
import axios from "axios";
import { toast } from "react-toastify";
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
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: theme.spacing(2),
  },
  heading: {
    display: "flex",
  },
  head: {
    padding: "0px 0px 0px 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "90px 0",
    },
    "& label": {
      color: "#e8aa3e",
      fontSize: "14px",
    },
  },
  header: {
    fontSize: 14,
    fontWeight: 600,
    whiteSpace: "nowrap",
    fontFamily: "Montserrat",
  },
  tooltip: {
    backgroundColor: "secondary",
    textAlign: "center",
    fontSize: "14px",
  },
  tooltipIconHeader: {
    display: "flex",
    alignItems: "center",
    marginTop: 2,
    marginBottom: theme.spacing(1),
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
    width: "100%", // Adjust the width as per your requirement
    margin: "0 auto",
  },
  root: {
    padding: "15px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
  containerProgress: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // minHeight: "100vh",
  },
  progressBar: {
    width: 400,
    height: 7,
    padding: theme.spacing(2),
  },
  progressValue: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
    fontWeight: "bold",
  },

  "@keyframes shining": {
    "0%": {
      transform: "translateX(-150%) skewX(-45deg)",
    },
    "100%": {
      transform: "translateX(150%) skewX(-45deg)",
    },
  },
  card: {
    padding: 16,
    marginBottom: 16,
    textAlign: "start",
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: 700,
  },
  infoBox: {
    marginTop: 9,
  },
  infoLabel: {
    marginTop: 9,
    fontSize: 14,
    fontWeight: 600,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "700",
  },
}));
const EngageReward = () => {
  const classes = useStyles();

  const [engagementContract, setEngagementContract] = useState(null);
  const [userNameContract, setUserNameContract] = useState(null);
  const [laziTokenContract, setLaziTokenContract] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [userStakedLaziWeighted, setUserStakedLaziWeighted] = useState(0);
  const [userStakedERC721Ids, setUserStakedERC721Ids] = useState([]);
  const [userStakedStartTime, setUserStakedStartTime] = useState(null);
  const [userStakedDurationWeighted, setUserStakedDurationWeighted] =
    useState(0);
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
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedUserNames, setSelectedUserNames] = useState([]);
  const [userReward, setUserReward] = useState(0);
  const [laziValue, setLaziValue] = useState("");

  const handleLaziChange = (event) => {
    setLaziValue(event.target.value);
  };

  const handleDurationScoreChange = (event, newValue) => {
    setUserDurationScore(newValue);
  };
  const handleStakedScoreChange = (event, newValue) => {
    setUserStakedScore(newValue);
  };

  const calculateTotalMultiplier = () => {
    let multiplier = 1;

    if (selectedTime) {
      if (selectedTime >= 0 && selectedTime < 90) {
        multiplier += 0;
      } else if (selectedTime >= 90 && selectedTime < 180) {
        multiplier += 0.25;
      } else if (selectedTime >= 180 && selectedTime < 270) {
        multiplier += 0.5;
      } else if (selectedTime >= 270 && selectedTime < 360) {
        multiplier += 1;
      } else if (selectedTime >= 360 && selectedTime < 450) {
        multiplier += 1.5;
      } else if (selectedTime >= 450) {
        multiplier += 2;
      }
    }

    multiplier += 0.25 * selectedUserNames.length;
    return multiplier;
  };
  // done till there

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

    // Call fetchScore() and initialize() sequentially
    fetchScore()
      .then(() => initialize())
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error
      });
  }, []);

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
      const userReward = await engagementContract.methods
        .getUserRewards(userAddress, userContributionScore, 100)
        .call();
      const etherValueUserReward = parseInt(userReward) / 10 ** 18;

      setUserReward(etherValueUserReward);
      console.log(
        "userScore: ",
        userContributionScore,
        "userReward: ",
        userReward
      );

      const userInfo = await engagementContract.methods
        .users(userAddress)
        .call();
      setUserStakedDuration(userInfo.stakeDuration);
      setUserStakedTokens(userInfo.stakedLazi);
      setUserStakedLaziWeighted(userInfo.stakedLaziWeighted);
      if (userInfo.stakedLazi === 0) {
        setUserStakedStartTime(0);
      } else {
        const startTimestamp = Number(userInfo.stakeStartTime) * 1000; // Convert to milliseconds
        const startDate = new Date(startTimestamp); // Create a Date object from the timestamp

        const formattedStartTime = startDate.toLocaleString("en-US", {
          dateStyle: "medium",
          timeStyle: "medium",
        });

        setUserStakedStartTime(formattedStartTime);
      }

      setUserStakedDurationWeighted(userInfo.stakeDurationWeighted);
      setUserStakedERC721Ids(userInfo.erc721TokenIds);

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
  }, [
    userAddress,
    laziTokenContract,
    engagementContract,
    userContributionScore,
  ]);

  const handleAddLaziMint = async () => {
    try {
      if (!laziTokenContract ) {
        console.error("Web3 or contract not initialized");
        return;
      }
      
      if (!laziValue ) {
        console.error("Enter Token to mint");
        toast.error("Enter Token to mint");
        return;
      }
      
      // Estimate gas
      const gasEstimate = await laziTokenContract.methods
        .buyTokens()
        .estimateGas({
          from: userAddress,
          value: laziValue, // Modify the value if needed
        });

      console.log("Gas estimate:", gasEstimate);

      // Send transaction
      const result = await laziTokenContract.methods.buyTokens().send({
        from: userAddress,
        value: laziValue, // Modify the value if needed
        gas: gasEstimate,
        maxPriorityFeePerGas: web3.utils.toWei("32","gwei"),
      });

      console.log("Transaction result:", result);
      toast.success("Token purchased success!!!");
      setLaziValue(0);
      // Handle the success result
    } catch (error) {
      console.error("Transaction error:", error);
      let errorMessage = "An error occurred during the transaction.";

      if (error.message) {
        const startIndex = error.message.indexOf(" reverted: ") + 10;
        const endIndex = error.message.indexOf(".", startIndex);
        const Message = error.message.substring(startIndex, endIndex);
        toast.error(Message); // Display toast error message
      }

      toast.error(errorMessage); // Display toast error message
      throw new Error(errorMessage); // Rethrow the error with custom message
    }
  };

  useEffect(() => {
    if (userAddress && engagementContract && userNameContract) {
      fetchInformation();
    }
  }, [userAddress, userNameContract, engagementContract, fetchInformation]);

  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Box className={classes.bannerBox}>
        <Grid container spacing={3}>
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper
              className={classes.root}
              elevation={2}
              style={{
                border: "3px solid rgba(236, 22, 127, 0.5) ",
                borderRadius: 10,
              }}
            >
              <Box>
                <Box className={classes.tooltipIconHeader}>
                  <Typography
                    variant="h2"
                    style={{ fontSize: 20, fontWeight: 700 }}
                  >
                    User Dashboard
                  </Typography>
                  <Tooltip
                    title="This is the Dashboard Session."
                    style={{ cursor: "pointer" }}
                    placement={"top"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <InfoIcon fontSize={"medium"} />
                  </Tooltip>
                </Box>

                <Box className={classes.infoBox}>
                  <Box className={classes.tooltipIconHeader}>
                    <Typography className={classes.infoLabel}>
                      Recent Rewards
                    </Typography>

                    <Tooltip
                      title="Your Reward Since Last Staked"
                      style={{ cursor: "pointer" }}
                      placement={"top"}
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <InfoIcon fontSize={"small"} style={{ marginTop: 4 }} />
                    </Tooltip>
                  </Box>
                  <Typography className={classes.infoValue}>
                    {userReward}
                  </Typography>
                </Box>

                <Box className={classes.infoBox}>
                  <Typography className={classes.infoLabel}>
                    User Balance{" "}
                  </Typography>
                  <Typography className={classes.infoValue}>
                    {userBalance}
                  </Typography>
                </Box>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoLabel}>
                    Total Reward Earned
                  </Typography>
                  <Typography className={classes.infoValue}>
                    {/* {userTotalReward} */} 0
                  </Typography>
                </Box>

                <Box className={classes.infoBox}>
                  <Typography className={classes.infoLabel}>
                    Time Left
                  </Typography>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography className={classes.infoLabel}>0</Typography>
                    <Box style={{ display: "flex" }}></Box>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        backgroundColor: "#e31a89",
                        color: "#fff",
                        // height: 40,
                        paddingInline: 20,
                      }}
                    >
                      Extend
                    </Button>
                  </Box>
                </Box>
                <Box className={classes.infoBox}>
                  <Typography className={classes.infoLabel}>
                    $ Lazi Mint
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <TextField
                      value={laziValue}
                      onChange={handleLaziChange}
                      label="Enter Lazi"
                      variant="outlined"
                      // Add your custom styles here
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        backgroundColor: "#e31a89",
                        color: "#fff",
                        paddingInline: 20,
                      }}
                      onClick={handleAddLaziMint}
                    >
                      Add Lazi
                    </Button>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#e31a89",
                    color: "#fff",
                    fontSize: 14,
                    marginTop: 30,
                    marginLeft: 30,
                    borderRadius: 5,
                    // height: 40,
                    // paddingInline: 30,
                  }}
                >
                  Stop Engagement Session
                </Button>
                {/* <Box mt={2}>
                    <Typography className={classes.label}>
                      User Balance
                    </Typography>
                    <Typography className={classes.value}>
                      {userBalance}
                    </Typography>
                  </Box> */}
                {/* <Box mt={2}>
                    <Typography className={classes.label}>
                      Staked Lazi
                    </Typography>
                    <Typography className={classes.value}>
                      {userStakedTokens}
                    </Typography>
                  </Box> */}

                {/* <Box mt={2}>
                    <Typography className={classes.label}>
                      Staked Lazi (Weighted)
                    </Typography>
                    <Typography className={classes.value}>
                      {userStakedLaziWeighted}
                    </Typography>
                  </Box> */}

                {/* <Box mt={2}>
                    <Typography className={classes.label}>
                      Staked ERC721 IDs
                    </Typography>
                    {!userStakedERC721Ids ||
                    userStakedERC721Ids.length === 0 ? (
                      <Typography className={classes.value}>0</Typography>
                    ) : (
                      userStakedERC721Ids.map((id) => (
                        <Typography key={id} className={classes.value}>
                          {id}
                        </Typography>
                      ))
                    )}
                  </Box> */}

                {/* <Box mt={2}>
                    <Typography className={classes.label}>
                      Staked Start Time
                    </Typography>
                    <Typography className={classes.value}>
                      {userStakedStartTime}
                    </Typography>
                  </Box> */}
                {/* <Box mt={2}>
                    <Typography className={classes.label}>
                      Staked Duration
                    </Typography>
                    <Typography className={classes.value}>
                      {userStakedDuration}
                    </Typography>
                  </Box> */}

                {/* <Box mt={2}>
                    <Typography className={classes.label}>
                      Staked Duration (Weighted)
                    </Typography>
                    <Typography className={classes.value}>
                      {userStakedDurationWeighted}
                    </Typography>
                  </Box> */}
              </Box>
            </Paper>
          </Grid>
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper
              className={classes.root}
              elevation={2}
              style={{
                border: "3px solid rgba(236, 22, 127, 0.5) ",
                borderRadius: 10,
              }}
            >
              <Box
                className={classes.root}
                height="auto"
                width="auto"
                overflow="auto"
              >
                <div>
                  <Box className={classes.tooltipIconHeader}>
                    <Typography
                      variant="h2"
                      style={{ fontSize: 20, fontWeight: 700 }}
                    >
                      Multiplier
                    </Typography>
                    <Tooltip
                      title="This is the Dashboard Session."
                      style={{ cursor: "pointer" }}
                      placement={"top"}
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <InfoIcon fontSize={"medium"} />
                    </Tooltip>
                  </Box>

                  <Box
                    borderRadius={10}
                    p={2}
                    mb={1}
                    mt={3}
                    display="flex"
                    alignItems="center"
                  >
                    <Typography
                      variant="h4"
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "600",
                        // border: "2px solid  #575758 ",
                        paddingInline: 30,
                        paddingBlock: 8,
                        borderRadius: 8,
                      }}
                    >
                      Total Multiplier:{" "}
                      <span
                        style={{
                          backgroundColor: "#EC167F",
                          padding: 3,
                          borderRadius: 3,
                          paddingInline: 9,
                          textAlign: "end",
                        }}
                      >
                        {totalMultiplier}x{" "}
                      </span>
                    </Typography>
                  </Box>
                  <hr></hr>
                  <Box borderRadius={10} p={2}>
                    <Typography
                      variant="h4"
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "600",
                        marginBlock: "5",
                      }}
                    >
                      Average Stake Duration:
                      <span
                        style={{
                          backgroundColor: "#EC167F",
                          // display: "block",
                          paddingBlock: 2,
                          paddingInline: 8,
                          borderRadius: 2,
                          marginBlock: 3,
                          textAlign: "start",
                          marginLeft: 2,
                          marginBottom: 5,
                          // whiteSpace:"nowrap"
                        }}
                      >
                        {avgStakedDuration}{" "}
                      </span>
                    </Typography>
                    <Typography
                      variant="h4"
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "600",
                        marginTop: 20,
                        marginLeft: 5,
                      }}
                    >
                      Average Staked Lazi:
                      <span
                        style={{
                          backgroundColor: "#EC167F",
                          // display: "block",
                          paddingBlock: 2,
                          paddingInline: 8,
                          borderRadius: 2,
                          marginBlock: 3,
                          textAlign: "start",
                          marginLeft: 26,
                          marginBottom: 5,
                          // whiteSpace:"nowrap"
                        }}
                      >
                        {avgStakedLazi}{" "}
                      </span>
                    </Typography>
                  </Box>
                </div>
              </Box>
              <hr></hr>

              <Paper
                className={classes.root}
                elevation={2}
                style={{ marginTop: "10px" }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    style={{ fontSize: 20, fontWeight: 700 }}
                  >
                    Contribution Reward
                  </Typography>
                </Box>

                <div className={classes.containerProgress}>
                  <Box className={classes.progressBar}>
                    <Typography
                      variant="h6"
                      component="h2"
                      style={{ fontSize: 13 }}
                    >
                      Contribution Score
                    </Typography>
                    <CustomBar
                      variant="determinate"
                      value={userContributionScore}
                    />
                  </Box>
                  <Box
                    className={classes.progressValue}
                    style={{
                      marginTop: 35,
                      background: "#EC167F",
                      padding: 6,
                      borderRadius: "2px",
                    }}
                  >
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
                      style={{ fontSize: 13 }}
                    >
                      Duration Score
                    </Typography>
                    <CustomBar
                      variant="determinate"
                      value={userDurationScore}
                      onChange={handleDurationScoreChange}
                    />
                  </Box>
                  <Box
                    className={classes.progressValue}
                    style={{
                      marginTop: 35,
                      background: "#EC167F",
                      padding: 6,
                      paddingInline: 8,
                      borderRadius: "2px",
                    }}
                  >
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
                      style={{ fontSize: 13 }}
                    >
                      Staked Lazi Score
                    </Typography>
                    <CustomBar
                      variant="determinate"
                      value={userStakedScore}
                      onChange={handleStakedScoreChange}
                    />
                  </Box>
                  <Box
                    className={classes.progressValue}
                    style={{
                      marginTop: 35,
                      background: "#EC167F",
                      padding: 6,
                      borderRadius: "2px",
                    }}
                  >
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
