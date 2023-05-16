import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";
import {Box, Checkbox, Grid, makeStyles, Paper, Slider, TextField, Typography} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import {Tooltip} from '@material-ui/core';
import InfoIcon from "@material-ui/icons/Info";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles((theme) => ({
  checkbox: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  tooltipIconHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  tooltip: {
    backgroundColor: 'secondary',
    textAlign: 'center',
  },
  sliderThumb: {
    transition: 'transform 0.2s ease-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },

  heading: {
    display: "flex",
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
 input:{
  width:"100%"
 }
}));
const EngageReward = () => {
  const classes = useStyles();
  const options = [
    {label: '3 months (1.2x)', id: 1},
    {label: '3 months (1.2x)', id: 2},
  ];
  const userOptions = [
    {label: 'User 1', value: 1},
    {label: 'User 2', value: 2},
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      },
      theme: {
        mode: "dark",
        palette: "palette1",
        monochrome: {
          enabled: true,
          color: "#EC167F"
        }
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })
  const handleSelectedOptionsChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };
  const isMobile = useMediaQuery('(max-width:600px)');
  const valuetext = (value) => {
    return `${value} LAZI`;
  }
  const[state,setState]=useState({
    options: {
      title: {
        text: 'chart',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#fff'
        }
    },
      tooltip: {
        enabled: true,
        style: {
         
          fontFamily: "'Montserrat', 'sans-serif'"
        },

        theme:'dark'
      },
      toolbar: {
        foreColor:'#ffff',
      style:{
        color :'black'
      }},
      colors:["#8a8688","#e31a89"],
      chart: { foreColor: '#e6e5e8',
        id: "basic-bar"
      },
      dataLabels: {
        enabled: false},
        legend: {
          show: false},
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "series-2",
        data: [40, 14, 51, 5, 42, 30, 22, 100]
      }
    ]
  })
  function AnimatedNumber({ targetNumber, suffix }) {
    const [currentNumber, setCurrentNumber] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (currentNumber < targetNumber) {
          setCurrentNumber((prevNumber) => prevNumber + 1);
        }
      }, 5);
  
      return () => clearInterval(interval);
    }, [currentNumber, targetNumber]);
  
    return <b>{currentNumber}{suffix}</b>;
  }
  function AnimatedNumber1({ targetNumber, suffix }) {
    const [currentNumber, setCurrentNumber] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (currentNumber < targetNumber) {
          setCurrentNumber((prevNumber) => prevNumber + 1500);
        }
      }, 1);
  
      return () => clearInterval(interval);
    }, [currentNumber, targetNumber]);
  
    return <b>{currentNumber}{suffix}</b>;
  }

  return (
    <>
      <Box className={classes.bannerBox}>
        <Grid container spacing={3}>
        <Grid item  md={isMobile ? 12 : 6}  xs={isMobile ? 12 : 12} >
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root}>
                <Box className={classes.tooltipIconHeader}>
                  <Typography variant="h2">
                    Engage to Earn
                  </Typography>
                  </Box>
                <Box className={classes.Buttonbox} mt={2}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{backgroundColor: "#e31a89", color: "#fff"}}
                    >
                      Start Now
                    </Button>
                  </Box>
                </Box>

                <br></br>
                
                <Box mt={2}>
                <TextField
                className={classes.input}
  id="duration"
  label="Duration"
  variant="outlined"
  placeholder="number of days"
/>
                  <br></br>
                </Box>
                <br></br>
                <Box mt={2}>
                <TextField
                className={classes.input}
  id="lazi"
  label="Number of Lazi"
  variant="outlined"
  placeholder="number of $LAZI"
/>

                  <br></br>
                </Box>
              
           
                <Box className={classes.Buttonbox} mt={2}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{backgroundColor: "#3C3C3C", color: "#fff"}}
                    >
                      End Session
                    </Button>
                  </Box>
                </Box>
                <br></br>
                
              </Box>
            </Paper>
            <Paper className={classes.root} elevation={2} style={{ marginTop: '10px' }}>
            <Box className={classes.tooltipIconHeader}>
                  <Typography variant="h2">
                    Engagement Mining
                  </Typography>
                  </Box>
            <Box mt={2}>
                <TextField
                className={classes.input}
  id="contribution"
  label="Contribution Score"
  variant="outlined"
  placeholder="contribution score"
/>

                  <br></br>
                </Box>
                <Box mt={2}>
                <TextField
                className={classes.input}
  id="duration-score"
  label="Duration Score"
  variant="outlined"
  placeholder="duration score"
/>

                  <br></br>
                </Box>
                <Box mt={2}>
                <TextField
                className={classes.input}
  id="stake-amount-score"
  label="Stake Amount Score"
  variant="outlined"
  placeholder="stake amount score"
/>

                  <br></br>
                </Box>
                <Box mt={2}>
                <TextField
                className={classes.input}
  id="reward"
  label="Reward for Engagement Mining"
  variant="outlined"
  placeholder="reward for engagement mining"
/>

                  <br></br>
                </Box>
              </Paper>
          </Grid>
          <Grid item md={isMobile ? 12 : 6}  xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root} height={400} overflow="auto">
                <div style={{display:'flex'}}>
               <div>
                <Box className={classes.heading}>
                <Typography variant="h2">
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
                  
            </div></div>
                
                <br></br>
                <div style={{display:'flex'}}>
                  <div>
                {/* <Box className={classes.heading}>
                  <Typography variant="h2" style={{fontSize: "26px"}}>
                    <h>Flexible APY</h>
                  </Typography>
                </Box> */}
          
                <Box className={classes.heading}>
                  <Typography variant="h2" style={{fontSize: "26px"}}>
                    <h>User Rewards</h>
                  </Typography>
                </Box>
                <div className={classes.radialChart}>
                  <p style={{fontSize: "17px"}}>
                    <b> <AnimatedNumber targetNumber={500} suffix="LAZI" /></b>
                  </p>   
                </div>
                <Box className={classes.Buttonbox} mt={2}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{backgroundColor: "#e31a89", color: "#fff"}}
                    >
                      Collect
                    </Button>
                  </Box>
                </Box>          
            </div>
            <div
                  style={{marginLeft:'auto'}}>
                  <Chart
              options={state.options}
              series={[23,45]}
              type="donut"
              width="70%"

            />
            </div></div>
            </Box>
            </Paper>
            
            <Paper className={classes.root} elevation={2} style={{ marginTop: '10px'}}>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="100%"
            />
              </Paper>
              <Paper className={classes.root} elevation={2} style={{ marginTop: '10px' }}>
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="100%"
            />
              </Paper>
              <Paper className={classes.root} elevation={2} style={{ marginTop: '10px' }}>
            <Chart
              options={{ ...state.options, title: { text: "Chart 1" } }}
              series={state.series}
              type="line"
              width="100%"
            />
              </Paper>
             
         
       
        </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default EngageReward;