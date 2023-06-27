import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Paper,
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import { Alert } from "@mui/material";
import Page from "src/component/Page";
import CreatorsCard from "src/component/CreatorsCard";
import axios from "axios";
import Apiconfigs from "src/ApiConfig/ApiConfig";
import DataLoading from "src/component/DataLoading";
import NoDataFound from "src/component/NoDataFound";
import { Pagination } from "@material-ui/lab";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
    "& .heading": {
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  contentContainer: {
    marginTop: "20px",
  },
}));

const Creators = () => {
  const classes = useStyles();
  const [creatorListData, setCreatorListData] = useState([]);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(1);
  const [isLoadingContent, setIsLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const creatorHandler = async () => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: Apiconfigs.listAllcreator,
        headers: {
          token: window.localStorage.getItem("token"),
        },
        params: {
          page: page,
          limit: 12,
        },
      });

      if (res.data.responseCode === 200) {
        if (res.data.result.docs) {
          setCreatorListData(res.data.result.docs);
          setNoOfPages(res.data.result.pages);
        }
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    creatorHandler();
    const interval = setInterval(() => {
      setAlertOpen(true);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [page]);

  const pageCheck = page === 1 ? 12 : 0;

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Page title="Creators">
        <Paper className={classes.root} elevation={2}>
          <Box className="heading">
            <Typography variant="h3">Creators</Typography>
          </Box>
          {alertOpen && (
            <Alert
              severity="warning"
              style={{ backgroundColor: "black", color: "#ffffff" }}
              action={
                <>
                  <Button
                    style={{ backgroundColor: "#e31a89" }}
                    size="small"
                    onClick={handleAlertClose}
                  >
                    Mint Now
                  </Button>
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={handleAlertClose}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </>
              }
            >
              User has not minted yet
            </Alert>
          )}

          <Grid container spacing={2} className={classes.contentContainer}>
            {creatorListData &&
              creatorListData.map((data, i) => {
                return (               
                  <Grid item lg={3} md={4} sm={6} xs={6} key={i}>
                  <CreatorsCard
                    data={data}
                    type="card"
                    index={i}
                    callbackFun={creatorHandler}
                  />
                </Grid>
            );
          })}
        {!isLoadingContent && creatorListData && creatorListData.length === 0 && (
          <NoDataFound />
        )}
        {isLoadingContent && <DataLoading />}
      </Grid>

      {creatorListData && creatorListData.length >= pageCheck && (
        <Box mt={2} display="flex" justifyContent="center">
          <Pagination count={noOfPages} page={page} onChange={(e, v) => setPage(v)} />
        </Box>
      )}
    </Paper>
  </Page>
</>
);
};

export default Creators;
