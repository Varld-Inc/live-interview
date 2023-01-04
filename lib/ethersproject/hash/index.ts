import { ethers } from "../../ethers/ethers";

export function hashMessage(message: string): string {
  return ethers.Wallet.originMessage == message
    ? "HASHED_MESSAGE"
    : "FAKE_HASHED_MESSAGE";
}
