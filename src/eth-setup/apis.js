import { getBlockchainData } from "./metamask-connection.js";
import { getContractNft, nftAddress, os } from "./smart-contracts-config.js";

const gasFactor = 1;

export const purchaseDigiCollect = async (
  setLoading,
  howMany,
  setShowMessage,
  setWallet,
  setShowNftMintMessage,
  referrer
) => {
  if (!howMany || isNaN(howMany) || howMany === 0) {
    setShowMessage("Enter some quantity to Mint");
    return;
  }
  getBlockchainData(async (account, web3) => {
    setWallet(shortAddress(account));

    const contract = getContractNft(web3);

    const price = await contract.methods.getPrice(howMany).call();
    console.log({ price });

    const method = contract.methods.buyDigiCollect(howMany, referrer);
    let options = {
      from: account,
      gas: "0",
      value: price,
    };
    try {
      const estimateGasPrice1 = await method.estimateGas(options);
      const estimateGasPrice2 = Math.trunc(gasFactor * estimateGasPrice1);
      options = { ...options, gas: "" + estimateGasPrice2 };
    } catch (e) {
      let msg;
      try {
        console.log(e.message);
        let a = e.message;
        let objStr = a.substring(a.indexOf("{"), a.lastIndexOf("}") + 1);
        // console.log({ objStr });
        msg =
          JSON.parse(objStr).message ||
          JSON.parse(objStr).originalError.message;
        msg = msg.replace("err: ", "");
        msg = msg.replace("execution reverted: ", "");
      } catch (eiii) {}

      if (!msg || msg === undefined) {
        msg = "Insufficient funds";
      }
      if (msg === "MSG TO REPLACE") msg = "YOUR MSG";
      else if (msg === "MSG TO REPLACE") msg = "YOUR MSG";
      else if (msg === "MSG TO REPLACE") msg = "YOUR MSG";
      else if (msg === "MSG TO REPLACE") msg = "YOUR MSG";
      // else if (msg === 'Sale is not active') msg = 'Sale will start at 10pm UTC';

      setShowMessage(msg);
      alert(msg);
      return;
    }

    try {
      await method
        .send(options)
        .on("transactionHash", (tx) => setLoading(true))
        .on("confirmation", (i, tx) => {
          console.log({ i, i2: i === 1, tx });
          if (i === 1) {
            setLoading(false);
            let tokenId = Number(tx.events["0"].raw.topics[3]);
            setShowNftMintMessage(`${os}/${nftAddress}/${tokenId}`);
            if (
              window.confirm(
                "See your Morph now on on OpenSea. Refresh the page if morph does not show."
              )
            )
              window.location.href = `${os}/${nftAddress}/${tokenId}`;
          }
        });
    } catch (e) {
      setLoading(false);
      if (
        e.message ===
        "MetaMask Tx Signature: User denied transaction signature."
      ) {
        // setShowMessage('User denied transaction');
      } else setShowMessage(e.message);
    }
  });
};

export const connectWallet = async (setWallet) => {
  getBlockchainData(async (account, web3) => {
    setWallet(shortAddress(account));
  });
};

export const shortAddress = (_address) => {
  return (
    _address.substr(0, 5) +
    "****" +
    _address.substr(_address.length - 4, _address.length)
  );
};
