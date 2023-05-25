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

  "@keyframes shining": {
    "0%": {
      transform: "translateX(-150%) skewX(-45deg)",
    },
    "100%": {
      transform: "translateX(150%) skewX(-45deg)",
    },
  },
  card: {
    backgroundColor: "#EC167F",
    borderRadius: 10,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 8,
  },
  value: {
    fontSize: 20,
    fontWeight: 700,
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

      const userInfo = await engagementContract.methods
        .users(userAddress)
        .call();
      setUserStakedDuration(userInfo.stakeDuration);
      setUserStakedTokens(userInfo.stakedLazi);
      setUserStakedLaziWeighted(userInfo.stakedLaziWeighted);
      const startTimestamp = Number(userInfo.stakeStartTime) * 1000; // Convert to milliseconds
      const startDate = new Date(startTimestamp); // Create a Date object from the timestamp

      const formattedStartTime = startDate.toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "medium",
      });

      setUserStakedStartTime(formattedStartTime);
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
  }, [userAddress, laziTokenContract, engagementContract]);

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
            <Paper className={classes.root} elevation={2}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    User Dashboard
                  </Typography>
                  <Box mt={2}>
                    <Typography className={classes.label}>
                      User Balance
                    </Typography>
                    <Typography className={classes.value}>
                      {userBalance}
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography className={classes.label}>
                      Staked Lazi
                    </Typography>
                    <Typography className={classes.value}>
                      {userStakedTokens}
                    </Typography>
                  </Box>

                  <Box mt={2}>
                    <Typography className={classes.label}>
                      Staked Lazi (Weighted)
                    </Typography>
                    <Typography className={classes.value}>
                      {userStakedLaziWeighted}
                    </Typography>
                  </Box>

                  <Box mt={2}>
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
                  </Box>

                  <Box mt={2}>
                    <Typography className={classes.label}>
                      Staked Start Time
                    </Typography>
                    <Typography className={classes.value}>
                      {userStakedStartTime}
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Typography className={classes.label}>
                      Staked Duration
                    </Typography>
                    <Typography className={classes.value}>
                      {userStakedDuration}
                    </Typography>
                  </Box>

                  <Box mt={2}>
                    <Typography className={classes.label}>
                      Staked Duration (Weighted)
                    </Typography>
                    <Typography className={classes.value}>
                      {userStakedDurationWeighted}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Engagement Pool Dashboard
                  </Typography>

                  <Box className={classes.infoBox}>
                    <Typography className={classes.infoLabel}>
                      Total Stakers
                    </Typography>
                    <Typography className={classes.infoValue}>
                      {totalStakers}
                    </Typography>
                  </Box>

                  <Box className={classes.infoBox}>
                    <Typography className={classes.infoLabel}>
                      Average Staked Lazi
                    </Typography>
                    <Typography className={classes.infoValue}>
                      {avgStakedLazi}
                    </Typography>
                  </Box>

                  <Box className={classes.infoBox}>
                    <Typography className={classes.infoLabel}>
                      Average Staked Duration
                    </Typography>
                    <Typography className={classes.infoValue}>
                      {avgStakedDuration}
                    </Typography>
                  </Box>

                  <Box className={classes.infoBox}>
                    <Typography className={classes.infoLabel}>
                      Total Staked Lazi
                    </Typography>
                    <Typography className={classes.infoValue}>
                      {totalStakedLazi}
                    </Typography>
                  </Box>

                  <Box className={classes.infoBox}>
                    <Typography className={classes.infoLabel}>
                      Total Staked Duration
                    </Typography>
                    <Typography className={classes.infoValue}>
                      {totalStakedDuration}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default EngageReward;
