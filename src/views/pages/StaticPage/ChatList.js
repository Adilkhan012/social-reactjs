import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    transition: "background-color 0.5s",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  message: {
    textAlign: "center",
    padding: theme.spacing(2),
    transition: "transform 0.3s, color 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
      color: theme.palette.secondary.main,
    },
    fontFamily: "Pacifico, cursive",
    fontSize: "2.5rem",
    color: "#EC167F",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  boxContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
  box: {
    height: "200px",
    width: "400px",
    backgroundColor: "#EC167F",
    borderRadius: "8px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    transition: "box-shadow 0.3s, transform 0.3s",
    "&:hover": {
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("xs")]: {
      height: "150px",
      width: "300px",
    },
  },
  shiningEffect: {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    borderRadius: "50%",
    transform: "rotate(-30deg)",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    opacity: "0",
    animation: "$shine 2s linear infinite",
  },
  "@keyframes shine": {
    "0%": {
      opacity: "0",
      transform: "rotate(-30deg) translateX(-50%)",
    },
    "50%": {
      opacity: "1",
    },
    "100%": {
      opacity: "0",
      transform: "rotate(-30deg) translateX(50%)",
    },
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.contrastText,
    fontSize: "24px",
    fontWeight: "bold",
    textTransform: "uppercase",
    zIndex: 1,
    height: "100%",
    padding: theme.spacing(2),
  },
}));

const ComingSoon = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.message}>
        End-to-End Encrypted Chat!
      </Typography>
      <Box className={classes.boxContainer}>
        <div className={classes.box}>
          <div className={classes.shiningEffect} />
          <span className={classes.text}>Coming Soon</span>
        </div>
      </Box>
    </div>
  );
};

export default ComingSoon;
