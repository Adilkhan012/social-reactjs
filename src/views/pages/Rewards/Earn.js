import React, { useState } from "react";

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

const useStyles = makeStyles((theme) => ({
  checkboxContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
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
  head :{
    fontSize:20,
    fontWeight:600,
   whiteSpace:'nowrap',
   fontFamily:'Montserrat'
  },
  header:{
    fontSize:14,
    fontWeight:600,
    whiteSpace:'nowrap',
    fontFamily:'Montserrat'
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
  checboxText:{
fontSize:14,
whiteSpace:'nowrap'
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
 
}));
const EngageReward = () => {
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  const handleSelectedOptionsChange = (e) => {
    setSelectedOptions(e.target.value);
  };
  const handleSelectedDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  const [selectedContribution, setSelectedContribution] = useState("");
  const [selectedContribution2, setSelectedContribution2] = useState("");
  const [selectedStakeScore, setSelectedStakeScore] = useState("");
  const [selectedMiningReward, setSelectedMiningReward] = useState("");

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
  const [selectedUsername, setSelectedUsername] = useState("");
  const [valueOfT, setValueOfT] = useState("");
  const [valueOfU, setValueOfU] = useState("");
  const [valueOfS, setValueOfS] = useState("");
  const [valueOfFinalMultiplier, setValueOfFinalMultiplier] = useState("");

  const handleSelectedUsername = (e) => {
    setSelectedUsername(e.target.value);
  };
  const handleValueOfT = (e) => {
    setValueOfT(e.target.value);
  };
  const handleValueOfU = (e) => {
    setValueOfU(e.target.value);
  };
  const handleValueOfS = (e) => {
    setValueOfS(e.target.value);
  };
  const handleMultiplierValue = (e) => {
    setValueOfFinalMultiplier(e.target.value);
  };
  // Leaderboard

  const [userRank, setUserRank] = useState("");
  const [userScore, setUserScore] = useState("");
  const [winReward, setWinReward] = useState("");

  const handleUserRank = (e) => {
    setUserRank(e.target.value);
  };
  const handleUserScore = (e) => {
    setUserScore(e.target.value);
  };
  const handleWinReward = (e) => {
    setWinReward(e.target.value);
  };




  const[remainingDays,setRemainingDays]=useState(2)

  const handleRemainingDays=(e)=>{
    setRemainingDays(e.target.value)
  }



  const isMobile = useMediaQuery("(max-width:600px)");

  

  return (
    <>
      <Box className={classes.bannerBox}>
        <Grid container spacing={3}>
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root}>
                <Box >
                  <Typography variant="h2" className={classes.head}>Engage to Earn</Typography>
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
                <Box>
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
                </Box>



{/* third Screen of Engage Buttons */}
                {/*<Box>
                  <Typography variant="h2"  className={classes.header}>Select Stake Username</Typography>
                </Box>
                  <Box className={classes.checkboxContainer} mt={4} mb={2}>
                    <div className={classes.checkbox}>
                      <Checkbox
                        defaultChecked
                        size="small"
                        inputProps={{
                          'aria-label': 'checkbox with small size',
                        }}
                      />
                      <Typography variant="h5" className={classes.checboxText}>Adil Khan</Typography>
                    </div>

                    <div className={classes.checkbox}>
                      <Checkbox
                        defaultChecked
                        size="small"
                        inputProps={{
                          'aria-label': 'checkbox with small size',
                        }}
                      />
                      <Typography variant="h5" className={classes.checboxText}>Muneeb Khan</Typography>
                    </div>

                    <div className={classes.checkbox}>
                      <Checkbox
                        defaultChecked
                        size="small"
                        inputProps={{
                          'aria-label': 'checkbox with small size',
                        }}
                      />
                      <Typography variant="h5" className={classes.checboxText}>Ahmad Raza</Typography>
                    </div>

                    <div className={classes.checkbox}>
                      <Checkbox
                        defaultChecked
                        size="small"
                        inputProps={{
                          'aria-label': 'checkbox with small size',
                        }}
                      />
                      <Typography variant="h5" className={classes.checboxText}>Fahid Farooq</Typography>
                    </div>
                  </Box> */}
                {/* <Box className={classes.Buttonbox} mt={1}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#e31a89", color: "#fff",height:40, padding:10,fontSize:14 }}
                    >
                      Start New
                    </Button>
                  </Box>
                </Box> 
                <br></br> */}

                {/* start of third screen */}
              </Box>
            </Paper>
            <Paper
              className={classes.root}
              elevation={2}
              style={{ marginTop: "10px" }}
            >
              <Box >
                <Typography variant="h2" className={classes.head}>Engagement Mining</Typography>
              </Box>
              <Box mt={2}>
                <form className={classes.form}>
                  <div className={classes.textFieldWrapper}>
                    <Typography
                      variant="body1"
                      className={classes.inputLabel}
                      style={{ fontSize: "12px", marginBottom: 2 }}
                    >
                      Contribution Score
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={selectedContribution}
                      onChange={handleSelectedContribution}
                      placeholder="contribution score"
                      variant="outlined"
                    />
                  </div>
                </form>

                <br></br>
              </Box>
              <Box mt={2}>
                <form className={classes.form}>
                  <div className={classes.textFieldWrapper}>
                    <Typography
                      variant="body1"
                      className={classes.inputLabel}
                      style={{ fontSize: "12px", marginBottom: 2 }}
                    >
                      Duration Score
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={selectedContribution2}
                      onChange={handleSelectedContribution2}
                      placeholder="duration score"
                      variant="outlined"
                    />
                  </div>
                </form>

                <br></br>
              </Box>
              <Box mt={2}>
                <div className={classes.textFieldWrapper}>
                  <Typography
                    variant="body2"
                    className={classes.inputLabel}
                    style={{ fontSize: "12px", marginBottom: 2 }}
                  >
                    Stake Amount Score
                  </Typography>
                  <TextField
                    className={classes.input}
                    value={selectedStakeScore}
                    onChange={handleSelectedStake}
                    placeholder=" Stake Amount Score"
                    variant="outlined"
                  />
                </div>
                <br></br>
              </Box>
              <Box mt={2}>
                <div className={classes.textFieldWrapper}>
                  <Typography
                    variant="body2"
                    className={classes.inputLabel}
                    style={{ fontSize: "12px", marginBottom: 2 }}
                  >
                    Rewards for Engagement Mining
                  </Typography>
                  <TextField
                    className={classes.input}
                    value={selectedMiningReward}
                    onChange={handleSelectedMiningReward}
                    placeholder="Rewards for Engagement Mining"
                    variant="outlined"
                  />
                </div>
                <br></br>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root} height='auto' width='auto' overflow="auto">
                <div style={{ display: "flex" }}>
                  <div>
                    <Box >
                      <Typography variant="h2" className={classes.head}>Multiplier</Typography>
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
                      Value of S
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={valueOfS}
                      onChange={handleValueOfS}
                      placeholder="(max{user's staked $LAZI/mean $LAZI staked, 1})"
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
                      Value of T
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={valueOfT}
                      onChange={handleValueOfT}
                      placeholder="(max{user's stake duration/mean duration of stake,1})"
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
                      Value of U
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={valueOfU}
                      onChange={handleValueOfU}
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
            <Paper className={classes.root} elevation={2}    style={{ marginTop: "10px" }}>
              <Box className={classes.root} height="auto" width='auto' overflow="auto">
                <div style={{ display: "flex" }}>
                  <div>
                    <Box>
                      <Typography variant="h2" className={classes.head}>Leaderboard</Typography>
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
