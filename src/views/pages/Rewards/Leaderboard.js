import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  makeStyles,
  Typography,
  withStyles,
  LinearProgress,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import StarsIcon from "@mui/icons-material/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
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
  text: {
    fontSize: 12,
  },
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 1,
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      gap: theme.spacing(2),
    },
  },
  sliderValue: {
    fontSize: 14,
    marginLeft: 14,
    marginTop: 5,
  },
  containerProgress: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  progressBar: {
    flex: 1, // Allow the progress bar to expand and take up remaining space
    width: "100%", // Set the width to 100%
    marginBottom: "auto",
  },
  circleImage: {
    height: "3vw", // Set the height to a percentage of the viewport width
    width: "3vw", // Set the width to a percentage of the viewport width
    background: "#E75AA6",
    marginTop: "-6px",
    borderRadius: "50%",
    marginRight: 10,
    [theme.breakpoints.down(600)]: {
      height: "5vw", // Set the height to a percentage of the viewport width
      width: "5vw", // Set the width to a percentage of the viewport width
      marginTop: "-3px",
      marginRight: 4,
    },
  },

  profilePic: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },

  progressValue: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
    fontWeight: "bold",
  },
  containerheader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 15,
    gap: theme.spacing(2), // Adjust the gap as desired
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  circle: {
    height: "130px",
    width: "130px",
    margin: 0,
    borderRadius: "50%",
    [theme.breakpoints.down(780)]: {
      height: "80px",
      width: "80px",
    },
    [theme.breakpoints.down(600)]: {
      height: "50px",
      width: "50px",
    },
  },

  centerCircle: {
    height: "200px",
    width: "200px",
    [theme.breakpoints.down(780)]: {
      height: "100px",
      width: "100px",
    },
  },
  crownIcon: {
    fontSize: "4rem",
    marginBottom: "50px",
    color: "#FFD700",
    [theme.breakpoints.down(780)]: {
      fontSize: "3rem",
      marginBottom: "25px",
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "2rem",
      marginBottom: "10px",
    },
    // for icons showing the numbers
    topperboard: {},
  },
  dropdown: {
    marginTop: 10,
    marginBottom: theme.spacing(2),
    marginLeft: "30px",

    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginBottom: theme.spacing(0.5), // Adjust marginBottom for smaller screens
      marginLeft: "10px",
    },
  },

  button: {
    marginTop: 10,
    marginBottom: theme.spacing(2), // Add marginBottom for small distance
    marginLeft: "50px",

    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginBottom: theme.spacing(0.5), // Adjust marginBottom for smaller screens
      marginLeft: "20px",
    },
  },
}));

