import React from "react";
import { Button } from ".";
import { useApp } from "../contexts";
import { BsInfoCircle as IInfoCircle } from "react-icons/bs";

const HowItWorks = () => {
  const { name } = useApp();
  return (
    <section className="py-8 bg-white">
      <div className="md:max-w-screen-lg md:m-auto ">
        <div className="sm:grid place-items-center grid-cols-2">
          <div className="hidden sm:block col-start-1 col-end-2">
            <IInfoCircle className="color-primary text-9xl" />
          </div>
          <div className="sm:col-start-2 sm:col-end-3 w-full sm:w-fit px-5 sm:px-0 flex flex-col justify-center items-center sm:justify-start sm:items-start row-start-1">
            <h1 className="font-bold text-sm">How our token works</h1>
            <h2 className="text-3xl mb-4">How does it work</h2>
            <p>
              {name} is a digital currency for the masses. By utilizing advanced
              modern technologies like the blockchain we are able to create a
              payment eco-system thats fast,secure and most importantly
              reliable.
            </p>
            <p className="mt-2">
              Apart from that we can also guarantee safe transactions (away from
              prying eyes) and extremely fast payments. You want to send money
              to someone in Ukraine? Our token is the fastest and most reliable
              way to do that.
            </p>
            <Button text="Buy Token with 10% Bonus" className="mt-5 bg-trans" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
