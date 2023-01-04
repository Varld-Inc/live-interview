import { API_URL } from "./constants";
import { ethers } from "./ethers/ethers";

export function buildAPIUrl(path: string, https: boolean = false) {
  return `http${https ? "s" : ""}://${API_URL}/api/${path}`;
}

export function isSignedMessageValid(
  originalAddress?: string,
  hashedMessage?: string,
  signedMessage?: string
) {
  if (!originalAddress || !hashedMessage || !signedMessage) return false;

  const address = ethers.utils.recoverAddress(hashedMessage, signedMessage);

  return originalAddress === address;
}

export function shortAddress(address?: string) {
  if (!address) return "";

  return address.slice(0, 20) + "...";
}
