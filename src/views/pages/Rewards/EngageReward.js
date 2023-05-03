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
  toolTipHeader: {
    position: "absolute",
    top: "11.5%",
    left: "49%"
  },
  radialChart: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    justifyContent: "space-between"
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

  return (
    <>
      <Box className={classes.bannerBox}>
        <Grid container spacing={3}>
        <Grid item  md={isMobile ? 12 : 6}  xs={isMobile ? 12 : 12} >
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root}>
                <Box className={classes.tooltipIconHeader}>
                  <Typography variant="h2">
                    LP Rewards
                  </Typography>
                  <Tooltip title="This is the stake reward tooltip." style={{cursor: "pointer"}} placement={"top"}>
                    <InfoIcon fontSize={"medium"}/>
                  </Tooltip>
                </Box>

                <br></br>
                <Box mt={2}>
                  <Slider
                    aria-label="Default"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    valueLabelFormat={valuetext}
                    step={5}
                    min={10}
                    max={100}
                    classes={{
                      valueLabel: classes.tooltip,
                      thumb: classes.sliderThumb,
                    }}
                    valueLabelDisplay="on"
                    color="secondary"
                  />
                </Box>
                <Box mt={2}>
                  <Autocomplete
                    disablePortal
                    id="tags-standard"
                    sx={{width: 300}}
                    options={options}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => <TextField {...params} variant="outlined" label="Month Stake"/>}

                  />
                  <br></br>
                </Box>
                <br></br>
                <div style={{display:'flex'}}>
                <div>
                <Box className={classes.heading}>
                  <Typography variant="h2">
                    UserNames 
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
                  <Typography variant="h5">{"Adil Kan"}</Typography>
                </Box>
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
                  <Typography variant="h5">{"Muneeb zubair"}</Typography>
                </Box>
                </div>
                <div
                  style={{marginLeft:'auto'}}>
                  <Chart
              options={state.options}
              series={[23,45]}
              type="donut"
              width="70%"

            />  </div>
            </div>
           
                <Box className={classes.Buttonbox} mt={2}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{backgroundColor: "#e31a89", color: "#fff"}}
                    >
                      Engage
                    </Button>
                  </Box>
                </Box>
                <br></br>
                <Box mt={2}>
                  <h3>Text Area</h3>
                  <div style={{border:'1px solid',padding:'10px', borderRadius: '7px'}}>
                  <div class="info">
  <div class="label">Total Locked:</div>
  <div class="value"><AnimatedNumber targetNumber={11888888} suffix="CAKE" /></div>
</div>
<div class="info">
  <div class="label">Average lock duration:</div>
  <div class="value"><AnimatedNumber targetNumber={42} suffix="weeks" /></div>
</div>
<div class="info">
  <div class="label">Performance fee:</div>
  <div class="value"><AnimatedNumber targetNumber={0} suffix="" />
  ~ <AnimatedNumber targetNumber={2} suffix="%" />
  </div>
</div>
                  <a href="https://example.com" style={{fontSize:'20px',marginTop:'15px',color:'#e31a89'}}> See Token Info<img src="./images/link.png" alt="External Link Icon" style={{verticalAlign:'middle',width:'25px'}}/></a>
                  <br></br>
                  <a href="https://example.com" style={{fontSize:'20px',marginTop:'15px',color:'#e31a89'}}> View Tutorial<img src="./images/link.png" alt="External Link Icon" style={{verticalAlign:'middle',width:'25px'}}/></a>
                  <br></br>
                  <a href="https://example.com" style={{fontSize:'20px',marginTop:'15px',color:'#e31a89'}}> View Contract<img src="./images/link.png" alt="External Link Icon" style={{verticalAlign:'middle',width:'25px'}}/></a>
                  <br></br>
                  <Button
                      variant='outlined'
                      style={{ color: "#e31a89",marginTop:'15px'}}
                    >
                     Auto/Locked
                    </Button>
                    <div class="image-container">
  <img src="./images/info.png" alt="Your image description" style={{verticalAlign:'middle', width:'20px',marginTop:'13px', marginLeft:'10px'}}/>
  <div class="info-text">information</div>
</div>
                    </div>
                </Box>
              </Box>
            </Paper>
            <Paper className={classes.root} elevation={2} style={{ marginTop: '10px' }}>
            <Chart
              options={state.options}
              series={[23,45]}
              type="donut"
              width="100%"
            />
              </Paper>
          </Grid>
          <Grid item md={isMobile ? 12 : 6}  xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root} height={400} overflow="auto">
                <div style={{display:'flex'}}>
               <div>
                <Box className={classes.heading}>
                  <Typography variant="h2" style={{fontSize: "26px"}}>
                    <h>Locked APR</h>
                  </Typography>
                
                </Box>
                <br></br>
                <p style={{fontSize: "17px"}}>
                  <b>{"Up to"} <AnimatedNumber targetNumber={41.3} suffix="%" /></b>
                </p></div>
                <div
                  style={{marginLeft:'auto'}}>
                  <Chart
              options={state.options}
              series={[23,45]}
              type="donut"
              width="70%"

            />
            </div></div>
                
                <br></br>
                <div style={{display:'flex'}}>
                  <div>
                <Box className={classes.heading}>
                  <Typography variant="h2" style={{fontSize: "26px"}}>
                    <h>Flexible APY</h>
                  </Typography>
                </Box>
          
                <Box className={classes.heading}>
                  <Typography variant="h2" style={{fontSize: "26px"}}>
                    <h>Total Staked</h>
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