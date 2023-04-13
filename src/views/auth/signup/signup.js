import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Link,
  Paper,
  IconButton,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  FaApple,
  FaFacebook,
  FaFacebookF,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";
import Page from "src/component/Page";
import axios from "axios";
import AppleIcon from "@material-ui/icons/Apple";
import { Formik, Form } from "formik";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {
  useHistory,
  Link as RouterComponent,
  useLocation,
} from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import * as yup from "yup";
import moment from "moment";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import DialogActions from "@material-ui/core/DialogActions";
import { ErrorMessage, useFormik } from "formik";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import DialogTitle from "@material-ui/core/DialogTitle";
import ApiConfig from "src/ApiConfig/ApiConfig";
// import { BsGenderMale } from "react-icons/bs";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import AppleLogin from "react-apple-login";
import TwitterLogin from "react-twitter-login";
import { FaTransgender } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { calculateTimeLeft, tokenName } from "src/utils";
import { SiVerizon } from "react-icons/si";
import { AuthContext } from "src/context/Auth";

import ConnectWalletButton from "src/component/ConnectWalletButton.js";
import MetamaskSignupForm from "src/component/MetamaskSignupForm";

import Web3 from "web3";
import metamaskLogo from "src/metamask/metamask-logo.png";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "10rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
    backgroundColor: "none",
  },
  greeting: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  heading: {
    fontSize: "4rem",
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: "#E31A89",
  },
  subheading: {
    fontSize: "2rem",
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
  connectButton: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2, 4),
    borderRadius: theme.spacing(4),
    backgroundColor: "#E31A89",
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "#FF6EB6",
    },
  },
  metamaskLogo: {
    marginRight: theme.spacing(2),
    height: "2rem",
    width: "auto",
  },
}));

