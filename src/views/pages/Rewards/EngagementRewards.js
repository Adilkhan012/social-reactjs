import React, { useState, useEffect } from "react";

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
    width: "100%", // Adjust the width as per your requirement
    margin: "0 auto",
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
        // animation: "$shining 1.5s ease-in-out infinite",
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
}));
const EngageReward = () => {
  const classes = useStyles();

  const [yesterdayRewards, setYesterdayRewards] = useState("$5000");
  const [totalRewards, setTotalRewards] = useState("$10000");
  const [sessionLength, setSessionLength] = useState("30 days");
  const [averageAmount, setAverageAmount] = useState("$10000");
  const [averagaSessionLength, setAverageSessionLength] = useState("21 days");

  const handleYesterdayRewards = (e) => {
    setYesterdayRewards(e.target.value);
  };
  const handleTotalRewards = (e) => {
    setTotalRewards(e.target.value);
  };
  const handleSessionLength = (e) => {
    setSessionLength(e.target.value);
  };
  const handleAverageAmount = (e) => {
    setAverageAmount(e.target.value);
  };
  const handleAverageSessionLength = (e) => {
    setAverageSessionLength(e.target.value);
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box className={classes.bannerBox}>
        <Grid container spacing={3}>
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Box
                className={classes.root}
                height="auto"
                width="auto"
                overflow="auto"
                alignContent={"center"}
              >
                <div style={{ display: "flex" }}>
                  <div>
                    <Box>
                      <Typography variant="h2" className={classes.head}>
                        Engagement Rewards
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
                      Engagement Rewards Yesterday
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={yesterdayRewards}
                      onChange={handleYesterdayRewards}
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
                      Engagement Rewards Total
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={totalRewards}
                      onChange={handleTotalRewards}
                      variant="outlined"
                    />
                  </div>
                  <br></br>
                </Box>

                <Box
                  mt={1}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className={classes.textFieldWrapper}>
                    <Typography
                      variant="body2"
                      className={classes.inputLabel}
                      style={{ fontSize: "12px", marginBottom: 2 }}
                    >
                      Engagement Session Length
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={sessionLength}
                      onChange={handleSessionLength}
                      variant="outlined"
                    />
                  </div>
                  <br></br>
                  <Box
                    className={classes.Buttonbox}
                    marginLeft={2}
                    marginTop={3}
                  >
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
                        Extend
                      </Button>
                    </Box>
                  </Box>
                  <br></br>
                </Box>

                <Box mt={1}>
                  <div className={classes.textFieldWrapper}>
                    <Typography
                      variant="body2"
                      className={classes.inputLabel}
                      style={{ fontSize: "12px", marginBottom: 2 }}
                    >
                      Average Stake Amount
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={averageAmount}
                      onChange={handleAverageAmount}
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
                      Average Session Length
                    </Typography>
                    <TextField
                      className={classes.input}
                      value={averagaSessionLength}
                      onChange={handleAverageSessionLength}
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
