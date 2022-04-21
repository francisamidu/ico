import React, { useEffect, useState } from "react";
import { formatCurrency, formatDate } from "../helpers";
import Button from "./Button";

const ICOCountdownCard = () => {
  useEffect(() => {
    const tempNumbers = formatDate(new Date(2022, 5, 5));
    setTimestamp([
      tempNumbers[0],
      tempNumbers[1] > 24 ? 24 : tempNumbers[1],
      tempNumbers[2] > 60 ? 60 : tempNumbers[2],
      tempNumbers[3] > 60 ? 60 : tempNumbers[3],
    ]);
  }, []);
  const [timestamp, setTimestamp] = useState<number[]>([]);
  const total = Number(timestamp.join(""));
  const raised = total / 3;
  const remaining = total - raised;
  return (
    <div className="rounded-md p-5 bg-primary sm:w-1/3 w-full">
      <h1 className="countdown-heading text-white  font-bold uppercase text-center relative">
        ICO Pre-Sale is Live
      </h1>
      <h2 className="mt-3 text-white  text-xs text-center uppercase">
        Ends In:
      </h2>
      <div className="flex flex-row items-center justify-center my-7">
        {timestamp.map((t, index) => (
          <div
            key={t * (index * 1)}
            className={`py-2 px-3 flex-1 bg-secondary rounded mr-3 ${
              timestamp.length - index === 0 && "mr-0"
            } flex flex-col text-center`}
          >
            <span className="font-bold text-2xl text-white">{t}</span>
            {index === 0 ? (
              <span className="mt-2 text-white">Days</span>
            ) : index === 1 ? (
              <span className="mt-2 text-white">Hours</span>
            ) : index === 2 ? (
              <span className="mt-2 text-white">Minutes</span>
            ) : (
              <span className="mt-2 text-white">Seconds</span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center justify-between mb-4 w-full">
            <p className="flex flex-row items-center">
              <span className="text-white">Sold:</span>
              <span className="ml-2 font-bold text-white">
                {formatCurrency(raised)}
              </span>
            </p>
            <p className="flex flex-row items-center">
              <span className="text-white">Remaining:</span>
              <span className="ml-2 font-bold text-white">
                {formatCurrency(remaining)}
              </span>
            </p>
          </div>
          <div className="progress-bar"></div>
        </div>
        <div className="flex flex-row items-center justify-center my-5">
          <Button text="Buy Perruna" className="bg-blue-accent border-2" />
        </div>
      </div>
    </div>
  );
};

export default ICOCountdownCard;
