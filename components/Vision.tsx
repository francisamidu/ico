import React from "react";
import { Button } from ".";
import { useApp } from "../contexts";
import { BsAward as IIcon } from "react-icons/bs";

const Vision = () => {
  const { name } = useApp();
  return (
    <section className="py-8 bg-accent" id="Vision">
      <div className="md:max-w-screen-lg md:m-auto ">
        <div className="sm:grid place-items-center grid-cols-2">
          <div className="sm:col-start-1 sm:col-end-2 w-full sm:w-fit px-5 sm:px-0 flex flex-col justify-center items-center sm:justify-start sm:items-start row-start-1">
            <h1 className="font-bold text-sm">What we aim to accomplish</h1>
            <h2 className="text-3xl mb-4">Our Vision</h2>
            <p>
              The {name} digital currency aims to create a free trustless
              digital payment system.
            </p>
            <p className="mt-2">
              By utilizing advanced modern technologies like the blockchain we
              are able to create a payment eco-system thats fast,secure and most
              importantly reliable. Your hard earned money is safe with us. No
              scams, no rugpulls period.
            </p>
            <Button text="Buy Token with 10% Bonus" className="mt-5 bg-trans" />
          </div>
          <div className="hidden sm:block col-start-2 col-end-3 row-start-1">
            <IIcon className="color-primary text-9xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
