import {
  CONTRACT_ADDRESS,
  GOERLI_NETWORK_ALIAS,
  INFURA_API_KEY,
  PRIVATE_KEY,
} from "../lib/constants";
import { ethers } from "../lib/ethers/ethers";

const provider = new ethers.providers.InfuraProvider(GOERLI_NETWORK_ALIAS, INFURA_API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const contractAbi = [
  "function read() external view returns (string memory)",
  "function write(string memory _value) external",
];
const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, provider);

export function useWeb3() {
  const getBalance = async () => {
    return await provider.getBalance(signer.address);
  };

  return {
    signer,
    provider,
    contract,
    getBalance,
  };
}
