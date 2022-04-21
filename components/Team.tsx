import React from "react";
import Image from "next/image";
import { uid } from "../helpers";

const team = [
  {
    id: uid(),
    name: "Kal Wardin",
    avatar: "/guy-in-yellow.jpeg",
    role: "CEO",
  },
  {
    id: uid(),
    name: "Carlina Keeks",
    avatar: "/girl-wearing-headsets.jpeg",
    role: "Lead HR",
  },
  {
    id: uid(),
    name: "Sandra Li",
    avatar: "/woman-shopping.jpeg",
    role: "Project Director",
  },
];
const Team = () => {
  return (
    <section className="bg-accent py-12 px-4 overflow-x-hidden">
      <h1 className="font-bold text-sm text-center">
        Meet Our Core Team Members
      </h1>
      <h2 className="text-3xl mb-4 text-center">Team</h2>
      <div className="md:max-w-screen-lg md:mx-auto px-5 flex flex-row items-center justify-center mt-10">
        {team.map((item, index) => (
          <div key={item.id} className={`${index > 0 && "ml-5"} text-center`}>
            <Image
              height="150"
              width="150"
              className="rounded-full"
              src={item.avatar}
            />
            <h3 className="text-md font-bold">{item.name}</h3>
            <h4 className="text-md">{item.role}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
