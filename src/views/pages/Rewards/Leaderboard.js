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
    justifyContent: "center",
    alignItems: "center",
  },
  progressBar: {
    width: "400px", // Default width
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "150px", // Width for extra small screens
    },
    [theme.breakpoints.down("sm")]: {
      width: "200px", // Width for small screens
    },
    [theme.breakpoints.between(600, 700)]: {
      width: "120px", // Width for screen widths between 600 and 700px
    },
    [theme.breakpoints.down(460)]: {
      width: "100px", // Width for screen widths below 400px
    },
    [theme.breakpoints.down(345)]: {
      width: "41px", // Width for screen widths below 400px
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
  circleImage: {
    height: "50px",
    width: "50px",
    marginTop: 24,
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      width: "40px",
      marginTop: 14,
    },
    [theme.breakpoints.down("xs")]: {
      height: "30px",
      width: "30px",
      marginTop: 9,
    },
    [theme.breakpoints.down(400)]: {
      height: "25px",
      width: "25px",
      marginTop: 5,
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
                fontSize: 14,
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
                fontSize: 14,
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
                fontSize: 14,
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
                fontSize: 14,
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
                fontSize: 14,
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
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}

        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={value1}
              onChange={handleValueChange}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{value1}%</Typography>
          </Box>
        </div>
        {/* Dropdown */}
        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>
        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          1st
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              yabla
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue2}
              onChange={handleProgressChange2}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue2}%</Typography>
          </Box>
        </div>
        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>
        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          2nd
        </Button>
      </Box>

      <hr style={{ opacity: 0.3 }}></hr>
      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue3}
              onChange={handleProgressChange3}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue3}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>
        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          3rd
        </Button>
      </Box>

      <hr style={{ opacity: 0.3 }}></hr>
      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue4}
              onChange={handleProgressChange4}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue4}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>
        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          4th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>
      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue5}
              onChange={handleProgressChange5}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue5}%</Typography>
          </Box>
        </div>

        {/* Slider value */}
        {/* Display the value of the slider here */}

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          5th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>
      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue6}
              onChange={handleProgressChange6}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue6}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          6th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue7}
              onChange={handleProgressChange7}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue7}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          7th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue8}
              onChange={handleProgressChange8}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue8}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue10}
              onChange={handleProgressChange10}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{value1}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          9th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue11}
              onChange={handleProgressChange11}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue11}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          10th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue12}
              onChange={handleProgressChange12}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue12}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue13}
              onChange={handleProgressChange13}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue13}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue14}
              onChange={handleProgressChange14}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue14}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue15}
              onChange={handleProgressChange15}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue15}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue16}
              onChange={handleProgressChange16}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue16}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue17}
              onChange={handleProgressChange17}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue17}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue18}
              onChange={handleProgressChange18}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue18}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue19}
              onChange={handleProgressChange19}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue19}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue20}
              onChange={handleProgressChange20}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue20}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue21}
              onChange={handleProgressChange21}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue21}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue22}
              onChange={handleProgressChange22}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue22}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue23}
              onChange={handleProgressChange23}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue23}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue24}
              onChange={handleProgressChange24}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue24}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue25}
              onChange={handleProgressChange25}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue25}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue26}
              onChange={handleProgressChange26}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue26}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue27}
              onChange={handleProgressChange27}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue27}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue28}
              onChange={handleProgressChange28}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue28}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue29}
              onChange={handleProgressChange29}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue29}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue30}
              onChange={handleProgressChange30}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue30}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>

      <Box className={classes.container}>
        {/* Image section */}
        <div
          className={`${classes.circleImage}`}
          style={{ background: "#E75AA6" }}
        ></div>

        {/* Slider */}
        <div className={classes.containerProgress}>
          <Box className={classes.progressBar}>
            <Typography variant="h6" component="h2" style={{ fontSize: 12 }}>
              Adil Khan
            </Typography>
            <CustomBar
              variant="determinate"
              value={progressValue9}
              onChange={handleProgressChange9}
            />
          </Box>
          <Box className={classes.progressValue}>
            <Typography variant="body1">{progressValue9}%</Typography>
          </Box>
        </div>

        {/* Dropdown */}

        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 10 : 12,
          }}
        >
          <ArrowDropDownCircleIcon />
        </Box>

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto" }}
        >
          8th
        </Button>
      </Box>
      <hr style={{ opacity: 0.3 }}></hr>
    </>
  );
}

export default MyComponent;
