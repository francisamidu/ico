import React from "react";
import { Button } from ".";
import Image from "next/image";
import { serializeDate, uid } from "../helpers";
import { VscArrowRight as IArrow } from "react-icons/vsc";

const blogItems = [
  {
    id: uid(),
    title: "OpenSea,Solana NFT support",
    text: "OpenSea has officially announced Solana NFT support today. After months of rumours, the popular marketplace has announced support for NFTs from the Solana blockchain.",
    date: new Date("2022-04-01"),
    image: "/bg.jpg",
  },
  {
    id: uid(),
    title: "Uniswap, 2.7B user mark",
    text: "The popular decentralised exchange protocol, Uniswap has crossed the 2.7 Billion users. This comes after large AMM adoption by major players",
    date: new Date("2022-03-01"),
    image: "/bg.jpg",
  },
  {
    id: uid(),
    title: "Bitcoin, $44,000 price point",
    text: "Bitcoin has again broken records by reaching high price points. This comes after the Russia-Ukraine war takes its toll on the crypto economy.",
    date: new Date("2022-03-01"),
    image: "/bg.jpg",
  },
];
const Blog = () => {
  return (
    <section className="bg-primary py-12 px-4">
      <h1 className="font-bold text-sm text-white text-center">
        Latest Crypto News
      </h1>
      <h2 className="text-3xl mb-4 text-[#f0f0f0] text-center">Blogs</h2>
      <div className="md:max-w-screen-lg md:mx-auto px-5 flex flex-col sm:flex-row items-center sm:items-start justify-center mt-10 flex-1">
        {blogItems.map((item, index) => (
          <div
            key={item.id}
            className={`
                    border-[1.5px] border-transparent hover:border-blue-400 blog-item max-w-[350px] min-h-[500px] mb-4 ml-0 sm:mb-0 rounded-md bg-[#013864] ${
                      index > 0 ? "sm:ml-5" : undefined
                    } flex-1 flex flex-col 
                    `}
          >
            <Image
              src={item.image}
              layout="intrinsic"
              width="500"
              height="300"
              className="w-full"
            />
            <div className="flex flex-row item-center justify-between mt-1 px-2">
              <span className="text-[#ddd]">{serializeDate(item.date)}</span>
              <span className="text-[#ddd]">By Unknown</span>
            </div>
            <div className="mt-2 flex-1 flex flex-col justify-between p-2">
              <h1 className="font-bold text-xl capitalize text-[#0479d8]">
                {item.title}
              </h1>
              <p className="text-[#eee]">{item.text}</p>
              <Button
                text="Read More"
                className="mt-4 bt-blue bg-transparent text-white border-white border-2 justify-self-end hover:bg-white hover:text-[#03467c]"
                right={true}
                icon={<IArrow className="text-white ml-2" />}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
