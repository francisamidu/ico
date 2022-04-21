import React from "react";
import { Button } from ".";
import Image from "next/image";
import {
  BsCheckCircleFill as ICheckCircle,
  BsQuestionCircle as IQuestion,
  BsBuilding as IIcon,
} from "react-icons/bs";

const Phase1 = () => {
  return (
    <section className="py-8 px-4 bg-accent" id="Vision">
      <div className="md:max-w-screen-lg md:m-auto flex flex-col">
        <Button
          text="Help"
          className="btn-blue mt-0 rounded-3xl self-end"
          left={true}
          icon={<IQuestion className="text-white text-[1.30rem] mr-2" />}
        />
        <div className="sm:grid place-items-center grid-cols-2">
          <div className="sm:col-start-1 sm:col-end-2 w-full sm:w-fit px-5 sm:px-0 flex flex-col justify-center items-center sm:justify-start sm:items-start row-start-1">
            <h1 className="font-bold text-sm">How Phase 1 will go</h1>
            <h2 className="text-3xl mb-4">Phase 1</h2>
            <p>
              The world economy has been rough lately. Heavily affected by wars
              and the pandemic, It is clear that we need crypto currencies more
              that anything.
            </p>
            <p className="mt-2">
              Here is how round 1 of the funding will go:
              <ul>
                <li className="flex flex-row items-center mb-1">
                  <ICheckCircle className="text-color mr-2" />
                  First Pre-Sale(this one)
                </li>
                <li className="flex flex-row items-center mb-1">
                  <ICheckCircle className="text-color mr-2" />
                  Closing of the pre-sale(no coins funded yet)
                </li>
                <li className="flex flex-row items-center mb-1">
                  <ICheckCircle className="text-color mr-2" />
                  After the pre-sale all the investors will receive their coins
                </li>
              </ul>
            </p>
            <Button text="Buy Token with 10% Bonus" className="mt-5 bg-trans" />
          </div>
          <div className="hidden sm:block col-start-2 col-end-3 row-start-1">
            <IIcon className="text-9xl color-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phase1;
