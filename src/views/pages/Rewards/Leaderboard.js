import React, { useState } from "react";
import {
  Box,
  Button,
  makeStyles,
  Slider,
  Typography,
  withStyles
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const CustomSlider = withStyles({
  root: {
    color: "#E71486",
  },
  thumb: {
    backgroundColor: "#E71486",
  },
  track: {
    backgroundColor: "#E71486",
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: 12,
  },
  sliderWrapper: {
    width: "300px", // Adjust the width of the slider wrapper for desktop view
    "@media (max-width: 900px)": {
      width: "100%", // Adjust the width of the slider wrapper for mobile screens
    },
  },
  
  container: {
    width:'100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
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
}));

function MyComponent() {
  const classes = useStyles();
  const [sliderValue1, setSliderValue1] = useState('10000'); 
  const [sliderValue2, setSliderValue2] = useState('30000');
  const [sliderValue3, setSliderValue3] = useState('30000');
  const [sliderValue4, setSliderValue4] = useState('1000');

  const handleSliderChange1 = (event, newValue) => {
    setSliderValue1(newValue); // Update the slider value when it changes
  };
  const handleSliderChange2 = (event, newValue) => {
    setSliderValue2(newValue); // Update the slider value when it changes
  };
  const handleSliderChange3 = (event, newValue) => {
    setSliderValue3(newValue); // Update the slider value when it changes
  };

  const handleSliderChange4 = (event, newValue) => {
    setSliderValue4(newValue); // Update the slider value when it changes
  };

  // const handleDropdownChange = (event) => {
  //   // Handle dropdown value change here
  // };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
    <Box style={{marginBottom:50}}>
                  <Typography variant="h2" >Leaderboard</Typography>
    </Box>

    <Box style={{display:"flex",marginBottom:isMobile?10:20}}> 
   
        <img src="/images/Creators/CreatorProfile.png" alt="user" style={{ width:isMobile?"20%":'20%',margin:'auto'  }} />
        <img src="/images/Creators/CreatorProfile.png" alt="user" style={{ width:isMobile?'30%':'30%',margin:'auto' }} />
        <img src="/images/Creators/CreatorProfile.png" alt="user" style={{ width:isMobile?'20%':'20%',margin:'auto' }} />
    
    </Box>




    <Box className={classes.container}>
        {/* Image section */}
        <div style={{ width: "50px", height: "50px", marginTop: 26 }}>
          <img src={"/images/ifs.png"} alt="user" />
        </div>

        {/* Slider */}
        <form className={classes.form}>
          <div className={classes.sliderWrapper}>
            <Typography variant="body1" className={classes.inputLabel}>
           Adil Khan
            </Typography>
            <CustomSlider
              className={classes.slider}
              value={sliderValue1} // Use the slider value from state
              onChange={handleSliderChange1} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue1}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          1st

        </Button>
      </Box>
      <hr style={{opacity:0.3}}></hr>
    
      <Box className={classes.container}>
        {/* Image section */}
        <div style={{ width: "50px", height: "50px", marginTop: 26 }}>
          <img src={"/images/ifs.png"} alt="user" />
        </div>

        {/* Slider */}
        <form className={classes.form}>
          <div className={classes.sliderWrapper}>
            <Typography variant="body1" className={classes.inputLabel}>
            Muneeb Zubair
            </Typography>
            <CustomSlider
              className={classes.slider}
              value={sliderValue2} // Use the slider value from state
              onChange={handleSliderChange2} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue2}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          2nd

        </Button>
      </Box>
   
      <hr style={{opacity:0.3}}></hr>
      <Box className={classes.container}>
        {/* Image section */}
        <div style={{ width: "50px", height: "50px", marginTop: 26 }}>
          <img src={"/images/ifs.png"} alt="user" />
        </div>

        {/* Slider */}
        <form className={classes.form}>
          <div className={classes.sliderWrapper}>
            <Typography variant="body1" className={classes.inputLabel}>
           Ahmad Raza
            </Typography>
            <CustomSlider
              className={classes.slider}
              value={sliderValue3} // Use the slider value from state
              onChange={handleSliderChange3} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue3}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          3rd

        </Button>
      </Box>

      <hr style={{opacity:0.3}}></hr>
      <Box className={classes.container}>
        {/* Image section */}
        <div style={{ width: "50px", height: "50px", marginTop: 26  }}>
          <img src={"/images/ifs.png"} alt="user" />
        </div>

        {/* Slider */}
        <form className={classes.form}>
          <div className={classes.sliderWrapper}>
            <Typography variant="body1" className={classes.inputLabel}>
            Adil khan
            </Typography>
            <CustomSlider
              className={classes.slider}
              value={sliderValue4} // Use the slider value from state
              onChange={handleSliderChange4} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue4}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          4th

        </Button>
      </Box>
      <hr style={{opacity:0.3}}></hr>


    </>
  );
}

export default MyComponent;
