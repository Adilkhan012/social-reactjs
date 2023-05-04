import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import {
  Box,
  Checkbox,
  Grid,
  makeStyles,
  Paper,
  Slider,
  TextField,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import { Tooltip } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import initMetamask from "src/blockchain/metamaskConnection";
import initStakingContract from "src/blockchain/stakingReward";
import { styles } from "@material-ui/pickers/views/Clock/Clock";

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
    backgroundColor: "secondary",
    textAlign: "center",
  },
  sliderThumb: {
    transition: "transform 0.2s ease-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },

  heading: {
    display: "flex",
  },
  toolTipHeader: {
    position: "absolute",
    top: "11.5%",
    left: "47%",
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
const StakeReward = () => {
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [address, setAddress] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [sliderValue, setSliderValue] = useState(20);
  const [stakingContract, setStakingContract] = useState(null);
  const [totalStaked, setTotalStaked] = useState(0);
  const [userRewards, setUserRewards] = useState(0);
  const [selectedUserNames, setSelectedUserNames] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  useEffect(() => {
    const initilize = async () =>{
    const init = async () => {
      const { web3, address } = await initMetamask();
      const contract = await initStakingContract();
      setStakingContract(contract);
      setAddress(address);
      setWeb3(web3);
      // Wait for contract initialization before calling fetch functions
    };
  
    await init();
    fetchUserRewards();
    fetchTotalStaked();
  }
  initilize();
  }, []);

  const monthOptions = [
    { label: "3 months (1.25x)", value: 1 },
    { label: "6 months (1.5x)", value: 2 },
    { label: "1 year (2x)", value: 3 },
    { label: "1.5 year (1.75x)", value: 4 },
    { label: "2 year (3.5x)", value: 5 },
  ];
  const userOptions = [
    { label: "User 1", value: 1 },
    { label: "User 2", value: 2 },
  ];

  const handleCheckboxChange = (event, value) => {
    if (event.target.checked) {
      setSelectedUserNames((prevSelectedUserNames) => [
        ...prevSelectedUserNames,
        value,
      ]);
    } else {
      setSelectedUserNames((prevSelectedUserNames) =>
        prevSelectedUserNames.filter((v) => v !== value)
      );
    }
  };

  const handleSelectedOptionsChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };

  const isMobile = useMediaQuery("(max-width:600px)");
  const valuetext = (value) => {
    return `${value} LAZI`;
  };

  const handleStake = () => {
    const erc20Amount = sliderValue; // Use sliderValue state variable
    // const daysToStake = selectedTime; // Example: 30 days
    const erc721Ids = [1];
    // const erc721Ids = selectedUserNames; // Example: ERC721 token IDs    if (web3 && stakingContract) {
    stakingContract.methods
      .stake(erc20Amount, selectedTime, erc721Ids)
      .send({ from: address })
      .on("transactionHash", (hash) => {
        console.log(hash);
      })
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("error", (error) => {
        console.log(error);
      });
  };
  async function fetchTotalStaked() {
    try {
      if (!stakingContract) {
        await initStakingContract();
      }
      const totalStaked = await stakingContract.totalStaked().call();
      setTotalStaked(totalStaked);
    } catch (error) {
      console.error("Error fetching total staked:", error);
    }
  }
  

  async function fetchUserRewards() {
    try {
      if (!stakingContract) {
        await initStakingContract();
      }
      const userRewardsValue = await stakingContract.methods
        .getUserRewards(address)
        .call();
      setUserRewards(userRewardsValue);
    } catch (error) {
      console.error("Error fetching user rewards:", error);
    }
  }

  const handleUserRewardsClick = async () => {
    fetchUserRewards();
  };
  const handleTotalStakedClick = async () => {
    fetchTotalStaked();
  };
  const handleCollectButtonClick = async () => {
    try {
      // ensure the staking contract instance has been initialized
      if (!stakingContract) {
        await initStakingContract();
      }

      // execute the getReward function in the smart contract
      const tx = await stakingContract.methods
        .harvest()
        .send({ from: address });

      // Wait for the transaction to be confirmed
      const receipt = await tx.wait();

      // Check for errors in the transaction receipt
      if (receipt.status === false) {
        throw new Error(
          `Transaction failed with status code ${receipt.status}`
        );
      }

      // Display a success message to the user
      alert("Rewards collected successfully!");
    } catch (error) {
      // Display an error message to the user
      alert(`Error collecting rewards: ${error.message}`);
    }
  };
  const [state, setState] = useState({
    options: {
      title: {
        text: "chart",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
      },
      tooltip: {
        enabled: true,
        style: {
          fontFamily: "'Montserrat', 'sans-serif'",
        },

        theme: "dark",
      },
      toolbar: {
        foreColor: "#ffff",
        style: {
          color: "black",
        },
      },
      colors: ["#8a8688", "#e31a89"],
      chart: { foreColor: "#e6e5e8", id: "basic-bar" },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [40, 14, 51, 5, 42, 30, 22, 100],
      },
    ],
  });
  useEffect(() => {
    // Access the selected option value whenever it changes
    if (selectedTime) {
      console.log("Selected Option:", selectedTime);
    }
  }, [selectedTime]);
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

    return (
      <b>
        {currentNumber}
        {suffix}
      </b>
    );
  }
  return (
    <>
      <Box className={classes.bannerBox}>
        <Grid container spacing={3}>
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root}>
                <Box className={classes.tooltipIconHeader}>
                  <Typography variant="h2">Stake Reward</Typography>
                  <Tooltip
                    title="This is the stake reward tooltip."
                    style={{ cursor: "pointer" }}
                    placement={"top"}
                  >
                    <InfoIcon fontSize={"medium"} />
                  </Tooltip>
                </Box>

                <br></br>
                <Box mt={2}>
                  <Slider
                    aria-label="Default"
                    onChange={handleSliderChange}
                    value={sliderValue} // Use sliderValue state variable
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
                    sx={{ width: 300 }}
                    options={monthOptions}
                    value={
                      monthOptions.find(
                        (option) => option.value === selectedTime
                      ) || null
                    }
                    getOptionLabel={(option) => option.label}
                    onChange={(event, newValue) =>
                      setSelectedTime(newValue?.value || null)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Month Stake"
                      />
                    )}
                  />
                  <br></br>
                </Box>
                <br></br>
                <div style={{ display: "flex" }}>
                  <div>
                    <Box className={classes.heading}>
                      <Typography variant="h2">Users Stake</Typography>
                    </Box>
                    <br></br>
                    <Box className={classes.checkbox}>
                      <Checkbox
                        checked={selectedUserNames.includes("Adil")}
                        onChange={(event) =>
                          handleCheckboxChange(event, "Adil")
                        }
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
                        checked={selectedUserNames.includes("Muneeb")}
                        onChange={(event) =>
                          handleCheckboxChange(event, "Muneeb")
                        }
                        defaultChecked
                        size="small"
                        inputProps={{
                          "aria-label": "checkbox with small size",
                        }}
                      />
                      <Typography variant="h5">{"Muneeb zubair"}</Typography>
                    </Box>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <Chart
                      options={state.options}
                      series={[23, 45]}
                      type="donut"
                      width="70%"
                    />{" "}
                  </div>
                </div>
                <Box className={classes.Buttonbox} mt={2}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#e31a89", color: "#fff" }}
                      onClick={handleStake}
                    >
                      Stake
                    </Button>
                  </Box>
                </Box>
                <br></br>
                <Box mt={2}>
                  <h3>Text Area</h3>
                  <div
                    style={{
                      border: "1px solid",
                      padding: "10px",
                      borderRadius: "7px",
                    }}
                  >
                    <div class="info">
                      <div class="label">Total Locked:</div>
                      <div class="value">
                        <AnimatedNumber targetNumber={11888888} suffix="CAKE" />
                      </div>
                    </div>
                    <div class="info">
                      <div class="label">Average lock duration:</div>
                      <div class="value">
                        <AnimatedNumber targetNumber={42} suffix="weeks" />
                      </div>
                    </div>
                    <div class="info">
                      <div class="label">Performance fee:</div>
                      <div class="value">
                        <AnimatedNumber targetNumber={0} suffix="" />
                        ~ <AnimatedNumber targetNumber={2} suffix="%" />
                      </div>
                    </div>
                    <a
                      href="https://example.com"
                      style={{
                        fontSize: "20px",
                        marginTop: "15px",
                        color: "#e31a89",
                      }}
                    >
                      {" "}
                      See Token Info
                      <img
                        src="./images/link.png"
                        alt="External Link Icon"
                        style={{ verticalAlign: "middle", width: "25px" }}
                      />
                    </a>
                    <br></br>
                    <a
                      href="https://example.com"
                      style={{
                        fontSize: "20px",
                        marginTop: "15px",
                        color: "#e31a89",
                      }}
                    >
                      {" "}
                      View Tutorial
                      <img
                        src="./images/link.png"
                        alt="External Link Icon"
                        style={{ verticalAlign: "middle", width: "25px" }}
                      />
                    </a>
                    <br></br>
                    <a
                      href="https://example.com"
                      style={{
                        fontSize: "20px",
                        marginTop: "15px",
                        color: "#e31a89",
                      }}
                    >
                      {" "}
                      View Contract
                      <img
                        src="./images/link.png"
                        alt="External Link Icon"
                        style={{ verticalAlign: "middle", width: "25px" }}
                      />
                    </a>
                    <br></br>
                    <Button
                      variant="outlined"
                      style={{ color: "#e31a89", marginTop: "15px" }}
                    >
                      Auto/Locked
                    </Button>
                    <div class="image-container">
                      <img
                        src="./images/info.png"
                        alt="Your image description"
                        style={{
                          verticalAlign: "middle",
                          width: "20px",
                          marginTop: "13px",
                          marginLeft: "10px",
                        }}
                      />
                      <div class="info-text">information</div>
                    </div>
                  </div>
                </Box>
              </Box>
            </Paper>
            <Paper
              className={classes.root}
              elevation={2}
              style={{ marginTop: "10px" }}
            >
              <Chart
                options={state.options}
                series={[23, 45]}
                type="donut"
                width="100%"
              />
            </Paper>
          </Grid>{" "}
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper className={classes.root} elevation={2}>
              <Box className={classes.root} height={400} overflow="auto">
                <div style={{ display: "flex" }}>
                  <Box className={classes.heading}>
                    <Typography variant="h2" style={{ fontSize: "26px" }}>
                      <u>Total Staking Pool</u>
                    </Typography>
                    <Button onClick={handleTotalStakedClick}>Refresh</Button>
                  </Box>
                  <br></br>
                  <p style={{ fontSize: "17px" }}>
                    <b>{totalStaked ? `${totalStaked} LAZI` : ""}</b>
                  </p>
                  <div style={{ marginLeft: "auto" }}>
                    <Chart
                      options={state.options}
                      series={[23, 45]}
                      type="donut"
                      width="70%"
                    />{" "}
                  </div>
                </div>

                <br></br>
                <Box className={classes.heading}>
                  <Typography variant="h2" style={{ fontSize: "26px" }}>
                    <h>Your Pool Share</h>
                  </Typography>
                </Box>
                <br></br>
                <p style={{ fontSize: "17px" }}>
                  <b>
                    {" "}
                    <AnimatedNumber targetNumber={1.93} suffix="%" />
                  </b>
                </p>
                <div style={{ display: "flex" }}>
                  <div>
                    <Box className={classes.heading}>
                      <Typography variant="h2" style={{ fontSize: "26px" }}>
                        <u>Your Rewards</u>
                      </Typography>
                    </Box>
                    <br></br>
                    <p style={{ fontSize: "17px" }}>
                      <b>{`${userRewards} LAZI`}</b>
                    </p>
                    <br></br>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleUserRewardsClick}
                    >
                      Get Your Rewards
                    </Button>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <Chart
                      options={state.options}
                      series={[23, 45]}
                      type="donut"
                      width="70%"
                    />{" "}
                  </div>
                </div>
                <Box className={classes.Buttonbox} mt={2}>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#e31a89", color: "#fff" }}
                      onClick={handleCollectButtonClick}
                    >
                      Collect
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Paper>
            <Paper
              className={classes.root}
              elevation={2}
              style={{ marginTop: "10px" }}
            >
              <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="100%"
              />
            </Paper>
            <Paper
              className={classes.root}
              elevation={2}
              style={{ marginTop: "10px" }}
            >
              <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="100%"
              />
            </Paper>
            <Paper
              className={classes.root}
              elevation={2}
              style={{ marginTop: "10px" }}
            >
              <Chart
                options={state.options}
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
export default StakeReward;
