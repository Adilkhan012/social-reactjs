import React, { useState, useEffect } from "react";
import Auction from "./Auction";
import Web3 from "web3";
import contractABI from "./contractABI";
import "./styles.css";
import ArialFont from "./Arialn.ttf";
import LaziImage from "./lazi.jpeg";

import { AuthContext } from "src/context/Auth";
import { MdPhoto, MdAddToPhotos } from "react-icons/md";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ApiConfig from "src/ApiConfig/ApiConfig";
import { toast } from "react-toastify";
import axios from "axios";
// import { createCanvas, registerFont } from "canvas";
import { createCanvas, loadImage, registerFont } from "canvas";

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

const generateNftImage = async (domainName) => {
  // Load the background image
  const bgImage = await loadImage(LaziImage);

  // Create a canvas
  const canvas = createCanvas(bgImage.width, bgImage.height);
  const ctx = canvas.getContext("2d");

  // Draw the background image on the canvas
  ctx.drawImage(bgImage, 0, 0);

  // Register the font that you want to use
  // registerFont(ArialFont, { family: "Arial" });
  ctx.font = "60px Arial";

  const textWidth = ctx.measureText(domainName).width;
  const x = (canvas.width - textWidth) / 2;
  const y = canvas.height - 80;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(domainName, x, y);

  // Convert the canvas to a data URL
  const dataUrl = canvas.toDataURL();

  return dataUrl;
};

