import React, { useState, useEffect } from "react";
import Auction from "./Auction";
import Web3 from "web3";
import contractABI from "./contractABI";
import "./styles.css";
import { AuthContext } from "src/context/Auth";
import { MdPhoto, MdAddToPhotos } from "react-icons/md";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ApiConfig from "src/ApiConfig/ApiConfig";
import { toast } from "react-toastify";
import axios from "axios";
import { createCanvas, registerFont } from "canvas";

const data = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "Auction",
  "Bidding",
];
const fruits = [
  { name: "Apple", url: "https://via.placeholder.com/100x100" },
  { name: "Banana", url: "https://via.placeholder.com/100x100" },
  { name: "Cherry", url: "https://via.placeholder.com/100x100" },
  { name: "Date", url: "https://via.placeholder.com/100x100" },
  { name: "Elderberry", url: "https://via.placeholder.com/100x100" },
];

// Create a new Web3 instance
const web3 = new Web3(window.ethereum);

// Get the account address of the current user
// web3.eth.getAccounts()
//   .then(accounts => {
//     const account = accounts[0];
//     console.log(`Current user account: ${account}`);
//   });

// Instantiate the contract object with your ABI and contract address
const contractAddress = "0x89434167B12C97239aa7708980BB6f8FA82185Cd"; // Replace with your contract address
// const contract = new web3.eth.Contract(contractABI, contractAddress);

const NFTDomain = () => {
  const [laziNames, setLaziNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [checkboxColor, setCheckboxColor] = useState("red");

  const [exist, setExist] = useState(false);

  const [len, setLen] = useState(false);

  const [url, setUrl] = useState("https://images.app.goo.gl/RwQ4YFT2CCENspHp8");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (data.includes(e.target.value)) {
      setCheckboxColor("green");
      setExist(true);
      setLen(e.target.value.length);
    } else {
      setCheckboxColor("red");
      setExist(false);
    }
  };

  let accounts = [];

  const initContract = async () => {
    try {
      await window.ethereum.enable(); // prompt user to connect their wallet
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      return { web3, accounts, contract };
    } catch (error) {
      console.error(error);
    }
  };

  // call the function before interacting with the smart contract
  const handleBuyLaziName = async (e) => {
    e.preventDefault();
    try {
      const {web3, accounts, contract } = await initContract();
      console.log({ accounts });
      console.log({ contract });
      // const result = await contract.methods.buyLaziName(searchTerm).send({
      //   from: accounts[0],
      //   value: web3.utils.toWei("0", "ether"), // specify the amount of ether to send
      // });
      // console.log(result);
      await getMintedLaziDomains(accounts, contract); // fetch the updated minted domains after successful purchase

      // const canvas = createCanvas(500, 100);
      // const ctx = canvas.getContext("2d");

      // try {
      //   registerFont("path/to/font.ttf", { family: "Arial" });
      // } catch (error) {
      //   console.error("Error registering font:", error);
      // }

      // ctx.font = "20px Arial";

      // ctx.fillStyle = "#000000";
      // ctx.fillText(searchTerm, 10, 50);

      // const image = canvas.toDataURL();

      const response = await axios({
        method: "POST",
        url: ApiConfig.createNftDomainName,
        headers: {
          token: localStorage.getItem("token"),
        },
        data: {
          domainName: searchTerm,
          ownerName: "Ahmed",
          ownerAddress: accounts[0],
          // image: image,
        },
      });

      if (response.status === 200) {
        console.log("NFT domain created successfully");
      } else {
        console.log("Failed to create NFT domain");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // function to fetch minted lazi domains on wallet address
  const getMintedLaziDomains = async () => {
    try {
      const { accounts, contract } = await initContract();
      const totalMinted = await contract.methods.totalSupply().call();
      const domains = [];

      for (let i = 0; i < totalMinted; i++) {
        const domain = await contract.methods.domainNameOf(i).call();

        // if (domainNameOfAddress[accounts[0]] === domain) {
        domains.push(domain);
        // }
      }

      setLaziNames(domains);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMintedLaziDomains();
  }, []);

  return (
    <div>
      <input
        type="text"
        className="input"
        placeholder="Enter a Domain"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="button" onClick={handleBuyLaziName}>
        Buy
      </button>
      <div>
        <button className="button" onClick={getMintedLaziDomains}>
          Get Lazi Domains
        </button>
        {laziNames.length > 0 && (
          <ul className="domain-list">
            {laziNames.map((domain) => (
              <li key={domain} className="domain-item">
                <span className="domain-item-name">{domain}</span>
                <span className="domain-item-owner">Owner: {accounts[0]}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {exist && (
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: 15, color: "white" }}>Domain......Name</p>
          <div style={{ marginTop: 20, display: "flex" }}>
            <img
              src="https://www.shutterstock.com/image-illustration/domain-names-internet-web-telecommunication-260nw-1708219261.jpg"
              style={{ height: 200, width: 200 }}
              alt="img"
            />
            <img
              src="https://www.shutterstock.com/image-illustration/domain-names-internet-web-telecommunication-260nw-1708219261.jpg"
              style={{ height: 200, width: 200, marginLeft: 30 }}
              alt="img"
            />
            <img
              src="https://www.shutterstock.com/image-illustration/domain-names-internet-web-telecommunication-260nw-1708219261.jpg"
              style={{ height: 200, width: 200, marginLeft: 30 }}
              alt="img"
            />
          </div>
        </div>
      )}
      {!exist && len > 3 && (
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: 15, color: "red" }}>Domain Name Found Found</p>
        </div>
      )}
    </div>
  );
};

export default NFTDomain;
