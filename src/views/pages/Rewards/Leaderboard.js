import React, { useState } from "react";
import {
  Box,
  Button,
  makeStyles,
  Slider,
  Typography,
  withStyles,
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
}));

function MyComponent() {
  const classes = useStyles();
  const [sliderValue1, setSliderValue1] = useState('10000'); 
  const [sliderValue2, setSliderValue2] = useState('30000');
  const [sliderValue3, setSliderValue3] = useState('30000');
  const [sliderValue4, setSliderValue4] = useState('1000');
  const [sliderValue5, setSliderValue5] = useState('2000');
  const [sliderValue6, setSliderValue6] = useState('4000');
  const [sliderValue7, setSliderValue7] = useState('5000');
  const [sliderValue8, setSliderValue8] = useState('8000');
  const [sliderValue9, setSliderValue9] = useState('9000');
  const [sliderValue10, setSliderValue10] = useState('6000');
  const [sliderValue11, setSliderValue11] = useState('10000'); 
  const [sliderValue12, setSliderValue12] = useState('30000');
  const [sliderValue13, setSliderValue13] = useState('30000');
  const [sliderValue14, setSliderValue14] = useState('1000');
  const [sliderValue15, setSliderValue15] = useState('2000');
  const [sliderValue16, setSliderValue16] = useState('4000');
  const [sliderValue17, setSliderValue17] = useState('5000');
  const [sliderValue18, setSliderValue18] = useState('8000');
  const [sliderValue19, setSliderValue19] = useState('9000');
  const [sliderValue20, setSliderValue20] = useState('6000');
  const [sliderValue21, setSliderValue21] = useState('10000'); 
  const [sliderValue22, setSliderValue22] = useState('30000');
  const [sliderValue23, setSliderValue23] = useState('30000');
  const [sliderValue24, setSliderValue24] = useState('1000');
  const [sliderValue25, setSliderValue25] = useState('2000');
  const [sliderValue26, setSliderValue26] = useState('4000');
  const [sliderValue27, setSliderValue27] = useState('5000');
  const [sliderValue28, setSliderValue28] = useState('8000');
  const [sliderValue29, setSliderValue29] = useState('9000');
  const [sliderValue30, setSliderValue30] = useState('6000');

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
  const handleSliderChange5 = (event, newValue) => {
    setSliderValue5(newValue); // Update the slider value when it changes
  };

  const handleSliderChange6 = (event, newValue) => {
    setSliderValue6(newValue); // Update the slider value when it changes
  };

  const handleSliderChange7 = (event, newValue) => {
    setSliderValue7(newValue); // Update the slider value when it changes
  };

  const handleSliderChange8 = (event, newValue) => {
    setSliderValue8(newValue); // Update the slider value when it changes
  };

  const handleSliderChange9 = (event, newValue) => {
    setSliderValue9(newValue); // Update the slider value when it changes
  };

  const handleSliderChange10 = (event, newValue) => {
    setSliderValue10(newValue); // Update the slider value when it changes
  };
  const handleSliderChange11 = (event, newValue) => {
    setSliderValue11(newValue); // Update the slider value when it changes
  };
  const handleSliderChange12 = (event, newValue) => {
    setSliderValue12(newValue); // Update the slider value when it changes
  };
  const handleSliderChange13 = (event, newValue) => {
    setSliderValue13(newValue); // Update the slider value when it changes
  };
  const handleSliderChange14 = (event, newValue) => {
    setSliderValue14(newValue); // Update the slider value when it changes
  };
  const handleSliderChange15 = (event, newValue) => {
    setSliderValue15(newValue); // Update the slider value when it changes
  };
  const handleSliderChange16 = (event, newValue) => {
    setSliderValue16(newValue); // Update the slider value when it changes
  };
  const handleSliderChange17 = (event, newValue) => {
    setSliderValue17(newValue); // Update the slider value when it changes
  };
  const handleSliderChange18 = (event, newValue) => {
    setSliderValue18(newValue); // Update the slider value when it changes
  };
  const handleSliderChange19 = (event, newValue) => {
    setSliderValue19(newValue); // Update the slider value when it changes
  };
  const handleSliderChange20 = (event, newValue) => {
    setSliderValue20(newValue); // Update the slider value when it changes
  };
  const handleSliderChange21 = (event, newValue) => {
    setSliderValue21(newValue); // Update the slider value when it changes
  };
  const handleSliderChange22 = (event, newValue) => {
    setSliderValue22(newValue); // Update the slider value when it changes
  };
  const handleSliderChange23 = (event, newValue) => {
    setSliderValue23(newValue); // Update the slider value when it changes
  };
  const handleSliderChange24 = (event, newValue) => {
    setSliderValue24(newValue); // Update the slider value when it changes
  };
  const handleSliderChange25 = (event, newValue) => {
    setSliderValue25(newValue); // Update the slider value when it changes
  };
  const handleSliderChange26 = (event, newValue) => {
    setSliderValue26(newValue); // Update the slider value when it changes
  };
  const handleSliderChange27 = (event, newValue) => {
    setSliderValue27(newValue); // Update the slider value when it changes
  };
  const handleSliderChange28 = (event, newValue) => {
    setSliderValue28(newValue); // Update the slider value when it changes
  };
  const handleSliderChange29 = (event, newValue) => {
    setSliderValue29(newValue); // Update the slider value when it changes
  };
  const handleSliderChange30 = (event, newValue) => {
    setSliderValue30(newValue); // Update the slider value when it changes
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
    <Box style={{ display: 'flex', marginBottom: isMobile ? 10 : 20 }}>
      <div style={{ position: 'relative', width: '20%', margin: 'auto' }}>
        <img src="/images/Creators/CreatorProfile.png" alt="user" style={{ width: '100%' }} />
        <div style={{ position: 'absolute', height:isMobile?6:6  , top:isMobile?'87%':'95%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%', background: '#79D845',border:'2px solid black' ,width:isMobile?'13%':"5%", padding: 10 }}>      
            <Typography variant="caption" align="center"  style={{ color: 'black',fontSize:14,fontWeight:'bold',position:'absolute' ,top:'50%' , transform: 'translateY(-50%)'}}>2
            </Typography>
         
        </div>
      </div>
      <div style={{ position: 'relative', width: isMobile ? '30%' : '30%', margin: 'auto' }}>
        <img src="/images/Creators/CreatorProfile.png" alt="user" style={{ width: '100%' }} />
        <div style={{ position: 'absolute', height:isMobile?6:6  , top:isMobile?'87%':'95%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%', background: '#FCF838',border:'2px solid black' ,width:isMobile?'10%':"4%", padding: 10 }}>      
            <Typography variant="caption" align="center"  style={{ color: 'black',fontSize:14,fontWeight:'bold',position:'absolute' ,top:'50%' , transform: 'translateY(-50%)'}}>1
            </Typography>
        
        </div>
      </div>
      <div style={{ position: 'relative', width: isMobile ? '20%' : '20%', margin: 'auto' }}>
        <img src="/images/Creators/CreatorProfile.png" alt="user" style={{ width: '100%' }} />
        <div style={{ position: 'absolute', height:isMobile?6:6  , top:isMobile?'93%':'98%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%', background: '#E75AA6',border:'2px solid black' ,width:isMobile?'9%':"5%", padding: 10 }}>      
            <Typography variant="caption" align="center"  style={{ color: 'black',fontSize:14,fontWeight:'bold',position:'absolute' ,top:'50%' , transform: 'translateY(-50%)'}}>3
            </Typography>
        
        </div>
      </div>
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
        <span className={classes.sliderValue}>{`$${sliderValue1}`}</span>{" "}
        {/* Display the value of the slider here */}
        {/* Dropdown */}
        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 2 : 10,
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
        <span className={classes.sliderValue}>{`$${sliderValue2}`}</span>{" "}
        {/* Display the value of the slider here */}
        {/* Dropdown */}
        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 2 : 10,
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
        <span className={classes.sliderValue}>{`$${sliderValue3}`}</span>{" "}
        {/* Display the value of the slider here */}
        {/* Dropdown */}
        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 2 : 10,
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
        <div style={{ width: "50px", height: "50px", marginTop: 26 }}>
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
        <span className={classes.sliderValue}>{`$${sliderValue4}`}</span>{" "}
        {/* Display the value of the slider here */}
        {/* Dropdown */}
        <Box
          style={{
            marginLeft: isMobile ? 0 : 22,
            marginTop: isMobile ? 2 : 10,
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
            Hamza 
            </Typography>
            <CustomSlider
              className={classes.slider}
              value={sliderValue5} // Use the slider value from state
              onChange={handleSliderChange5} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue5}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          5th

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
              value={sliderValue6} // Use the slider value from state
              onChange={handleSliderChange6} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue6}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          6th

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
            Taha Ali
            </Typography>
            <CustomSlider
              className={classes.slider}
              value={sliderValue7} // Use the slider value from state
              onChange={handleSliderChange7} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue7}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          7th

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
              value={sliderValue8} // Use the slider value from state
              onChange={handleSliderChange8} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue8}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          8th

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
              value={sliderValue9} // Use the slider value from state
              onChange={handleSliderChange9} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue9}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          9th

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
              value={sliderValue10} // Use the slider value from state
              onChange={handleSliderChange10} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue10}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          10th

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
              value={sliderValue11} // Use the slider value from state
              onChange={handleSliderChange11} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue11}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          11th

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
              value={sliderValue12} // Use the slider value from state
              onChange={handleSliderChange12} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue12}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          12th

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
            Abcd
            </Typography>
            <CustomSlider
              className={classes.slider}
              value={sliderValue13} // Use the slider value from state
              onChange={handleSliderChange13} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue13}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          13th

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
              value={sliderValue14} // Use the slider value from state
              onChange={handleSliderChange14} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue14}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          14th

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
              value={sliderValue15} // Use the slider value from state
              onChange={handleSliderChange15} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue15}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          15th

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
              value={sliderValue16} // Use the slider value from state
              onChange={handleSliderChange16} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue16}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          16th

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
              value={sliderValue17} // Use the slider value from state
              onChange={handleSliderChange17} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue17}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          17th

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
              value={sliderValue18} // Use the slider value from state
              onChange={handleSliderChange18} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue18}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          18th

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
              value={sliderValue19} // Use the slider value from state
              onChange={handleSliderChange19} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue19}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          19th

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
              value={sliderValue20} // Use the slider value from state
              onChange={handleSliderChange20} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue20}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          20th

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
              value={sliderValue21} // Use the slider value from state
              onChange={handleSliderChange21} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue21}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          21th

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
              value={sliderValue22} // Use the slider value from state
              onChange={handleSliderChange22} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue22}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          22th

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
              value={sliderValue23} // Use the slider value from state
              onChange={handleSliderChange23} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue23}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          23th

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
              value={sliderValue24} // Use the slider value from state
              onChange={handleSliderChange24} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue24}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          24th

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
              value={sliderValue25} // Use the slider value from state
              onChange={handleSliderChange25} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue25}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          25th

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
              value={sliderValue26} // Use the slider value from state
              onChange={handleSliderChange26} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue26}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          26th

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
              value={sliderValue27} // Use the slider value from state
              onChange={handleSliderChange27} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue27}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          27th

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
              value={sliderValue28} // Use the slider value from state
              onChange={handleSliderChange28} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue28}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          28th

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
              value={sliderValue29} // Use the slider value from state
              onChange={handleSliderChange29} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue29}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          29th

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
              value={sliderValue30} // Use the slider value from state
              onChange={handleSliderChange30} // Update the state when the slider changes
              min={0}
              max={10000}
              step={1}
              valueLabelDisplay="auto"
            />
          </div>
        </form>

        {/* Slider value */}
        <span className={classes.sliderValue}>{`$${sliderValue30}`}</span> {/* Display the value of the slider here */}

        {/* Dropdown */}
       
         <Box style={{ marginLeft: isMobile ? 0 : 22 ,marginTop:isMobile?2:10}}>
           <ArrowDropDownCircleIcon />
         </Box>
         

        {/* Button */}
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }}>
          30th

        </Button>
      </Box>
      <hr style={{opacity:0.3}}></hr>




   



      




      



    </>
  );
}

export default MyComponent;