function Leaderboard() {
  const classes = useStyles();
  const [userRankings, setUserRankings] = useState([]);
  const [value1, setValue1] = useState(0);
  const handleValueChange = (event, newValue) => {
    setValue1(newValue);
  };
  const fetchUserRankings = async () => {
    try {
      const response = await axios.get(ApiConfig.userRanking);

      const userRankingsData = response.data;
      setUserRankings(userRankingsData);
      console.log(userRankingsData);
      toast.success("User rankings fetched successfully!");
    } catch (error) {
      console.error("Error fetching user rankings:", error.response);

      // Display error toast message
      toast.error("Error fetching user rankings. Please try again.");

      // Handle specific error scenarios
      if (error.response && error.response.status === 401) {
        console.log("Error 401");
      } else {
        console.log("Error Fetching User Rankings!!!");
      }
    }
  };

  useEffect(() => {
    fetchUserRankings();
  }, []);

  // const handleDropdownChange = (event) => {
  //   // Handle dropdown value change here
  // };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box style={{ marginBottom: 50 }}>
        <Typography variant="h2">Leaderboard</Typography>
      </Box>

      <div>
          <Box className={classes.containerheader}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: isMobile ? -10 : -8,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <ArrowDropDownCircleIcon />
              </div>
              <Box
                className={`${classes.circle}`}
                style={{
                  backgroundColor: "yellow",
                  border: "2px solid #79D845",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  height: isMobile ? 3 : 6,
                  top: isMobile ? "95%" : "95%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  background: "#79D845",
                  border: "2px solid black",
                  width: isMobile ? "3%" : "5%",
                  padding: 10,
                }}
              >
                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: "black",
                    fontSize: isMobile ? 10 : 14,
                    fontWeight: "bold",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  2
                </Typography>

                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: "white",
                    fontSize: isMobile ? 10 : 14,
                    fontWeight: "bold",
                    position: "absolute",
                    whiteSpace: "nowrap",
                    top: "170%",
                    left: "-84%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {/* {userRankings[2].userName} */}
                </Typography>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: isMobile ? -10 : -8,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className={classes.crownIcon}>
                  <FontAwesomeIcon icon={faCrown} />
                </div>
              </div>

              <Box
                className={`${classes.circle} ${classes.centerCircle}`}
                style={{ backgroundColor: "pink", border: "3px solid #FCF838" }}
              />
              <div
                style={{
                  position: "absolute",
                  height: 6,
                  top: isMobile ? "98%" : "97%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  background: "#FCF838",
                  border: "2px solid black",
                  width: isMobile ? "6%" : "5%",
                  padding: 10,
                }}
              >
                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: "black",
                    fontSize: isMobile ? 10 : 14,
                    fontWeight: "bold",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  1
                </Typography>

                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: "white",
                    fontSize: isMobile ? 10 : 14,
                    fontWeight: "bold",
                    position: "absolute",
                    whiteSpace: "nowrap",
                    top: "170%",
                    left: "-84%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {/* {userRankings[1].userName} */}
                </Typography>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: isMobile ? -10 : -8,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <ArrowDropDownCircleIcon />
              </div>
              <Box
                className={`${classes.circle}`}
                style={{
                  backgroundColor: "#79D845",
                  border: "2px solid #E75AA6",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  height: isMobile ? 6 : 6,
                  top: isMobile ? "94%" : "95%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  background: "#E75AA6",
                  border: "2px solid black",
                  width: isMobile ? "9%" : "5%",
                  padding: 10,
                }}
              >
                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: "black",
                    fontSize: isMobile ? 10 : 14,
                    fontWeight: "bold",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  3
                </Typography>
                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: "white",
                    fontSize: isMobile ? 10 : 14,
                    fontWeight: "bold",
                    position: "absolute",
                    whiteSpace: "nowrap",
                    top: "170%",
                    left: "-84%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {/* {userRankings[3].userName} */}
                </Typography>
              </div>
            </div>
          </Box>
      </div>

      <hr style={{ opacity: 0.3 }}></hr>

      <div>
        {userRankings.map((user, index) => (
          <React.Fragment key={user.id}>
            <Box className={classes.container}>
              {/* Image section */}
              <Box
                className={classes.circleImage}
                style={{ backgroundImage: `url(${user.profilePic})` }}
              ></Box>
              {/* Slider */}
              <Box className={classes.progressBar}>
                <Typography
                  variant="h6"
                  component="h2"
                  style={{ fontSize: 12, marginBottom: isMobile ? 2 : 4 }}
                >
                  {user.userName}
                </Typography>
                <CustomBar
                  variant="determinate"
                  value={user.userContributionScore}
                  onChange={handleValueChange}
                />
              </Box>
              <Box mb={1} ml={2}>
                <Typography variant="body1" style={{ fontSize: 12 }}>
                  {user.userContributionScore}
                </Typography>
              </Box>
              {/* Dropdown */}

              {/* Button */}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                {index === 0
                  ? "1st"
                  : index === 1
                  ? "2nd"
                  : index === 2
                  ? "3rd"
                  : `${index + 1}th`}
              </Button>
            </Box>
            {index !== userRankings.length - 1 && (
              <hr style={{ opacity: 0.3 }}></hr>
            )}
          </React.Fragment>
        ))}
      </div>
      <hr style={{ opacity: 0.3 }}></hr>
    </>
  );
}

export default Leaderboard;
