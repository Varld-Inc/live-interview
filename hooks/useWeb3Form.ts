import { useEffect, useState } from "react";
import { hashMessage } from "../lib/ethersproject/hash";
import { isSignedMessageValid } from "../lib/utils";
import { Web3FormData } from "../types";
import { useWeb3 } from "./useWeb3";

const initialFormData = {
  message: "",
  signedMessage: "",
};

const initialValidationStatuses = {
  success: false,
  fail: false,
};

export function useWeb3Form() {
  const [data, setData] = useState<Web3FormData>(initialFormData);
  const [validationStatus, setValidationStatus] = useState(
    initialValidationStatuses
  );
  const [validBtnDisabled, setValidBtnDisabled] = useState(false);
  const [balance, setBalance] = useState(BigInt(0));
  const [address, setAddress] = useState("");
  const { signer, contract, getBalance } = useWeb3();

  useEffect(() => {
    setAddress(signer.address);

    (async () => {
      setBalance(await getBalance());
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signer.address]);

  const handleSignMessageSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const connectedContract = contract.connect(signer);
    await connectedContract.write(await signer.signMessage(data.message));

    setValidBtnDisabled(true);
  };

  const handleSignedMessageSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const signedMessage = await contract.read();

    setData((prev) => ({ ...prev, signedMessage }));
    setValidBtnDisabled(false);
  };

  const handleValidateClick = async () => {
    const hashedMessage = hashMessage(data.message);

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

  return {
    data,
    validationStatus,
    balance,
    address,
    validBtnDisabled,
    handleSignMessageSubmit,
    handleSignedMessageSubmit,
    handleValidateClick,
    handleChange,
  };
}
