import {
  InfuraProvider,
  Wallet,
  Contract,
  _signedMessage,
  _accountAddress,
  _fakeAddress,
} from "./types";

export const ethers = {
  providers: {
    InfuraProvider,
  },
  Wallet,
  utils: {
    formatEther: function (wei: bigint): string {
      // rounded to floor, accuracy = 1
      const ethToWei = BigInt(Math.pow(10, 18));

      const str = String(wei);
      if (str.length > 18) {
        return String(wei / ethToWei);
      }

      const delta = Math.pow(10, 19 - str.length);
      const deltaBigInt = BigInt(delta);
      return String(Number((wei * deltaBigInt) / ethToWei) / delta);
    },
    recoverAddress: function (digest: string, signature: string): string {
      return signature === _signedMessage && digest === "HASHED_MESSAGE"
        ? _accountAddress
        : _fakeAddress;
    },
  },
  Contract,
};
