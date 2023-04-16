import React, {useState} from "react";
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

  const handleSelectedOptionsChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };
  const isMobile = useMediaQuery('(max-width:600px)');
  const valuetext = (value) => {
    return `${value} LAZI`;
  }

  return (
    <>
      <Box className={classes.bannerBox}>
        <Grid container spacing={3}>
          <Grid item xs={isMobile ? 12 : 6}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root}>
                <Box className={classes.tooltipIconHeader}>
                  <Typography variant="h2">
                    Engage Reward
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
                <Box className={classes.heading}>
                  <Typography variant="h2">
                    Users Stake
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
                  <TextField
                    fullWidth
                    defaultValue={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type "}
                    type="text"
                    variant="outlined"
                    multiline
                    maxRows={10}
                    InputProps={{readOnly: true}}
                  />
                </Box>

              </Box>
            </Paper>
          </Grid>
          <Grid item xs={isMobile ? 12 : 6}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root} height={400} overflow="auto">
                <Box className={classes.heading}>
                  <Typography variant="h2" style={{fontSize: "26px"}}>
                    <u>Total Staking Pool</u>
                  </Typography>
                </Box>
                <br></br>
                <p style={{fontSize: "17px"}}>
                  <b>{"150,000 LAZI"}</b>
                </p>
                <br></br>
                <Box className={classes.heading}>
                  <Typography variant="h2" style={{fontSize: "26px"}}>
                    <u>Your Pool Share</u>
                  </Typography>
                </Box>
                <br></br>
                <p style={{fontSize: "17px"}}>
                  <b>{"15%"}</b>
                </p>
                <Box className={classes.heading}>
                  <Typography variant="h2" style={{fontSize: "26px"}}>
                    <u>Your Rewards</u>
                  </Typography>
                </Box>
                <br></br>
                <p style={{fontSize: "17px"}}>
                  <b>{"500 LAZI"}</b>
                </p>
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

              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default EngageReward;