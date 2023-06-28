import React, { useState, useContext, useEffect, useCallback } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Toolbar,
  makeStyles,
  IconButton,
  Hidden,
  Grid,
  TextField,
  Button,
  Snackbar,
  FormHelperText,
} from "@material-ui/core";
// import { MintedDomainContext } from "@/layouts/HomeLayout/MintedDomainContext";

import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Web3 from "web3";
import SwipeableTemporaryDrawer from "./RightDrawer";
import { GiWallet } from "react-icons/gi";
import Logo from "src/component/Logo";
import { BsChatLeftDots } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { useHistory, useLocation } from "react-router-dom";
import SettingsContext from "src/context/SettingsContext";
import { AuthContext } from "src/context/Auth";
import { UserContext } from "src/context/User";
import SearchBox from "./SearchBox";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import Apiconfigs from "src/ApiConfig/ApiConfig";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import ApiConfig from "src/ApiConfig/ApiConfig";
import { toast } from "react-toastify";
import initMetamask from "src/blockchain/metamaskConnection";
import initEngagementContract from "src/blockchain/engagementContract";
import initlaziTokenContract from "src/blockchain/laziTokenContract";
import initUserNameContract from "src/blockchain/laziUserNameContract";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
  },
  // toolbar: {
  //   height: 70,
  // },
  logo: {
    marginRight: theme.spacing(2),
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    "& + &": {
      marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  desktopDrawer: {
    position: "absolute",
    right: 80,
    top: 30,
    width: 450,
    // background: theme.palette.primary.main,
    height: 450,
    [theme.breakpoints.down("sm")]: {
      width: 300,
      right: 0,
    },
  },
  iconbuttonHeader: {
    display: "flex",
    "& span": {
      // fontSize: "12px",
      // marginTop: "10px",
      "&.active": {
        color: "#e31a89",
      },
    },
  },
  iconbutton: {
    // color: theme.palette.,
    color: "#9F9F9F",
    position: "relative",
    marginRight: "5px",
    // [theme.breakpoints.down("xs")]: {
    //   marginRight: "0px",
    // },
    "& div": {
      height: "5px",
      width: "5px",
      borderRadius: "50%",
      backgroundColor: "#e31a89",
      position: "absolute",
      top: "7px",
      right: "8px",
    },
    // "@media(max-width:679px)": {
    //   display: "none"
    // }
  },
  mainheader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    "& .leftBox": {
      width: "246px",
      [theme.breakpoints.down("md")]: {
        width: "200px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "150px",
      },
      "& img": {
        [theme.breakpoints.down("xs")]: {
          paddingLeft: "0 !important",
        },
      },
    },
    "& .rightBox": {
      width: "calc(100% - 246px)",
      [theme.breakpoints.down("md")]: {
        width: "calc(100% - 200px)",
      },
      [theme.breakpoints.down("xs")]: {
        width: "calc(100% - 150px)",
      },
      "& .menubox": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      },
    },
  },
  searchBox: {
    marginLeft: "10px",
    "& input": {
      background: "#373636",
      borderRadius: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      marginLeft: "0px",
    },
  },
  alert: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    backgroundColor: "#000",
    color: "#fff",
    "& p": {
      marginRight: theme.spacing(2),
    },
  },
  closeButton: {
    marginLeft: "auto",
    color: "#fff",
  },
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} color="default" {...rest}>
      <Toolbar className={classes.toolbar}>
        <TopBarData />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};
TopBar.defaultProps = {
  onMobileNavOpen: () => {},
};

export default TopBar;

