export const _accountAddress = "0x32fA4FcA6f2c4AD4E2bf3aD18874ba4d585A7c4D",
  _fakeAddress = "0xe1Ce46BAcc38D2E86EEfc691623FEAE10a5d742D";
export const _signedMessage = "0xSIGNED_MESSAGE";
const _ethBalance = 0.5;

export class Contract {
  constructor(
    addressOrName: string,
    contractInterface: string[],
    signerOrProvider?: InfuraProvider
  ) {}

  private _message = "";

  connect(signerOrProvider: Wallet): Contract {
    return this;
  }

  async read(): Promise<any> {
    return this._message;
  }

  async write(message: string): Promise<void> {
    this._message = message;
  }
}

export class Wallet {
  constructor(privateKey: string, provider: InfuraProvider) {}

  address = _accountAddress;
  static originMessage: string;

  connect(provider: InfuraProvider): Wallet {
    return this;
  }

  async signMessage(message: string): Promise<string> {
    Wallet.originMessage = message;

    return _signedMessage;
  }
}

export class InfuraProvider {
  constructor(network?: string, apiKey?: string) {}

  async getBalance(addressOrName: string | Promise<string>): Promise<bigint> {
    return BigInt(Math.pow(10, 18) * _ethBalance);
  }
}
