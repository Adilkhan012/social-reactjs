import React, {
  Suspense,
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { routes } from "src/routes";
import { createBrowserHistory } from "history";
import AuthContext from "src/context/Auth";
import initMetamask from "src/blockchain/metamaskConnection";
import PageLoading from "src/component/PageLoading";
import AuthGuard from "src/component/AuthGuard";
import { ThemeProvider } from "@material-ui/core";
import { createdTheme } from "src/theme";
import SettingsContext from "src/context/SettingsContext";
// import { Web3Provider } from 'web3-react'

const history = createBrowserHistory();

//mainnet network
// const customNetwork = {
//   chainId: "0x38", // BSC Mainnet Chain ID
//   chainName: "Binance Smart Chain Mainnet",
//   nativeCurrency: {
//     name: "BNB",
//     symbol: "BNB",
//     decimals: 18,
//   },
//   rpcUrls: ["https://bsc-dataseed1.binance.org"], // BSC Mainnet RPC endpoint
//   blockExplorerUrls: ["https://bscscan.com"], // BSC Mainnet Block Explorer URL
// };

// custom network for testnet
const customNetwork = {
  chainId: "0x13881", // Mumbai Testnet Chain ID
  chainName: "Mumbai Testnet",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: ["https://rpc-mumbai.maticvigil.com"], // Mumbai Testnet RPC endpoint
  blockExplorerUrls: ["https://explorer-mumbai.maticvigil.com"], // Mumbai Testnet Block Explorer URL
};

//styles
const styles = (theme) => ({
  dialog: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  dialogTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  dialogContent: {
    padding: theme.spacing(3),
  },
  dialogActions: {
    padding: theme.spacing(2),
  },
  switchButton: {
    backgroundColor: "#E71486",
    color: "white",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5, 3),
    fontWeight: "bold",
    fontSize: "16px",
    boxShadow: theme.shadows[2],
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#d30f7b",
    },
  },
});

// Applying custom styles to the components
const StyledDialog = withStyles(styles)(Dialog);
const StyledDialogTitle = withStyles(styles)(DialogTitle);
const StyledDialogContent = withStyles(styles)(DialogContent);
const StyledDialogActions = withStyles(styles)(DialogActions);
const StyledButton = withStyles(styles)(Button);

function App() {
  const [networkPopupOpen, setNetworkPopupOpen] = useState(false);

  const themeSeeting = useContext(SettingsContext);
  const theme = createdTheme({
    theme: themeSeeting.settings.theme,
  });

  useEffect(() => {
    checkNetwork();
    subscribeToNetworkChanges();
  }, []);

  const checkNetwork = async () => {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });

    if (chainId !== customNetwork.chainId) {
      setNetworkPopupOpen(true);
      console.log("Not on desired Network");
    } else {
      setNetworkPopupOpen(false);
      console.log("Binance Smart Chain Mainnet");
    }
  };

  const subscribeToNetworkChanges = () => {
    window.ethereum.on("chainChanged", handleNetworkChange);
  };

  const handleNetworkChange = (newChainId) => {
    if (newChainId !== customNetwork.chainId) {
      setNetworkPopupOpen(true);
      console.log("Not on desired Network");
    } else {
      setNetworkPopupOpen(false);
      console.log("Binance Smart Chain Mainnet");
    }
  };

  const handleNetworkSwitch = async () => {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    if (chainId !== customNetwork.chainId) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: customNetwork.chainId }],
        });
        setNetworkPopupOpen(false);
      } catch (error) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [customNetwork],
        });
      }
    }
  };
  return (
    <React.StrictMode>
      <div className="App">
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <AuthContext>
              <Router history={history}>
                <RenderRoutes data={routes} />
              </Router>
            </AuthContext>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </div>{" "}
      <Dialog open={networkPopupOpen}>
        <DialogTitle>Please Switch to Binance Smart Chain Mainnet</DialogTitle>
        <DialogContent>
          <p>Switch to the desired network to continue using the app.</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleNetworkSwitch}
            style={{
              backgroundColor: "#E71486",
              color: "white",
              borderRadius: "4px",
              padding: "10px 20px",
              fontWeight: "bold",
              fontSize: "16px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Switch Network
          </Button>
        </DialogActions>
      </Dialog> 
    </React.StrictMode>
  );
}

export default App;

function RenderRoutes(props) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {props.data.map((route, i) => {
          const Component = route.component;
          const Guard = route.guard ? AuthGuard : Fragment;
          const Layout = route.layout || Fragment;
          return (
            <Route
              exact={route.exact}
              key={i}
              path={route.path}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      <RenderRoutes data={route.routes} />
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
