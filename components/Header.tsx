import React from "react";
import { useApp } from "../contexts";
import Button from "./Button";
import router from "next/router";
import { CountdownCard, Nav } from ".";

const Header = () => {
  const { name } = useApp();
  return (
    <section className="min-h-screen header sm:px-0 px-2">
      <div className="bg-blue-200 py-2 text-center cursor-pointer hidden sm:block">
        <span className="font-bold">
          Want to know more about our token? Get started by clicking here
        </span>
      </div>
      <Nav />
      <div className="md:max-w-screen-[1100px] md:mx-auto flex flex-col md:flex-row justify-center pt-6 mt-20">
        <div className="sm:w-1/2 sm:-mr-4 sm:text-left text-center ">
          <h1 className="font-bold text-4xl md:w-4/5 color-accent-secondary">
            A community-backed cryptocurrency you can definitely rely on
          </h1>
          <p className="my-3 md:w-4/5 text-color">
            Investing in a full featured digital currency like Perruna is a
            better way to represent your money.
          </p>
          <div className="flex flex-row items-center justify-center sm:justify-start mt-3">
            <Button text="Buy Perruna" className="mr-2 btn" />
            <Button text="Read Whitepaper" className="ml-2 bg-none border-2" />
          </div>
          <p className="text-[#677a92] sm:mt-3 my-5">
            Get 10% bonus if you purchase before the pre-sale ends
          </p>
        </div>
        <CountdownCard />
      </div>
    </section>
  );
};

export default Header;
