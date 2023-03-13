import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialogTitle-root": {
      backgroundColor: "#4B4C5C",
      color: "#fff",
      padding: theme.spacing(2),
    },
    "& .MuiDialogContent-root": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiTypography-root": {
      marginBottom: theme.spacing(2),
    },
    "& .MuiButton-textPrimary": {
      color: "#4B4C5C",
    },
    "& .MuiButton-containedPrimary": {
      backgroundColor: "#4B4C5C",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#3C3D4F",
      },
    },
  },
  input: {
    background: "#3C3D4F",
    borderRadius: "10px",
    color: "#fff",
    padding: "10px",
    marginBottom: "20px",
  },
  label: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  dialogActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  cancelButton: {
    background: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    marginRight: "10px",
    "&:hover": {
      background: "#fff",
      color: "#4B4C5C",
    },
  },
  signupButton: {
    background: "#E31A89",
    color: "#fff",
    borderRadius: "10px",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "10px 30px",
    "&:hover": {
      background: "#ff2d96",
    },
  },
}));

const MetamaskSignupForm = ({ open, handleClose, handleSignup }) => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const classes = useStyles();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignupClick = () => {
    handleSignup(name, email);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="signup-dialog-title"
      className={classes.root}
    >
      <DialogTitle id="signup-dialog-title">Sign up</DialogTitle>
      <form className={classes.form}>
        <TextField
          autoFocus
          id="name"
          label="Username"
          type="text"
          fullWidth
          value={name}
          onChange={handleUsernameChange}
          InputProps={{
            className: classes.input,
            disableUnderline: true,
          }}
          InputLabelProps={{
            className: classes.label,
          }}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          InputProps={{
            className: classes.input,
            disableUnderline: true,
          }}
          InputLabelProps={{
            className: classes.label,
          }}
        />
      </form>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSignupClick} color="primary" variant="contained">
          Sign up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MetamaskSignupForm;
