import React from "react";

import Image from "next/image";

const images = [
  "/coinmarketcap.png",
  "/defiprime.png",
  "/ethereum.png",
  "/etherscan.png",
  "/medium.png",
];
const Featured = () => {
  return (
    <section className="flex flex-row items-center justify-center sm:-mt-14">
      <div className="py-4 px-6 rounded-md drop-shadow w-fit">
        <h1 className="text-sm font-bold uppercase text-[#555] text-center">
          Featured In
        </h1>
        <div className="py-4 px-6 flex flex-row items-center justify-center mt-4">
          {images.map((img, index) => (
            <div className={index > 0 && "ml-4"} key={index}>
              <Image height="70" width="170" src={img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
