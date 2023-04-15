import React, {useEffect, useState} from "react";
import {Box, Grid, Link, makeStyles, Paper} from "@material-ui/core";
import {useLocation} from "react-router-dom";
import StakeReward from "../Rewards/StakeReward";
import EngageReward from "../Rewards/EngageReward";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px",
    [theme.breakpoints.down("sm")]: {
      padding: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
    "& .mainbox": {
      backgroundColor: "#101010",
      BiBorderRadius: "5px",
      "& .leftbox": {
        padding: "25px",
        height: "100%",
        [theme.breakpoints.down("xs")]: {
          padding: "0px",
        },
      },
      "& .rightbox": {
        padding: "0px 25px",
        borderLeft: "0.25px solid #242526",
        height: "100%",
        [theme.breakpoints.down("xs")]: {
          padding: "10px",
        },
      },
      "& .buttonBox": {
        borderBottom: "1px solid #242526",
        padding: " 0 15px",
        [theme.breakpoints.down("xs")]: {
          padding: "0 0px",
          margin: "0 10px",
          display: "inline-block",
        },
        "& a": {
          width: "100%",
          cursor: "pointer",
          fontWeight: "600",
          display: "block",
          fontSize: "14px",
          color: "#fff",
          padding: "20px 0",
          [theme.breakpoints.down("xs")]: {
            fontSize: "12px",
          },
          "&:hover": {
            textDecoration: "none",
            color: "#e31a89",
          },
          "&.active": {
            color: "#e31a89",
          },
        },
      },
    },
  },
}));
const Rewards = () => {
  const location = useLocation();
  const classes = useStyles();
  const [tabview, setTabView] = useState("EngageReward");

  useEffect(() => {
    const ids = location.hash.split("#");

    if (ids[1] && ids[1] == "stakeReward") {
      setTabView("StakeReward");
    } else {
      setTabView("EngageReward");
    }
  }, [location]);

  return (
    <>
      <Paper className={classes.root} elevation={2}>
        <Box className="mainbox">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={3}>
              <Box className="leftbox">
                <Box className="buttonBox">
                  <Link
                    className={tabview === "EngageReward" ? "active" : " "}
                    onClick={() => setTabView("EngageReward")}
                  >
                    Engage Reward
                  </Link>
                </Box>

                <Box className="buttonBox">
                  <Link
                    className={tabview === "StakeReward" ? "active" : " "}
                    onClick={() => setTabView("StakeReward")}
                  >
                    Stake Reward
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box className="rightbox">
                <Box py={3}>
                  {tabview === "StakeReward" ? <StakeReward/> : ""}
                  {tabview === "EngageReward" ? <EngageReward/> : ""}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}
export default Rewards;