import Web3Form from "../components/Web3Form";
import MainLayout from "../layouts/MainLayout";

/*
 ** Web3 page should display account address, balance and finished form
 **
 ** 1. Get account address
 ** 2. Get account balance
 ** 3. Sign a message
 ** 4. Call a state-changing contract method to save the signed message on the network
 ** 5. Call a contract method to read previously signed message
 ** 6. Validate the message signature
 */

export default function Web3Page() {
  return (
    <MainLayout>
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">Web3 page</h1>
        <Web3Form />
      </section>
    </MainLayout>
  );
}