export function TopBarData() {
  const auth = useContext(AuthContext);
  //const userId = auth?.userLoggedIn?.userId;
  //console.log("data: ", auth?.userLoggedIn?.userId);
  const location = useLocation();
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const themeSeeting = useContext(SettingsContext);
  const [open, setOpen] = React.useState(false);
  const [message, setmessagee] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [socialLoginEmail, setSocialLoginEmail] = useState();
  const [formData, setFormData] = useState({
    message: "",
    userId: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isLoadingAlert, setIsLoadingAlert] = useState(true);

  // starting changes from  here

  const [userNameContract, setUserNameContract] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [mintedUserNames, setMintedUserNames] = useState([]);

  useEffect(() => {
    const initialize = async () => {
      try {
        const { address } = await initMetamask();
        const contractUserName = await initUserNameContract();
        setUserNameContract(contractUserName);
        setUserAddress(address);
      } catch (error) {
        console.error("Contract initialization failed:", error);
      }
    };

    initialize();
  }, []);

  const isMobile = useMediaQuery("(max-width:600px)");

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
    if (userAddress && userNameContract) {
      getOwnerMintedUserNames().then(() => {
        setIsLoadingAlert(false);
      });
    }
  }, [userAddress, userNameContract, getOwnerMintedUserNames]);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (!isLoadingAlert) {
      // Check if there are no minted usernames
      // Replace with your logic to check if no minted usernames

      setShowAlert(true);
    }
  }, [isLoadingAlert]);

  const _onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const temp = { ...formData, [name]: value };
    setFormData(temp);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeTheme = (type) => {
    themeSeeting.saveSettings({
      theme: type,
    });
  };
  const searchBox = (
    <Box className={classes.searchBox}>
      <SearchBox />
    </Box>
  );

  const userRequest = async () => {
    setIsLoading(true);
    setIsSubmit(true);
    const formData = new FormData();
    formData.append("message", message);
    //formData.append("userId", userId);
    if (message !== "" && message.length < 100) {
      try {
        const res = await axios({
          method: "POST",
          url: Apiconfigs.requestAdminByuser,
          // data: formData,
          data: {
            // email: window.sessionStorage.getItem("email"),
            userId: window.sessionStorage.getItem("userId"),
            message: message,
          },
        });
        if (res.data.responseCode === 200) {
          toast.success(res.data.responseMessage);
          setIsLoading(false);
          setOpen(false);
          setmessagee("");
        }
      } catch (error) {
        toast.error(error?.response?.data?.responseMessage);
        setIsLoading(false);
        setOpen(false);
      }
    }
  };

  const status = localStorage.getItem("status");

  const checkStatus = window.localStorage.getItem("status");

  const alertContent = (
    <Snackbar
      open={showAlert}
      onClose={handleAlertClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      ContentProps={{
        style: {
          backgroundColor: "#000",
          padding: "24px", // Adjust the padding value as per your requirement
          maxWidth: "600px",
        },
      }}
    >
      <Card variant="outlined" className={classes.alert}>
        <CardContent>
          <Typography variant="body1" component="p">
            No NFTs have been minted
          </Typography>
        </CardContent>
        <Link to="/mint">
          <Button
            color="primary"
            variant="contained"
            onClick={() => setShowAlert(false)}
            style={{ backgroundColor: "#e31a89", color: "#fff" }}
          >
            Mint Now
          </Button>
        </Link>
        <IconButton
          aria-label="close"
          color="inherit"
          className={classes.closeButton}
          onClick={handleAlertClose}
        >
          <CloseIcon />
        </IconButton>
      </Card>
    </Snackbar>
  );

  return (
    <>
      <Box style={{ width: "100%" }}>
        <Grid container>
          {mintedUserNames.length === 0 ? alertContent : null}
          <Grid item xs={12}>
            <Box className={classes.mainheader}>
              <Box className="leftBox">
                <Logo
                  width="125"
                  style={{
                    paddingTop: "0px",
                    paddingLeft: "15px",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Box className="rightBox">
                <Grid container alignItems="center">
                  <Hidden xsDown>
                    <Grid item sm={5} md={4}>
                      {searchBox}
                    </Grid>
                  </Hidden>
                  <Grid item xs={12} sm={7} md={8}>
                    <Box className="menubox">
                      {checkStatus !== "ACTIVE" && (
                        <Button
                          color="secondary"
                          size="small"
                          variant="contained"
                          onClick={handleClickOpen}
                        >
                          Unblock
                        </Button>
                      )}
                      &nbsp; &nbsp;
                      <Box className={classes.iconbuttonHeader}>
                        <IconButton>
                          <span
                            style={{
                              fontSize: "14px",
                              marginRight: "5px",
                              marginTop: "5px",
                            }}
                            className={
                              location?.pathname === "/chat-history"
                                ? "active"
                                : ""
                            }
                            onClick={() => {
                              history.push("/chat-history");
                            }}
                          >
                            <BsChatLeftDots size={18} />
                            {auth?.unreadChats > 0 && <Box></Box>}
                          </span>
                        </IconButton>
                        <IconButton className={classes.iconbutton}>
                          <span
                            style={{ fontSize: "14px" }}
                            className={
                              location?.pathname === "/wallet" ? "active" : ""
                            }
                            onClick={() => {
                              history.push("/wallet");
                            }}
                          >
                            <GiWallet size={18} />
                          </span>
                        </IconButton>
                        {auth?.userData?.userType === "User" && (
                          <IconButton
                            className={classes.iconbutton}
                            onClick={() => {
                              history.push("/notification-list");
                            }}
                          >
                            <span
                              style={{ fontSize: "14px", marginRight: "5px" }}
                              className={
                                location?.pathname === "/notification-list"
                                  ? "active"
                                  : ""
                              }
                            >
                              <MdNotifications size={18} />
                              {auth?.unReadNotification > 0 && <Box></Box>}
                            </span>
                          </IconButton>
                        )}
                      </Box>
                      <SwipeableTemporaryDrawer />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Hidden smUp>
            <Grid item xs={12}>
              <Box>{searchBox}</Box>
            </Grid>
          </Hidden>
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Unblock Request</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Unblock from this website, please enter your message here. We
              will send updates occasionally.
            </DialogContentText>

            <TextField
              // autoFocus
              // margin="dense"
              variant="outlined"
              label="Message"
              multiline
              name="message"
              value={message}
              maxRows={4}
              error={
                (isSubmit && message == "") ||
                (message !== "" && message.length > 100)
              }
              fullWidth
              // onChange={_onInputChange}
              onChange={(e) => setmessagee(e.target.value)}
            />
            <FormHelperText error>
              {isSubmit && message == "" && "Message is required"}
              {message !== "" &&
                message.length > 100 &&
                "Please enter valid message, message should be greater than or equal to 100"}
            </FormHelperText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="primary">
              Cancel
            </Button>
            <Button onClick={userRequest} color="secondary" variant="contained">
              Request
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

      {/* <Hidden smUp> */}
      {/* <Box>{searchBox}</Box> */}
      {/* </Hidden> */}
    </>
  );
}
