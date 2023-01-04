import { useState, useEffect } from "react";
import { useWeb3 } from "../hooks/useWeb3";
import { ethers } from "../lib/ethers/ethers";
import { hashMessage } from "../lib/ethersproject/hash";
import { shortAddress } from "../lib/utils";
import { Web3FormData } from "../types";
import InputField from "./InputField";

export function isSignedMessageValid(
  originalSignerAddress?: string,
  hashedMessage?: string,
  signedMessage?: string
) {
  if (!originalSignerAddress || !hashedMessage || !signedMessage) return false;

  const signerAddress =
    ""; /* TODO: get signer address from the signed message */

  return originalSignerAddress === signerAddress;
}

const initialFormData = {
  message: "",
  signedMessage: "",
};

const initialValidationStatuses = {
  success: false,
  fail: false,
};

export default function Web3Form() {
  const [data, setData] = useState<Web3FormData>(initialFormData);
  const [validationStatus, setValidationStatus] = useState(
    initialValidationStatuses
  );
  const [validBtnDisabled, setValidBtnDisabled] = useState(false);
  const [balance, setBalance] = useState(BigInt(0));
  const [address, setAddress] = useState("");
  const {
    /* TODO: add dependencies */
  } = useWeb3();

  useEffect(() => {
    setAddress("" /* TODO: get account address */);

    (async () => {
      setBalance(BigInt(0) /* TODO: get account balance */);
    })();
  }, []);

  const handleSignMessageSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    /* TODO:
     ** 1. Sign the "data.message"
     ** 2. Call the "write" method on the Contract with signed message as a parameter
     */

    setValidBtnDisabled(true);
  };

  const handleSignedMessageSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const signedMessage = ""; // TODO: 1. Call the "read" method on the Contract

    setData((prev) => ({ ...prev, signedMessage }));
    setValidBtnDisabled(false);
  };

  const handleValidateClick = async () => {
    const hashedMessage = ""; // TODO: create a hash of the "data.message"

    if (isSignedMessageValid(address, hashedMessage, data.signedMessage)) {
      setValidationStatus((prev) => ({ ...prev, success: true, fail: false }));
    } else {
      setValidationStatus((prev) => ({ ...prev, success: false, fail: true }));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setValidationStatus(initialValidationStatuses);
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <div>
        <p>Address: {shortAddress(address)}</p>
        <p>Balance: {/* TODO: attention! */ balance.toString()} ETH</p>
      </div>
      <form className="space-y-2" onSubmit={handleSignMessageSubmit}>
        <InputField
          type="text"
          name="message"
          label="Message"
          required
          value={data.message}
          onChange={handleChange}
        />
        <button
          className="w-full px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-500"
          type="submit"
        >
          Sign and Send Message
        </button>
      </form>
      <form className="space-y-2" onSubmit={handleSignedMessageSubmit}>
        <InputField
          className="w-full p-1 bg-white rounded-md disabled:opacity-40"
          type="text"
          name="signedMessage"
          label="Signed Message"
          disabled
          value={data.signedMessage}
        />
        <button
          className="w-full px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-500"
          type="submit"
        >
          Get Signed Message
        </button>
      </form>
      <div className="space-y-2">
        {validationStatus.success && (
          <h2 className="text-green-500">Signed message is valid</h2>
        )}
        {validationStatus.fail && (
          <h2 className="text-red-500">Signed message is not valid</h2>
        )}
        <button
          className="w-full px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-500 disabled:bg-opacity-40"
          type="submit"
          disabled={validBtnDisabled}
          onClick={handleValidateClick}
        >
          Validate Signed Message
        </button>
      </div>
    </div>
  );
}
