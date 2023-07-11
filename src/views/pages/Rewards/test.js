import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Checkbox,
} from "@material-ui/core";

import Web3 from "web3";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import ApiConfig from "src/ApiConfig/ApiConfig";
import { toast } from "react-toastify";
import initMetamask from "src/blockchain/metamaskConnection";

import initlaziTokenContract from "src/blockchain/laziTokenContract";
import initUserNameContract from "src/blockchain/laziUserNameContract";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },

  heading: {
    display: "flex",
  },
  head: {
    fontSize: 20,
    fontWeight: 600,
    whiteSpace: "nowrap",
    fontFamily: "Montserrat",
  },
  root: {
    padding: "15px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
}));
const Earn = () => {
  const web3 = new Web3("https://rpc-mumbai.matic.today");
  const classes = useStyles();

  const [userNameContract, setUserNameContract] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [mintedUserNames, setMintedUserNames] = useState([]);
 

  useEffect(() => {
    const initialize = async () => {
      try {
        const { address } = await initMetamask();
        // const engagementStaking = await initEngagementContract();
        const tokenContract = await initlaziTokenContract();
        const contractUserName = await initUserNameContract();
      
        // setEngagementContract(engagementStaking);
        setUserNameContract(contractUserName);
        setUserAddress(address);
      } catch (error) {
        console.error("Contract initialization failed:", error);
      }
    };
    // Call fetchScore() and initialize() sequentially
    fetchScore()
      .then(() => initialize())
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error
      });
  }, []);
 
  const isMobile = useMediaQuery("(max-width:600px)");
  const fetchScore = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: ApiConfig.contributionScore,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      const { dataObject } = response.data; // Access the dataObject property from the response
      const { userScore, totalWeightedContribution, timestamp,  } =
        dataObject;
      // setTotalContribution(totalContribution);
     

 
      console.log(userScore);
      console.log(totalWeightedContribution);
      console.log(timestamp);
   
      toast.success("Contribution score fetched successfully!");
    } catch (error) {
      console.error("Error fetching contribution score:", error.response);

      // Display error toast message
      toast.error("Error fetching contribution score. Please try again.");

      // Handle specific error scenarios
      if (error.response && error.response.status === 401) {
        console.log("Error 401");
      } else {
        console.log("Error Fetching Scores!!!");
      }
    }
  };
  //function to fetch UserNames
  const getOwnerMintedUserNames = useCallback(async () => {
    try {
      const mintedDomains = [];
      // Get the token IDs owned by the connected account
      const tokenIds = await userNameContract.methods
        .tokensOfOwner(userAddress)
        .call();
      console.log("tokenIDs: ", tokenIds);
      for (const tokenId of tokenIds) {
        const mintedDomain = await userNameContract.methods
          .domainNameOf(tokenId)
          .call();
        mintedDomains.push({ domainName: mintedDomain + ".lazi", tokenId });
      }

      setMintedUserNames(mintedDomains);
    } catch (error) {
      console.error(error);
    }
  }, [userAddress, userNameContract]);
  

  useEffect(() => {
    if (userAddress  && userNameContract) {
      getOwnerMintedUserNames();
     
    }
  }, [
    userAddress,
    userNameContract,
    getOwnerMintedUserNames,
  ]);

  return (
    <>
     
     
          <Grid item md={isMobile ? 12 : 6} xs={isMobile ? 12 : 12}>
            <Paper
              className={classes.root}
              elevation={2}
              style={{
                border: "3px solid rgba(236, 22, 127, 0.5) ",
                borderRadius: 10,
              }}
            >
              <Box className={classes.root}>
                <div style={{ display: "flex", marginTop: 20 }}>
                  <div>
                    <Box className={classes.heading}>
                      <Typography variant="h2" className={classes.head}>
                        User Names Stake
                      </Typography>
                    </Box>
                    <br></br>
                    <Box>
                      {mintedUserNames.length === 0 ? (
                        <Typography variant="h5" style={{ fontSize: 14 }}>
                          No User Name minted yet.
                        </Typography>
                      ) : (
                        mintedUserNames.map(({ domainName, tokenId }) => (
                          <Box className={classes.checkbox} key={domainName}>
                            <Typography variant="h5">{domainName}</Typography>
                          </Box>
                        ))
                      )}
                    </Box>
                  </div>
                </div>
              </Box>
              <br></br>
              <Box />
            </Paper>
          </Grid>
     
    </>
  );
};
export default Earn;
