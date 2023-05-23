import React, { useState } from "react";
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

function MyComponent() {
  const classes = useStyles();

  const [value1, setValue1] = useState(50);
  const [progressValue2, setProgressValue2] = useState(27);
  const [progressValue3, setProgressValue3] = useState(23);
  const [progressValue4, setProgressValue4] = useState(4);
  const [progressValue5, setProgressValue5] = useState(74);
  const [progressValue6, setProgressValue6] = useState(100);
  const [progressValue7, setProgressValue7] = useState(16);
  const [progressValue8, setProgressValue8] = useState(12);
  const [progressValue9, setProgressValue9] = useState(29);
  const [progressValue10, setProgressValue10] = useState(19);
  const [progressValue11, setProgressValue11] = useState(88);
  const [progressValue12, setProgressValue12] = useState(33);
  const [progressValue13, setProgressValue13] = useState(12);
  const [progressValue14, setProgressValue14] = useState(100);
  const [progressValue15, setProgressValue15] = useState(99);
  const [progressValue16, setProgressValue16] = useState(11);
  const [progressValue17, setProgressValue17] = useState(66);
  const [progressValue18, setProgressValue18] = useState(55);
  const [progressValue19, setProgressValue19] = useState(44);
  const [progressValue20, setProgressValue20] = useState(44);
  const [progressValue21, setProgressValue21] = useState(23);
  const [progressValue22, setProgressValue22] = useState(23);
  const [progressValue23, setProgressValue23] = useState(22);
  const [progressValue24, setProgressValue24] = useState(60);
  const [progressValue25, setProgressValue25] = useState(70);
  const [progressValue26, setProgressValue26] = useState(50);
  const [progressValue27, setProgressValue27] = useState(40);
  const [progressValue28, setProgressValue28] = useState(30);
  const [progressValue29, setProgressValue29] = useState(30);
  const [progressValue30, setProgressValue30] = useState(20);
  const handleValueChange = (event, newValue) => {
    setValue1(newValue);
  };

  // const haProgressiderChange1 = (event, newValue) => {
  //   setProgressValue1(newValue); // Update the slider value when it changes
  // };
  const handleProgressChange2 = (event, newValue) => {
    setProgressValue2(newValue); // Update the slider value when it changes
  };
  const handleProgressChange3 = (event, newValue) => {
    setProgressValue3(newValue); // Update the slider value when it changes
  };

  const handleProgressChange4 = (event, newValue) => {
    setProgressValue4(newValue); // Update the slider value when it changes
  };
  const handleProgressChange5 = (event, newValue) => {
    setProgressValue5(newValue); // Update the slider value when it changes
  };

  const handleProgressChange6 = (event, newValue) => {
    setProgressValue6(newValue); // Update the slider value when it changes
  };

  const handleProgressChange7 = (event, newValue) => {
    setProgressValue7(newValue); // Update the slider value when it changes
  };

  const handleProgressChange8 = (event, newValue) => {
    setProgressValue8(newValue); // Update the slider value when it changes
  };

  const handleProgressChange9 = (event, newValue) => {
    setProgressValue9(newValue); // Update the slider value when it changes
  };

  const handleProgressChange10 = (event, newValue) => {
    setProgressValue10(newValue); // Update the slider value when it changes
  };
  const handleProgressChange11 = (event, newValue) => {
    setProgressValue11(newValue); // Update the slider value when it changes
  };
  const handleProgressChange12 = (event, newValue) => {
    setProgressValue12(newValue); // Update the slider value when it changes
  };
  const handleProgressChange13 = (event, newValue) => {
    setProgressValue13(newValue); // Update the slider value when it changes
  };
  const handleProgressChange14 = (event, newValue) => {
    setProgressValue14(newValue); // Update the slider value when it changes
  };
  const handleProgressChange15 = (event, newValue) => {
    setProgressValue15(newValue); // Update the slider value when it changes
  };
  const handleProgressChange16 = (event, newValue) => {
    setProgressValue16(newValue); // Update the slider value when it changes
  };
  const handleProgressChange17 = (event, newValue) => {
    setProgressValue17(newValue); // Update the slider value when it changes
  };
  const handleProgressChange18 = (event, newValue) => {
    setProgressValue18(newValue); // Update the slider value when it changes
  };
  const handleProgressChange19 = (event, newValue) => {
    setProgressValue19(newValue); // Update the slider value when it changes
  };
  const handleProgressChange20 = (event, newValue) => {
    setProgressValue20(newValue); // Update the slider value when it changes
  };
  const handleProgressChange21 = (event, newValue) => {
    setProgressValue21(newValue); // Update the slider value when it changes
  };
  const handleProgressChange22 = (event, newValue) => {
    setProgressValue22(newValue); // Update the slider value when it changes
  };
  const handleProgressChange23 = (event, newValue) => {
    setProgressValue23(newValue); // Update the slider value when it changes
  };
  const handleProgressChange24 = (event, newValue) => {
    setProgressValue24(newValue); // Update the slider value when it changes
  };
  const handleProgressChange25 = (event, newValue) => {
    setProgressValue25(newValue); // Update the slider value when it changes
  };
  const handleProgressChange26 = (event, newValue) => {
    setProgressValue26(newValue); // Update the slider value when it changes
  };
  const handleProgressChange27 = (event, newValue) => {
    setProgressValue27(newValue); // Update the slider value when it changes
  };
  const handleProgressChange28 = (event, newValue) => {
    setProgressValue28(newValue); // Update the slider value when it changes
  };
  const handleProgressChange29 = (event, newValue) => {
    setProgressValue29(newValue); // Update the slider value when it changes
  };
  const handleProgressChange30 = (event, newValue) => {
    setProgressValue30(newValue); // Update the slider value when it changes
  };

  // const handleDropdownChange = (event) => {
  //   // Handle dropdown value change here
  // };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box style={{ marginBottom: 50 }}>
        <Typography variant="h2">Leaderboard</Typography>
      </Box>
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
            style={{ backgroundColor: "yellow", border: "2px solid #79D845" }}
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
              Adil Khan
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
              Muneeb Zubair
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
            style={{ backgroundColor: "#79D845", border: "2px solid #E75AA6" }}
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
              Adil Khan
            </Typography>
          </div>
        </div>
      </Box>

      <Box className={classes.container}>
        {/* Image section */}
        <Box className={classes.circleImage}></Box>
        {/* Slider */}
        <Box className={classes.progressBar}>
          <Typography
            variant="h6"
            component="h2"
            style={{ fontSize: 12, marginBottom: isMobile ? 2 : 4 }}
          >
            Adil Khan
          </Typography>
          <CustomBar
            variant="determinate"
            value={value1}
            onChange={handleValueChange}
          />
        </Box>
        <Box mb={1} ml={2}>
          <Typography variant="body1" style={{ fontSize: 12 }}>
            {value1}%
          </Typography>
        </Box>

        {/* Dropdown */}

        {/* Button */}
        <Button variant="contained" color="primary" className={classes.button}>
          1st
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      {/* 2nd */}

      <Box className={classes.container}>
        {/* Image section */}
        <Box className={classes.circleImage}></Box>
        {/* Slider */}
        <Box className={classes.progressBar}>
          <Typography
            variant="h6"
            component="h2"
            style={{ fontSize: 12, marginBottom: isMobile ? 2 : 4 }}
          >
            Adil Khan
          </Typography>
          <CustomBar
            variant="determinate"
            value={progressValue2}
            onChange={handleProgressChange2}
          />
        </Box>
        <Box mb={1} ml={2}>
          <Typography variant="body1" style={{ fontSize: 12 }}>
            {progressValue2}%
          </Typography>
        </Box>

        {/* Dropdown */}

        {/* Button */}
        <Button variant="contained" color="primary" className={classes.button}>
          2nd
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <Box className={classes.circleImage}></Box>
        {/* Slider */}
        <Box className={classes.progressBar}>
          <Typography
            variant="h6"
            component="h2"
            style={{ fontSize: 12, marginBottom: isMobile ? 2 : 4 }}
          >
            Adil Khan
          </Typography>
          <CustomBar
            variant="determinate"
            value={progressValue3}
            onChange={handleProgressChange3}
          />
        </Box>
        <Box mb={1} ml={2}>
          <Typography variant="body1" style={{ fontSize: 12 }}>
            {progressValue3}%
          </Typography>
        </Box>
        {/* Dropdown */}

        {/* Button */}
        <Button variant="contained" color="primary" className={classes.button}>
          3rd
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <Box className={classes.circleImage}></Box>
        {/* Slider */}
        <Box className={classes.progressBar}>
          <Typography
            variant="h6"
            component="h2"
            style={{ fontSize: 12, marginBottom: isMobile ? 2 : 4 }}
          >
            Adil Khan
          </Typography>
          <CustomBar
            variant="determinate"
            value={progressValue4}
            onChange={handleProgressChange4}
          />
        </Box>
        <Box mb={1} ml={2}>
          <Typography variant="body1" style={{ fontSize: 12 }}>
            {progressValue4}%
          </Typography>
        </Box>

        {/* Dropdown */}

        {/* Button */}
        <Button variant="contained" color="primary" className={classes.button}>
          4th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>
      <Box className={classes.container}>
        {/* Image section */}
        <Box className={classes.circleImage}></Box>
        {/* Slider */}
        <Box className={classes.progressBar}>
          <Typography
            variant="h6"
            component="h2"
            style={{ fontSize: 12, marginBottom: isMobile ? 2 : 4 }}
          >
            Adil Khan
          </Typography>
          <CustomBar
            variant="determinate"
            value={progressValue5}
            onChange={handleProgressChange5}
          />
        </Box>
        <Box mb={1} ml={2}>
          <Typography variant="body1" style={{ fontSize: 12 }}>
            {progressValue5}%
          </Typography>
        </Box>
        {/* Dropdown */}

        {/* Button */}
        <Button variant="contained" color="primary" className={classes.button}>
          1st
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <Box className={classes.circleImage}></Box>
        {/* Slider */}
        <Box className={classes.progressBar}>
          <Typography
            variant="h6"
            component="h2"
            style={{ fontSize: 12, marginBottom: isMobile ? 2 : 4 }}
          >
            Adil Khan
          </Typography>
          <CustomBar
            variant="determinate"
            value={progressValue6}
            onChange={handleProgressChange6}
          />
        </Box>
        <Box mb={1} ml={2}>
          <Typography variant="body1" style={{ fontSize: 12 }}>
            {progressValue6}%
          </Typography>
        </Box>

        {/* Dropdown */}

        {/* Button */}
        <Button variant="contained" color="primary" className={classes.button}>
          6th{" "}
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>
    </>
  );
}

export default MyComponent;
