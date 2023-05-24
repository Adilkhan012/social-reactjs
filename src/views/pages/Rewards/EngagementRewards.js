import React, { useState, useEffect } from "react";
import {
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
  tooltipSetting: {
    fontSize: "20px",
  },
}));
const EngageReward = () => {
  const classes = useStyles();

  const [yesterdayRewards, setYesterdayRewards] = useState("$5000");
  const [totalRewards, setTotalRewards] = useState("$10000");
  const [sessionLength, setSessionLength] = useState("30 days");
  const [showPopUp, setShowPopUp] = useState(false);

  const handlePopUp = () => {
    setTimeout(() => {
      setShowPopUp(true);
    }, 3000);
  };

  const handleYesterdayRewards = (e) => {
    setYesterdayRewards(e.target.value);
  };
  const handleTotalRewards = (e) => {
    setTotalRewards(e.target.value);
  };
  const handleSessionLength = (e) => {
    setSessionLength(e.target.value);
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
                      style={{
                        fontSize: "12px",
                        marginBottom: 2,
                        whiteSpace: "nowrap",
                      }}
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
                    <Box style={{ marginTop: -4 }}>
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

                <Box
                  style={{
                    display: "flex",
                    marginTop: 12,
                    justifyContent: "center",
                  }}
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
                      End Session Now
                    </Button>
                  </Box>
                  <Box mt={2} ml={1}>
                    <Tooltip
                      title="You might incur penalties if you end session before your selected duration"
                      style={{ cursor: "pointer", fontWeight: "bold" }}
                      placement={"bottom-end"}
                      className={classes.tooltipSetting}
                    >
                      <InfoIcon />
                    </Tooltip>
                  </Box>
                </Box>

                <br></br>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default EngageReward;