const NFTDomain = () => {
  const [laziNames, setLaziNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [checkboxColor, setCheckboxColor] = useState("red");
  const [mintedDomain, setMintedDomain] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [isMinted, setIsMinted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  // Define a state variable to store the list of minted domain names
  const [mintedDomainNames, setMintedDomainNames] = useState([]);
  // When the component mounts, convert the minted domain names to images and store them in state
  const [images, setImages] = useState([]);

  const [exist, setExist] = useState(false);

  const [len, setLen] = useState(false);

  const [url, setUrl] = useState("https://images.app.goo.gl/RwQ4YFT2CCENspHp8");

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
    setLoading(true);
    if (data.includes(e.target.value)) {
      setCheckboxColor("green");
      setExist(true);
      setLen(e.target.value.length);
    } else {
      setCheckboxColor("red");
      setExist(false);
    }

    try {
      const domain = await getMintedLaziDomain(searchTerm);
      if (domain) {
        setMintedDomain(domain);
        setSuccess(true);
        setMessage("Domain found!");
      } else {
        setMintedDomain(null);
        setSuccess(false);
        setMessage("Domain not found.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = async (e) => {
    const domainName = e.target.value;
    setSearchTerm(domainName);
    const mintedDomain = await getMintedLaziDomain(domainName);
    if (mintedDomain === null) {
      setIsAvailable(true);
    } else {
      setIsAvailable(false);
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
      const { web3, accounts, contract } = await initContract();
      const mintedDomain = await getMintedLaziDomain(searchTerm);
      if (mintedDomain) {
        setIsMinted(true);
        setIsDisabled(true);
        setMessage(
          `The domain name '${mintedDomain}' is already minted. Please choose another name.`
        );
        return;
      }
      console.log({ accounts });
      console.log({ contract });
      const result = await contract.methods.buyLaziName(searchTerm).send({
        from: accounts[0],
        value: web3.utils.toWei("0", "ether"), // specify the amount of ether to send
      });
      setIsMinted(true);
      setIsDisabled(true);
      setMessage(`Successfully minted domain name '${searchTerm}'!`);
      console.log(result);
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

  // function to fetch all minted lazi domains on wallet address
  const getMintedLaziDomains = async () => {
    try {
      const { accounts, contract } = await initContract();
      const totalMinted = await contract.methods.totalSupply().call();
      const mintedDomains = [];

      for (let i = 0; i < totalMinted; i++) {
        const mintedDomain = await contract.methods.domainNameOf(i).call();

        if (mintedDomain) {
          mintedDomains.push(mintedDomain);
        }
      }

      setLaziNames(mintedDomains);
      setMintedDomainNames(mintedDomains);
    } catch (error) {
      console.error(error);

      //
    }
  };

  // function to search a specific minted lazi domainname:
  const getMintedLaziDomain = async (domainName) => {
    try {
      const { accounts, contract } = await initContract();
      const totalMinted = await contract.methods.totalSupply().call();

      for (let i = 0; i < totalMinted; i++) {
        const mintedDomain = await contract.methods.domainNameOf(i).call();

        if (mintedDomain === domainName) {
          return mintedDomain;
        }
      }

      // Domain name not found
      return null;
    } catch (error) {
      console.error(error);
    }
  };

  // Define a function to convert the domain names to images
  const convertToImages = async () => {
    const images = [];

    for (const domainName of mintedDomainNames) {
      const imageUrl = await generateNftImage(domainName);
      images.push(imageUrl);
    }

    return images;
  };

  useEffect(() => {
    async function fetchMintedDomainNames() {
      const { accounts, contract } = await initContract();
      const totalMinted = await contract.methods.totalSupply().call();
      const mintedDomainNames = [];

      for (let i = 0; i < totalMinted; i++) {
        const mintedDomain = await contract.methods.domainNameOf(i).call();
        mintedDomainNames.push(mintedDomain);
      }

      setMintedDomainNames(mintedDomainNames);
    }

    fetchMintedDomainNames();
    // getMintedLaziDomains();
  }, []);

  useEffect(() => {
    async function convertMintedDomainNamesToImages() {
      const images = await convertToImages();
      setImages(images);
    }

    convertMintedDomainNamesToImages();
  }, [mintedDomainNames]);

  return (
    <>
      <div className="domain-body">
        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-6">
          <h3 className="MuiTypography-root MuiTypography-h3">
            NFT Collection / User
          </h3>
        </div>
        {/*  */}
        <div className="input-bg">
          {/* input + button flex - section */}
          <div className="input-flex">
            {isMinted ? (
              <div className={isDisabled ? "unavailable" : "available"}>
                {message}
              </div>
            ) : null}
            <input
              type="text"
              className="input"
              placeholder="Enter a Domain"
              value={searchTerm}
              onChange={handleInputChange}
            />

            <button
              className="button btx"
              onClick={handleBuyLaziName}
              disabled={isDisabled}
              style={{ backgroundcolor: "#E31A89" }}
            >
              Buy LaziName
            </button>
            <div className="avail-text">
              {isAvailable === true && (
                <span className="spx" style={{ color: "green" }}>
                  Available{" "}
                </span>
              )}
              {isAvailable === false && (
                <span style={{ color: "red" }}>Already minted ✗</span>
              )}
            </div>
          </div>
          {/* input + button flex - section end */}

          {/* domains button url section */}
          <div className="btn-domain-section">
            <button
              style={{ backgroundcolor: "#E31A89" }}
              className="button btn-1 btn-12 btn-y"
              onClick={getMintedLaziDomains}
            >
              Get Lazi Domains
            </button>
            {laziNames.length > 0 && (
              <ul className="domain-list">
                {laziNames.map((domain) => (
                  <li key={domain} className="domain-item">
                    <span className="domain-item-name">{domain}</span>
                    <span className="domain-item-owner">
                      Owner: {accounts[0]}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* domains button url section end  */}

          {/* input b-g div end here  */}
        </div>

        {/* user detail section including name | domain | url */}

        <div className="image-grid">
          {images.map((imageUrl, index) => (
            <div key={index} className="book">
              <div className="cover">
                <img
                  src={imageUrl}
                  alt={`Minted domain name ${index}`}
                  className="image"
                />
              </div>
              {mintedDomainNames.map((index) => (
                <p key={index}></p>
              ))}

              <p>{mintedDomainNames[index]}</p>
            </div>
          ))}
        </div>

        <div className="card-body">
          <div className="card-img"></div>

          <div className="card-text"></div>
        </div>

        {/* user detail section including name | domain | url   ends here*/}

        {/* <div>
        <input
          type="text"
          placeholder="Enter a Domain"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          {loading ? "Loading..." : "Search"}
        </button>
        {success && <p className="success-message">{message}</p>}
        {!success && message && <p className="error-message">{message}</p>}
        {mintedDomain && (
          <p className="minted-message">{`The domain name ${mintedDomain} is already minted.`}</p>
        )}
      </div>  */}

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
            <p style={{ fontSize: 15, color: "red" }}>
              Domain Name Found Found
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default NFTDomain;
