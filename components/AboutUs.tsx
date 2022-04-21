import React from "react";
import { useApp } from "../contexts";
import { BsQuestionCircle as IQuestion } from "react-icons/bs";
import { Button } from ".";
import { Features } from ".";

const AboutUs = () => {
  const { name } = useApp();
  return (
    <section className="py-10 bg-accent mt-5" id="About">
      <div className="md:max-w-screen-lg md:m-auto ">
        <div className="sm:grid place-items-center grid-cols-2">
          <div className="hidden sm:block col-start-1 col-end-2">
            <IQuestion className="color-primary text-9xl" />
          </div>
          <div className="sm:col-start-2 sm:col-end-3 w-full sm:w-fit px-5 sm:px-0 flex flex-col justify-center items-center sm:justify-start sm:items-start">
            <h1 className="font-bold text-2xl mb-4">What is {name}?</h1>
            <p>
              {name} is truly a token for the masses. It is built for simplicity
              of usage and security.
            </p>
            <p className="mt-2">
              Not only is it safe but it also has a built-in reward mechanism.
              This allows stakeholders to earn rewards without staking the
              token. It truly doesn't get better than this!
            </p>
            <Button text="Buy Token with 10% Bonus" className="mt-5 bg-trans" />
          </div>
        </div>
      </div>
      <Features />
    </section>
  );
};

export default AboutUs;
