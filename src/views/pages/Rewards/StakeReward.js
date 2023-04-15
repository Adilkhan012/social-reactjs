import React, {useState} from "react";
import {Box, Checkbox, Grid, makeStyles, Paper, Slider, TextField, Typography} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import {Tooltip} from '@material-ui/core';
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: 'secondary',
    textAlign: 'center',
  },
  heading: {
    display: "flex",
  },
  toolTipHeader: {
    position: "absolute",
    top: "12.5%",
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
      marginRight: "5px",
      minWidth: "106px",
      boxSizing: "border-box",
      fontWeight: "400",
      borderRadius: "10px",
      padding: "11px 16px",
      background: "#242526",
      color: "#9E9E9E",
      fontFamily: "'Montserrat'",
      marginTop: "7px",
      fontSize: "14px",
      "&:hover": {
        background: "#EC167F",
        color: "#fff",
      },
      "&:active": {
        background: "#EC167F",
        color: "#fff",
      },
    },
  },
}));
const StakeReward = () => {
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

  const valuetext = (value) => {
    return `${value} LAZI`;
  }

  return (
    <>
      <Box className={classes.bannerBox}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root}>
                <Box className={classes.heading}>
                  <Typography variant="h2">
                    Stake Reward
                  </Typography>
                </Box>
                <Box mt={2}>
                  <div className={classes.toolTipHeader}>
                    <Tooltip title="This is the stake reward tooltip." style={{cursor: "pointer"}} placement={"top"}>
                      <InfoIcon fontSize={"medium"}/>
                    </Tooltip>
                  </div>
                </Box>
                <br></br>
                <Box mt={2}>
                  <br></br>
                  <Slider
                    aria-label="Default"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    valueLabelFormat={valuetext}
                    step={5}
                    min={10}
                    max={100}
                    classes={{
                      valueLabel: classes.tooltip,
                    }}
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
                  <Autocomplete
                    id="checkboxes-users"
                    options={userOptions}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.label}
                    onChange={handleSelectedOptionsChange}
                    value={selectedOptions}
                    renderOption={(props, option) => (
                      <div {...props}>
                        <Checkbox
                          checked={props.selected}
                          {...props.inputProps}
                        />
                        {userOptions.label}
                      </div>
                    )}
                    renderInput={(params) => (
                      <TextField {...params} variant="outlined" label="Users Stake"/>
                    )}
                  />
                </Box>

                <Box className={classes.Buttonbox} mt={2}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{backgroundColor: "#e31a89", color: "#fff"}}
                    >
                      Stake
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
          <Grid item xs={6}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root}>
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
export default StakeReward;