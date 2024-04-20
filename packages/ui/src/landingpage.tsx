import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className=" overflow-hidden bg-white">
      <div className="landing-page items-center justify-center min-h-screen">
        <div className="h-[100vh] my-10 relative">
          {/* Image */}
          <div className="absolute w-[70%] rounded-2xl top-[-10px] inset-0 z-20 ml-[650px] flex items-center justify-center">
            <img
              src="https://images.ctfassets.net/gkyt4bl1j2fs/5up9qIIl3KjCbKRNTo4rA0/dc90bd5478ba48d4109c54965c61f95b/home-hero.png?w=1600&h=1230&q=50&fm=webp&bg=transparent"
              alt="Background"
              className="h-[600px] w-[800px] select-none" // Add select-none class here
            />
          </div>

          {/* Home */}
          <div
            id="home"
            className="h-[100vh] w-[70%] flex flex-col justify-center items-center bg-blue-100 rounded-[70px] ml-[180px] relative z-10 animate-fadeIn"
          >
            <div className="w-[60%] ml-[-400px]">
              <h1 className="text-[95px] font-semibold mb-4">
                Welcome to Paytm Wallet
              </h1>
              <p className="text-[50px] w-[500px] mb-6">
                Your one-stop solution for secure and convenient digital
                transactions.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[110vh] w-[100%] ml-[200px]">
          <div className="max-w-3xl px-4">
            <div className="mt-4 mb-8">
              <h2 className="text-[90px] font-semibold">Pay friends</h2>
            </div>
            <div className="mb-8">
              <p className="text-lg">
                Paytm Wallet makes sending and receiving money feel effortless.
                Seamlessly split everyday expenses, pay bills, and enjoy shared
                activities with your Paytm friends.
              </p>
              <p className="text-lg mt-4">
                Need to send a gift? Keep it hassle-free and add a personal
                touch to any payment with Paytm Wallet.
              </p>
            </div>
          </div>

          <div className="flex my-10">
            <div className="relative mr-[200px] flex-none select-none">
              <img
                src="https://images.ctfassets.net/gkyt4bl1j2fs/1R0HfDB5im05edsPAB21D8/925cf91f6cfc4f30f8c08824e7e26d23/home-pay-friends-left.png?w=801&h=1026&q=50&fm=webp&bg=transparent"
                className="rounded-lg h-[500px]"
                alt="Left Image"
              />
            </div>
            <div className="relative flex-grow select-none">
              <img
                src="https://images.ctfassets.net/gkyt4bl1j2fs/1CIoRAOKgwrwN86R49b5N3/5fa20fb1125e93cd1e02320cf5bfff71/home-pay-friends-right.png?w=1200&h=1200&q=50&fm=webp&bg=transparent"
                className="rounded-lg h-[600px]"
                alt="Right Image"
              />
            </div>
          </div>
        </div>

        {/* <div
          id="how-it-works"
          className="h-screen flex flex-col justify-center items-center bg-gray-200 animate-fadeIn delay-150"
        >
          <h2 className="text-xl font-semibold mb-2">How it Works</h2>
          <ol className="list-decimal pl-6">
            <li>
              Link your bank account (fake bank) to your Paytm Wallet and easily
              add money to your wallet.
            </li>
            <li>
              Send money to your friends and family by simply entering their
              phone number.
            </li>
          </ol>
        </div>
        <div
          id="faq"
          className="h-screen flex flex-col justify-center items-center bg-gray-300 animate-fadeIn delay-150"
        >
          <h2 className="text-xl font-semibold mb-2">FAQ</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Is Paytm Wallet secure?</strong>
              <br />
              Yes, Paytm Wallet uses state-of-the-art encryption technology to
              safeguard your money and personal information.
            </li>
            <li>
              <strong>How do I add money to my Paytm Wallet?</strong>
              <br />
              You can add money to your Paytm Wallet by linking your bank
              account and transferring funds securely.
            </li>
            <li>
              <strong>Can I transfer money to anyone?</strong>
              <br />
              Yes, you can transfer money to anyone with a valid phone number.
              Simply enter their phone number and the amount you wish to
              transfer.
            </li>
          </ul>
        </div>
        <div
          id="contact"
          className="h-screen flex flex-col justify-center items-center bg-gray-400 animate-fadeIn delay-150"
        >
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            Have a question or need assistance? Reach out to our customer
            support team at{" "}
            <a href="mailto:support@paytmwallet.com" className="text-blue-500">
              support@paytmwallet.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:1-800-123-4567" className="text-blue-500">
              1-800-123-4567
            </a>
            .
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default LandingPage;