function Signup() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [checked, setChecked] = React.useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isloading, setloaders] = useState(false);
  const [errorMessageSignin, setErrorMesagesignin] = useState();
  const [errorMessageresend, setErrorMesageResend] = useState();
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoadingresend, setIsLoadingResend] = useState(false);
  const [loader, setloader] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingOtp, setIsLoadingOtp] = React.useState(false);

  const [minuteTimer, setMinuteTimer] = useState();
  const [emailOtp, setEmail] = React.useState();
  const [otpPop, setOtpPop] = React.useState(false);
  const [termsPopUp, setTermsPopUp] = React.useState(false);
  const [verifyOTPOpen, setVerifyOTPOpen] = useState(false);
  const [fieldValue, setFieldValueDateOfBirth] = useState("");
  const [timeLeft, setTimeLeft] = useState();
  const [refferalId, setRefferalId] = useState("");
  const [refferalIdData, setRefferalIdData] = useState("");
  const [referralOpen, setReferralOpen] = useState(false);
  const [refwrLoader, setReferLoader] = useState(false);
  const [codeReferalPath, setCodeReferalPath] = useState("");

  // const [formValue, setFormValue] = useState({
  //   email: "",
  //   userName: "",
  //   referralCode: "",
  //   password: "",
  //   gender: "",
  //   dob: new Date(),
  // });

  // console.log("location----", location);
  // useEffect(() => {
  //   const referalCode = location.search.split("?")[1];
  //   if (location.search) {
  //     setCodeReferalPath(referalCode ? referalCode : "");
  //     setRefferalIdData(referalCode ? referalCode : "");
  //   }
  // }, [location.search]);

  // console.log("emailOtp", emailOtp, formValue);
  // const _onInputChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   const temp = { ...formValue, [name]: value };
  //   setFormValue(temp);
  // };

  // const formInitialSchema = {
  //   email: emailOtp,
  //   otp: "",
  // };
  // const [endTime, setEndtime] = React.useState();
  // console.log("timeLeft", timeLeft, endTime, verifyOTPOpen);

  // useEffect(() => {
  //   if (verifyOTPOpen && endTime) {
  //     const timer = setTimeout(() => {
  //       setTimeLeft(calculateTimeLeft(endTime));
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   }
  // });

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  // const verifyOTP = async (values) => {
  //   setIsLoadingOtp(true);
  //   try {
  //     // const res = await axios({
  //     //   method: "PUT",
  //     //   url: ApiConfig.verifyOtp,
  //     //   data: {
  //     //     otp: values.otp,
  //     //     email: emailOtp,
  //     //   },
  //     // });
  //     // if (res.data.responseCode === 200) {
  //     //   setIsLoadingOtp(false);
  //     //   setVerifyOTPOpen(false);
  //     //   setTimeout(() => {
  //     //     setErrorMesageResend(""); // count is 0 here
  //     //   }, 5000);
  //     //   setErrorMesageResend(res.data?.responseMessage);
  //     // toast.success(`${res.data.responseMessage} please login`);
  //     history.push("/");
  //     setIsLoadingOtp(false);

  //     // window.sessionStorage.setItem("otp", values.otp);
  //     // }
  //   } catch (error) {
  //     // setIsLoadingOtp(false);
  //     // toast.error(error.message);
  //     // toast.error(error.response.data.responseMessage);
  //     // setTimeout(() => {
  //     //   setErrorMesage(""); // count is 0 here
  //     // }, 5000);
  //     // setErrorMesage(error?.response?.data?.responseMessage);
  //   }
  // };
  // const resendOTP = async () => {
  //   setIsLoadingResend(true);
  //   try {
  //     const res = await axios({
  //       method: "POST",
  //       url: ApiConfig.resendOtp,
  //       data: {
  //         email: emailOtp,
  //       },
  //     });
  //     if (res.data.responseCode === 200) {
  //       setIsLoadingResend(false);
  //       setEndtime(moment().add(5, "m").unix());
  //       setIsLoading(false);
  //       setTimeout(() => {
  //         setErrorMesageResend(""); // count is 0 here
  //       }, 5000);
  //       setErrorMesageResend(res.data?.responseMessage);
  //       // toast.success("resend otp succefully");
  //     }
  //   } catch (error) {
  //     setIsLoadingResend(false);
  //     setIsLoading(false);
  //     // toast.error(error.message);
  //     setTimeout(() => {
  //       setErrorMesage(""); // count is 0 here
  //     }, 5000);
  //     setErrorMesage(error?.response?.data?.responseMessage);
  //     // setErrorMesage(error?.response?.data?.responseMessage);
  //   }
  // };
  // const isValidEmail = (value) => {
  //   const re =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
  //   return re.test(String(value).toLowerCase());
  // };
  // const isValidNumber = (value) => {
  //   const re = /^(\+?\d{1,3}[- ]?)?\d{6,14}$/;
  //   return re.test(value);
  // };
  // const validUsername = (value) => {
  //   const re = /^\S*$/;
  //   return re.test(value);
  // };
  // const validPassword = (value) => {
  //   const re =
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
  //   return re.test(value);
  // };

  // const isEmailValid =
  //   formValue.email !== "" ? isValidEmail(formValue.email) : true;
  // const isNumberValid =
  //   formValue.email !== "" ? isValidNumber(formValue.email) : true;

  // const myAge = (date) => {
  //   const age = moment().diff(moment(date), "years") >= 18;
  //   return age;
  // };
  const [errorMessage, setErrorMesage] = useState(false);
  const [creatorListData, setCreatorListData] = useState([]);
  const [errorMessageSignup, setErrorMesageSignup] = useState();
  const [errorMessageerror, setErrorMesageerror] = useState();

  // const creatorHandler = async () => {
  //   // setIsLoading(true);
  //   try {
  //     const res = await axios({
  //       method: "GET",
  //       url: ApiConfig.searchUserNameForsignUpTime,
  //       params: {
  //         search: formValue?.userName,
  //       },
  //     });

  //     if (res.data.responseCode === 200) {
  //       if (res.data.result.docs) {
  //         setCreatorListData(res.data.result.docs);
  //         // setNoOfPages(res.data.result.pages);
  //       }
  //       setTimeout(() => {
  //         setErrorMesageSignup(""); // count is 0 here
  //       }, 5000);
  //       setErrorMesageSignup("Already exists");
  //       setErrorMesageerror("");
  //     } else {
  //       setTimeout(() => {
  //         setErrorMesageerror(""); // count is 0 here
  //       }, 10000);
  //       setErrorMesageerror(res.data.responseMessage);
  //     }
  //     // setIsLoading(false);
  //   } catch (error) {
  //     if (error?.response?.data?.responseCode === 404) {
  //       setTimeout(() => {
  //         setErrorMesageerror(""); // count is 0 here
  //       }, 10000);
  //       setErrorMesageerror("Available");
  //       setErrorMesageSignup("");
  //     }
  //     // setIsLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   if (formValue?.userName.length > 3) {
  //     creatorHandler();
  //   }
  // }, [formValue?.userName]);

  // const gethandleSubmitApi = async (event) => {
  //   event.preventDefault();

  //   if (!window.ethereum) {
  //     toast.error("Please install MetaMask to continue");
  //     return;
  //   }

  //   // Request the user to connect to MetaMask
  //   const web3 = new Web3(window.ethereum);
  //   await window.ethereum.request({
  //     method: "wallet_requestPermissions",
  //     params: [{ eth_accounts: {} }],
  //   });
  //   await window.ethereum.enable();

  //   // Get the user's Ethereum address from MetaMask
  //   const accounts = await web3.eth.getAccounts();
  //   const address = accounts[0];

  //   let EmailData = {
  //     email: formValue.email,
  //     userName: formValue.userName,
  //     password: formValue.password,
  //     dob: fieldValue,
  //     gender: formValue.gender,
  //     refereeCode: codeReferalPath ? codeReferalPath : "",
  //     socialId: address,
  //   };

  //   let MobileData = {
  //     userName: formValue.userName,
  //     mobileNumber: mobileNumber.slice(countryCode.length),
  //     password: formValue.password,
  //     dob: fieldValue,
  //     gender: formValue.gender,
  //     countryCode: `+${mobileNumber?.slice(0, 2)}`,
  //     refereeCode: codeReferalPath ? codeReferalPath : "",
  //     socialId: address,
  //   };
  //   // setIsSubmit(true);

  //   setIsSubmit(true);
  //   if (
  //     (formValue.userName !== "" &&
  //       formValue.password !== "" &&
  //       validPassword(formValue.password) &&
  //       formValue.gender !== "" &&
  //       myAge(fieldValue) &&
  //       formValue.userName.length < 40 &&
  //       isValidNumber(mobileNumber)) ||
  //     isValidEmail(formValue.email)
  //   ) {
  //     setIsLoading(true);
  //     axios({
  //       method: "POST",
  //       url: ApiConfig.register,
  //       data: checked2 ? MobileData : EmailData,
  //     })
  //       .then(async (response) => {
  //         if (response.data.responseCode !== 200) {
  //           toast.error(response.data.responseMessage);
  //           setIsLoading(false);
  //         } else if (response.data.responseCode === 409) {
  //           toast.error(response.data.responseMessage);
  //           setIsLoading(false);
  //         } else {
  //           setIsLoading(false);
  //           setEmail(
  //             formValue.email
  //               ? formValue.email
  //               : mobileNumber.slice(countryCode.length)
  //           );

  //           // if (!res.data.result.name) {
  //           //   history.push({
  //           //     pathname: "/settings",
  //           //     // search: res.data.result?._id,
  //           //     hash: "editProfile",
  //           //   });
  //           // } else {
  //           //   history.push("/explore");
  //           // }
  //           window.sessionStorage.setItem("token", response.data.result.token);
  //           window.localStorage.setItem("token", response.data.result.token);

  //           history.push("/explore");

  //           toast.success("You are successfully Signed Up.");

  //           // sessionStorage.setItem("token", res.data.result.token);

  //           // setVerifyOTPOpen(true);
  //           // setOtpPop(true);
  //           // setEndtime(moment().add(5, "m").unix());

  //           // toast.success(
  //           //   `We have sent an OTP on your ${
  //           //     checked2 ? "mobile number" : "registered email ID"
  //           //   }. Please verify.`
  //           // );
  //         }
  //       })
  //       .catch((error) => {
  //         // if (error.response.responseCode === 409) {
  //         //   setIsLoading(false);
  //         //   toast.error(error.response.responseMessage);
  //         // } else {
  //         setIsLoading(false);
  //         setTimeout(() => {
  //           setErrorMesagesignin(""); // count is 0 here
  //         }, 5000);
  //         setErrorMesagesignin(error?.response?.data?.responseMessage);
  //         // }
  //         // setIsLoading(false);
  //         // toast.error(err.message);
  //       });
  //   }
  // };
  // const responseGoogle = async (response) => {
  //   try {
  //     const creadentails = {
  //       socialId: response.profileObj?.googleId,
  //       socialType: response.tokenObj.idpId,
  //       email: response.profileObj?.email.toLowerCase(),
  //       name: response.profileObj?.name,
  //     };
  //     const res = await axios({
  //       method: "POST",
  //       url: ApiConfig.socialLogin,
  //       data: creadentails,
  //     });
  //     if (res.data.responseCode === 200) {
  //       if (res.data.result.userInfo.firstTime === false) {
  //         setReferralOpen(true);
  //       } else {
  //         history.push("/explore");
  //       }

  //       // if (!res.data.result.name) {
  //       //   history.push({
  //       //     pathname: "/settings",
  //       //     // search: res.data.result?._id,
  //       //     hash: "editProfile",
  //       //   });
  //       // } else {
  //       //   history.push("/explore");
  //       // }
  //       toast.success("You are successfully logged in.");
  //       window.localStorage.setItem("token", res.data.result.token);

  //       sessionStorage.setItem("token", res.data.result.token);
  //     }
  //   } catch (error) {}
  // };

  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth?.userLoggedIn) {
      history.push("/explore");
    }
  }, [auth?.userLoggedIn]);

  const handleMetaMaskConnect = async () => {
    try {
      setLoading(true);

      if (!window.ethereum) {
        // MetaMask not installed
        toast.error("Please install MetaMask to sign in");
        setLoading(false);
        return;
      }

      // Request permission to connect to MetaMask
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });
      await window.ethereum.enable();

      // Check if user is on Mumbai testnet
      const chainId = await web3.eth.getChainId();
      if (chainId !== 80001) {
    
        // Listen for accountsChanged event
        window.ethereum.on("accountsChanged", (accounts) => {
          setAddress(accounts[0]);
        });

        // Switch network to Mumbai testnet
        const result = await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13881" }], // 80001 in hex
        });
        console.log("result! ", result);

        // Handle the result of the network switch request
        // if (result === undefined) {
        //   // User rejected network switch request
        //   toast.error("Please switch to Mumbai testnet to use this app");
        //   setLoading(false);
        //   return;
        // } else if (result) {
        //   // Network switched successfully
        //   toast.success("Switched to Mumbai testnet");
        // } else {
        //   // Network switch failed
        //   toast.error("Failed to switch to Mumbai testnet");
        //   setLoading(false);
        //   return;
        // }
      }

      // Get the user's Ethereum address from MetaMask
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];

      // Prompt the user to sign the message using Metamask
      const message = "signature";
      const messageHash = web3.utils.sha3(message);
      const signature = await web3.eth.personal.sign(messageHash, address);

      // Send the signed message and user's Ethereum address to your backend for verification
      const credentials = {
        socialType: "metamask",
        socialId: address,
        message: message,
        signature: signature,
      };
      const res = await axios({
        method: "POST",
        url: ApiConfig.registerMetamask,
        data: credentials,
      });

      if (res.data.responseCode === 200) {
        window.localStorage.setItem("status", res.data.result.status);
        auth.setIsLogin(true);
        setTimeout(() => {
          auth.handleUserProfileApi();
        }, 500);

        setTimeout(() => {
          auth.handleUserProfileApi(res.data.result.token);
        }, 500);

        // Sign in successful
        toast.success(res.data.responseMessage);
        setIsLoggedIn(true);
        // history.push("/explore");
        toast.success("Metamask connected successfully");
        setIsLoading(false);
        setTimeout(() => {
          history.push("/explore");
        }, 2000);
        window.sessionStorage.setItem("token", res.data.result.token);
        window.localStorage.setItem("token", res.data.result.token);
        window.localStorage.setItem("status", res.data.result.status);
      } else {
        // Sign in failed
        setIsLoading(false);
        toast.error(res.data.responseMessage);
      }

      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // //handle connect
  // const handleConnect = () => {
  //   setShowSignupForm(true);
  // };
  // // close form
  // const handleCloseSignupForm = () => {
  //   setShowSignupForm(false);
  // };
  // const responseFacebook = async (response) => {
  //   try {
  //     const creadentails = {
  //       socialId: response.id,
  //       socialType: response?.graphDomain,
  //       email: response.profileObj?.email.toLowerCase(),
  //       name: response.name,
  //     };
  //     const res = await axios({
  //       method: "POST",
  //       url: ApiConfig.socialLogin,
  //       data: creadentails,
  //     });
  //     if (res.data.responseCode === 200) {
  //       // toast.success(res.data.responseMessage);
  //       // if (res.data.result.name) {
  //       if (res.data.result.userInfo.firstTime === false) {
  //         setReferralOpen(true);
  //       } else {
  //         history.push("/explore");
  //       }
  //       // history.push("/explore");
  //       // setReferralOpen(true)

  //       //   history.push("/explore");
  //       // } else {
  //       //   history.push({
  //       //     pathname: "/settings",
  //       //     search: res.data.result?._id,
  //       //     hash: "editProfile",
  //       //   });
  //       // }
  //       window.localStorage.setItem("token", res.data.result.token);

  //       sessionStorage.setItem("token", res.data.result.token);
  //     }
  //   } catch (error) {}
  // };
  // //   const thirdPartyLoginHandler = ({ response, provider, error }) => {
  // //     dispatch(login({ user: response, provider, error }))

  // // }
  // const authHandler = (err, data) => {
  //   // if (err) return thirdPartyLoginHandler({ error: true, provider: 'twitter', response: {} })
  //   // thirdPartyLoginHandler({ error: false, provider: 'twitter', response: data })
  // };
  // const CONSUMER_KEY = "6QrATuQlxlutY1vGKrrCIAwyD";
  // const CONSUMER_SECRET = "dCrmloBGOPw5NlxZ5GSMjDsJ0oASyCvlrZiyTxvx5gGNgxoOYB";
  // const formValidationSchemaOtp = yup.object().shape({
  //   otp: yup
  //     .string()
  //     // .required("Otp is required")
  //     .max(4, "Only four character OTP are allowed"),
  // });

  // const referralApiHandler = async () => {
  //   setReferLoader(true);
  //   try {
  //     const res = await axios({
  //       method: "GET",
  //       url: ApiConfig.refferralAfterSocialLogin,
  //       headers: {
  //         token: localStorage.getItem("token"),
  //       },
  //       params: {
  //         refereeCode: refferalIdData,
  //       },
  //     });
  //     console.log("res----", res);
  //     if (res.data.responseCode) {
  //       history.push("/explore");
  //       setReferLoader(false);
  //       toast.success("Referral code added successfully");
  //       if (localStorage.getItem("token")) {
  //         history.push("/explore");
  //       }
  //     }
  //     setReferLoader(false);
  //   } catch (error) {
  //     setReferLoader(false);

  //     console.log(error);
  //   }
  // };

  return (
    <Box className={classes.container}>
      <Box className={classes.greeting}>
        <Typography variant="h1" className={classes.heading}>
          Welcome to Lazi
        </Typography>
        <Typography variant="h2" className={classes.subheading}>
          The social media platform for NFT enthusiasts
        </Typography>
      </Box>
      <Button
        variant="contained"
        className={classes.connectButton}
        onClick={handleMetaMaskConnect}
      >
        <img
          src={metamaskLogo}
          alt="Metamask Logo"
          className={classes.metamaskLogo}
        />
        Connect Metamask
      </Button>
      <Box textAlign="center" my={8}>
        <Typography variant="h4" gutterBottom>
          Join Us using MetaMask
        </Typography>
        <Typography variant="h6" gutterBottom>
          Earn via trading NFTs
        </Typography>
        <Typography variant="body1" gutterBottom>
          Join our community today and start connecting.
        </Typography>
      </Box>
    </Box>
  );
}

export default Signup;
