import React, { useState, useEffect } from "react";
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
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ApiConfig from "src/ApiConfig/ApiConfig";
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
  checkboxContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Two columns
    gap: theme.spacing(2), // Gap between items
  },
  checkbox: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
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
  // const [totalContribution, setTotalContribution] = useState(0);
  const [userContribution, setUserContribution] = useState(0);

  const handleSelectedOptionsChange = (e) => {
    setSelectedOptions(e.target.value);
  };
  const handleSelectedDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };
  const handleSelectedContribution = (e) => {
    setSelectedContribution(e.target.value);
  };
  const handleSelectedContribution2 = (e) => {
    setSelectedContribution2(e.target.value);
  };
  const handleSelectedStake = (e) => {
    setSelectedStakeScore(e.target.value);
  };
  const handleSelectedMiningReward = (e) => {
    setSelectedMiningReward(e.target.value);
  };
  const [averageStakeAmount, setAverageStakeAmount] = useState("");
  const handleSelectedUsername = (e) => {
    setSelectedUsername(e.target.value);
  };

  const handleAverageStakeAmount = (e) => {
    setAverageStakeAmount(e.target.value);
  };
  const handleMultiplierValue = (e) => {
    setValueOfFinalMultiplier(e.target.value);
  };
  // Leaderboard

  const handleUserRank = (e) => {
    setUserRank(e.target.value);
  };
  const handleUserScore = (e) => {
    setUserScore(e.target.value);
  };
  const handleWinReward = (e) => {
    setWinReward(e.target.value);
  };
  const handleRemainingDays = (e) => {
    setRemainingDays(e.target.value);
  };

  //Contribution Score
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(40);
  const [value3, setValue3] = useState(70);
  const [value4, setValue4] = useState(90);

  const handleValueChange = (event, newValue) => {
    setValue1(newValue);
  };
  const handleValueChange2 = (event, newValue) => {
    setValue1(newValue);
  };
  const handleValueChange3 = (event, newValue) => {
    setValue1(newValue);
  };
  const handleValueChange4 = (event, newValue) => {
    setValue1(newValue);
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
      setUserContribution(userScore);
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

  useEffect(() => {
    fetchScore();
  }, []);

  return (
    <>
      <Box className={classes.bannerBox}>
        <Grid container spacing={3}>
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root}>
                <Box>
                  <Typography variant="h2" className={classes.head}>
                    Engage to Earn
                  </Typography>
                </Box>
                {/* first screen of engage to earn */}
                {/* <Box className={classes.Buttonbox} mt={2}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#e31a89", color: "#fff" }}
                    >
                      Start Now
                    </Button>
                  </Box>
                </Box> */}

                <br></br>
                {/* second screen engage to earn */}
                <Box>
                  <form className={classes.form}>
                    <div className={classes.textFieldWrapper}>
                      <Typography
                        variant="body1"
                        className={classes.inputLabel}
                        style={{ fontSize: "12px", marginBottom: 2 }}
                      >
                        Duration
                      </Typography>
                      <TextField
                        className={classes.input}
                        value={selectedDuration}
                        onChange={handleSelectedDurationChange}
                        placeholder="number of days"
                        variant="outlined"
                      />
                    </div>
                  </form>
                  <br></br>
                </Box>
                <br></br>
                <Box>
                  <form className={classes.form}>
                    <div className={classes.textFieldWrapper}>
                      <Typography
                        variant="body1"
                        className={classes.inputLabel}
                        style={{ fontSize: "12px", marginBottom: 2 }}
                      >
                        Remaining Days
                      </Typography>
                      <TextField
                        className={classes.input}
                        value={remainingDays}
                        onChange={handleRemainingDays}
                        // placeholder="number of days"
                        variant="outlined"
                      />
                    </div>
                  </form>
                  <br></br>
                </Box>
                <br></br>
                {/* <Box>
                  <form className={classes.form}>
                    <div className={classes.textFieldWrapper}>
                      <Typography
                        variant="body1"
                        className={classes.inputLabel}
                        style={{ fontSize: "12px", marginBottom: 2 }}
                      >
                        Number of Lazi
                      </Typography>
                      <TextField
                        className={classes.input}
                        value={selectedOptions}
                        onChange={handleSelectedOptionsChange}
                        placeholder="number of $LAZI"
                        variant="outlined"
                      />
                    </div>
                  </form>
                  <Box className={classes.Buttonbox} mt={2} style={{display:'flex',justifyContent:'space-between'}}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#e31a89", color: "#fff",height:40, padding:10,fontSize:14 }}
                    >
                    Extend
                    </Button>
                  </Box>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#3C3C3C", color: "#fff",height:40, padding:10,fontSize:14 }}
                    >
                    End Session
                    </Button>
                  </Box>
                </Box> 
                <br></br>
                  <br></br>
                </Box>  */}

                {/* third Screen of Engage Buttons */}
                <Box>
                  <Typography variant="h2" className={classes.header}>
                    Select Stake Username
                  </Typography>
                </Box>
                <Box className={classes.checkboxContainer} mt={4} mb={2}>
                  <div className={classes.checkbox}>
                    <Checkbox
                      defaultChecked
                      size="small"
                      inputProps={{
                        "aria-label": "checkbox with small size",
                      }}
                    />
                    <Typography variant="h5" className={classes.checboxText}>
                      Adil Khan
                    </Typography>
                  </div>

                  <div className={classes.checkbox}>
                    <Checkbox
                      defaultChecked
                      size="small"
                      inputProps={{
                        "aria-label": "checkbox with small size",
                      }}
                    />
                    <Typography variant="h5" className={classes.checboxText}>
                      Muneeb Khan
                    </Typography>
                  </div>

                  <div className={classes.checkbox}>
                    <Checkbox
                      defaultChecked
                      size="small"
                      inputProps={{
                        "aria-label": "checkbox with small size",
                      }}
                    />
                    <Typography variant="h5" className={classes.checboxText}>
                      Ahmad Raza
                    </Typography>
                  </div>

                  <div className={classes.checkbox}>
                    <Checkbox
                      defaultChecked
                      size="small"
                      inputProps={{
                        "aria-label": "checkbox with small size",
                      }}
                    />
                    <Typography variant="h5" className={classes.checboxText}>
                      Fahid Farooq
                    </Typography>
                  </div>
                </Box>
                <Box className={classes.Buttonbox} mt={1}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#e31a89",
                        color: "#fff",
                        height: 40,
                        padding: 10,
                        fontSize: 14,
                      }}
                    >
                      Start New
                    </Button>
                  </Box>
                </Box>
                <br></br>

                {/* start of third screen */}
              </Box>
            </Paper>
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
                  <CustomBar variant="determinate" value={userContribution} />
                </Box>
                <Box className={classes.progressValue}>
                  <Typography variant="body1">100%</Typography>
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
                    value={value2}
                    onChange={handleValueChange2}
                  />
                </Box>
                <Box className={classes.progressValue}>
                  <Typography variant="body1">{value2}%</Typography>
                </Box>
              </div>
              <div className={classes.containerProgress}>
                <Box className={classes.progressBar}>
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ fontSize: 12 }}
                  >
                    Stake Amount Score
                  </Typography>
                  <CustomBar
                    variant="determinate"
                    value={value3}
                    onChange={handleValueChange3}
                  />
                </Box>
                <Box className={classes.progressValue}>
                  <Typography variant="body1">{value3}%</Typography>
                </Box>
              </div>

              <div className={classes.containerProgress}>
                <Box className={classes.progressBar}>
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ fontSize: 12 }}
                  >
                    Stake Amount Score
                  </Typography>
                  <CustomBar
                    variant="determinate"
                    value={value4}
                    onChange={handleValueChange4}
                  />
                </Box>
                <Box className={classes.progressValue}>
                  <Typography variant="body1">{value4}%</Typography>
                </Box>
              </div>
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
                <div style={{ display: "flex" }}>
                  <div>
                    <Box>
                      <Typography variant="h2" className={classes.head}>
                        Multiplier
                      </Typography>
                    </Box>
                    <br></br>
                    <Box className={classes.checkbox}>
                      <Checkbox
                        // checked={true}
                        // onChange={(event) => setCheckedBox(!checkBoxRemember)}
                        defaultChecked
                        size="small"
                        inputProps={{
                          "aria-label": "checkbox with small size",
                        }}
                      />
                      <Typography variant="h5">{"Add a Multiplier"}</Typography>
                    </Box>
                  </div>
                </div>

                <br></br>

                <Box mt={1}>
                  <div className={classes.textFieldWrapper}>
                    <Typography
                      variant="body2"
                      className={classes.inputLabel}
                      style={{ fontSize: "12px", marginBottom: 2 }}
                    >
                      User Name(Max 5)
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={selectedUsername}
                      onChange={handleSelectedUsername}
                      placeholder="Number of Lazi username"
                      variant="outlined"
                    />
                  </div>
                  <br></br>
                </Box>
                <Box mt={1}>
                  <div className={classes.textFieldWrapper}>
                    <Typography
                      variant="body2"
                      className={classes.inputLabel}
                      style={{ fontSize: "12px", marginBottom: 2 }}
                    >
                      Rewards for Contribution
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={averageStakeAmount}
                      onChange={handleAverageStakeAmount}
                      placeholder="(username multiplier)"
                      variant="outlined"
                    />
                  </div>
                  <br></br>
                </Box>

                <Box mt={1}>
                  <div className={classes.textFieldWrapper}>
                    <Typography
                      variant="body2"
                      className={classes.inputLabel}
                      style={{ fontSize: "12px", marginBottom: 2 }}
                    >
                      Final Multiplier Value
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={valueOfFinalMultiplier}
                      onChange={handleMultiplierValue}
                      placeholder="(STU)"
                      variant="outlined"
                    />
                  </div>
                  <br></br>
                </Box>
              </Box>
            </Paper>
            <Paper
              className={classes.root}
              elevation={2}
              style={{ marginTop: "10px" }}
            >
              <Box
                className={classes.root}
                height="auto"
                width="auto"
                overflow="auto"
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <Box>
                      <Typography variant="h2" className={classes.head}>
                        Leaderboard
                      </Typography>
                    </Box>
                    <br></br>
                  </div>
                </div>

                <br></br>

                <Box mt={1}>
                  <div className={classes.textFieldWrapper}>
                    <Typography
                      variant="body2"
                      className={classes.inputLabel}
                      style={{ fontSize: "12px", marginBottom: 2 }}
                    >
                      User's Rank in the Leaderboard
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={userRank}
                      onChange={handleUserRank}
                      placeholder="User's Rank in the Leaderboard"
                      variant="outlined"
                    />
                  </div>
                  <br></br>
                </Box>
                <Box mt={1}>
                  <div className={classes.textFieldWrapper}>
                    <Typography
                      variant="body2"
                      className={classes.inputLabel}
                      style={{ fontSize: "12px", marginBottom: 2 }}
                    >
                      User's Score for the Day
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={userScore}
                      onChange={handleUserScore}
                      placeholder="User's Score for the Day"
                      variant="outlined"
                    />
                  </div>
                  <br></br>
                </Box>

                <Box mt={1}>
                  <div className={classes.textFieldWrapper}>
                    <Typography
                      variant="body2"
                      className={classes.inputLabel}
                      style={{ fontSize: "12px", marginBottom: 2 }}
                    >
                      Rewards for Winning the Leaderboard
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={winReward}
                      onChange={handleWinReward}
                      placeholder="Rewards for Winning the Leaderboard"
                      variant="outlined"
                    />
                  </div>
                  <br></br>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default EngageReward;
