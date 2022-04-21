import React from "react";
import { uid } from "../helpers";

import {
  IoLockClosedOutline as ISecurity,
  IoWalletOutline as IWallet,
  IoCashOutline as ICash,
} from "react-icons/io5";

const features = [
  {
    id: uid(),
    title: "100% Secure",
    icon: <ISecurity className="text-5xl text-white mb-2" />,
  },
  {
    id: uid(),
    title: "10% Bonus",
    icon: <IWallet className="text-5xl text-white mb-2" />,
  },
  {
    id: uid(),
    title: "Venture-Backed",
    icon: <ICash className="text-5xl text-white mb-2" />,
  },
];
const Features = () => {
  return (
    <section className="py-8 px-5">
      <div className="md:max-w-screen-lg md:mx-auto">
        <div className="flex flex-col flex-1 sm:flex-row items-center justify-center">
          {features.map((f, index) => (
            <div
              key={f.id}
              className={`feature bg-dark rounded-md p-8 flex-1 min-h-[200px] sm:w-[250px] w-[320px] flex flex-col justify-center items-center ${
                index === 1 ? "sm:mx-4 my-2 sm:my-0" : ""
              } transition duration-200 scale-1`}
            >
              {f.icon}
              <h3 className="font-bold my-2 text-[.75rem] text-white uppercase text-center">
                {f.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
