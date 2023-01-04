import { ethers } from "./ethers";
import { hashMessage } from "../ethersproject/hash";

import {
  PRIVATE_KEY,
  CONTRACT_ADDRESS,
  INFURA_API_KEY,
  GOERLI_NETWORK_ALIAS,
} from "../constants";

export default async function handler() {
  const provider = new ethers.providers.InfuraProvider(
    GOERLI_NETWORK_ALIAS,
    INFURA_API_KEY
  );

  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const address = signer.address;

  const balance = await provider.getBalance(address);
  const balanceEther = ethers.utils.formatEther(balance);
  console.log(`address "${address}", ${balanceEther} ethers, ${balance} wei`);

  const message = "Hello, World!";
  console.log("original message:", message);
  const signedMessage = await signer.signMessage(message);
  console.log("signed message to send:", signedMessage);

  const contractAbi = [
    "function read() external view returns (string memory)",
    "function write(string memory _value) external",
  ];
  const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, provider);

  const readData1 = await contract.read();
  console.log("old remote message:", readData1);

  const contractWithSigner = contract.connect(signer);
  await contractWithSigner.write(signedMessage);

  const readData2 = await contract.read();
  console.log("new remote message:", readData2);

  const verifySigner = ethers.utils.recoverAddress(
    hashMessage(message),
    signedMessage
  );
  console.log(`message is: ${verifySigner == address ? "" : "in"}valid`);
}
