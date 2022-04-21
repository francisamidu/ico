import { differenceInSeconds, subDays } from "date-fns";
import React, { useState } from "react";
import { serializeDate, uid } from "../helpers";

const RoadMap = () => {
  const [dates, setDates] = useState([
    {
      id: uid(),
      startDate: new Date("2022-01-01"),
      endDate: new Date("2022-04-30"),
      text: "ICO Pre-Sale",
    },
    {
      id: uid(),
      startDate: new Date("2022-05-01"),
      endDate: new Date("2022-05-30"),
      text: "ICO Post-Sale",
    },
    {
      id: uid(),
      startDate: new Date("2022-06-01"),
      endDate: new Date("2022-06-05"),
      text: "Holders wallets credited",
    },
    {
      id: uid(),
      startDate: new Date("2022-06-06"),
      endDate: new Date("2022-06-29"),
      text: "DAO formation",
    },
    {
      id: uid(),
      startDate: new Date("2022-06-29"),
      endDate: new Date("2022-06-30"),
      text: "Funding completed",
    },
  ]);
  return (
    <section className="bg-secondary py-12 px-4 min-w-xl overflow-x-auto">
      <div className="md:max-w-screen-lg md:mx-auto w-[1024px] sm:w-full">
        <div className="w-full px-5">
          <h1 className="font-bold text-sm text-white">This is our place </h1>
          <h2 className="text-3xl mb-4 text-[#f0f0f0]">Roadmap</h2>
          <div className="flex flex-row items-center border-[#eee] text-[#eee] my-10 py-10 relative w-full">
            {dates.map((date, index) => (
              <div
                className={`${index > 0 && "pl-4"} 
                ${
                  differenceInSeconds(new Date(), date.endDate, {
                    roundingMethod: "ceil",
                  }) && "border-b-[#03467c]"
                }
                 roadmap-item flex flex-col border-b border-b-[#ccc]`}
                key={date.id}
              >
                <p className="dates font-bold">
                  <span className="mr-1 text-[#f0f0f0]">
                    {serializeDate(date.startDate)}
                  </span>{" "}
                  {" -> "}
                  <span className="ml-1 text-[#f0f0f0]">
                    {serializeDate(date.endDate)}
                  </span>
                </p>
                <p className="text text-[#f0f0f0] w-fit -mb-8 mt-3">
                  {date.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
