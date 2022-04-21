import React, { useState } from "react";
import { uid } from "../helpers";
import { useApp } from "../contexts";
import Link from "next/link";
import { IoMenu as IMenu } from "react-icons/io5";
import { IoIosWallet as IIcon } from "react-icons/io";
import { Button } from ".";

const Nav = () => {
  const [links, setLinks] = useState([
    {
      active: true,
      id: uid(),
      path: "/",
      text: "Home",
    },
    {
      active: false,
      id: uid(),
      path: "#about",
      text: "About",
    },
    {
      active: false,
      id: uid(),
      path: "#roadmap",
      text: "Roadmap",
    },
    {
      active: false,
      id: uid(),
      path: "#vision",
      text: "Vision",
    },
    {
      active: false,
      id: uid(),
      path: "#team",
      text: "Team",
    },
    {
      active: false,
      id: uid(),
      path: "#faq",
      text: "FAQ",
    },
    {
      active: false,
      id: uid(),
      path: "#contact",
      text: "Contact",
    },
  ]);
  const { name } = useApp();
  const setLinkState = (id: string) => {
    setLinks(
      links.map((link) => {
        if (link.id === id) {
          link.active = true;
        } else {
          link.active = false;
        }
        return link;
      })
    );
  };
  const [showMenu, setShowMenu] = useState(false);
  return (
    <section className="bg-transparent">
      <div className="md:max-w-screen-xl md:mx-auto relative">
        <nav className="flex flex-row items-center justify-between py-[0.2rem] px-6">
          <h1 className="font-bold text-2xl color-primary">{name}</h1>
          <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center">
            {links.map((link) => (
              <Link href={link.path} key={link.id}>
                <a
                  className={`transition-colors relative duration-300 font-bold text-md py-1 mr-5 border-t-2 border-transparent text-color ${
                    link.active && "color-secondary"
                  }`}
                  onClick={() => setLinkState(link.id)}
                >
                  {link.text}
                </a>
              </Link>
            ))}
          </div>
          {showMenu && (
            <div className="flex flex-col bg-white z-index-10 absolute top-14 right-0 p-4 shadow rounded-md transition-all duration-200">
              {links.map((link) => (
                <Link href={link.path} key={link.id}>
                  <a
                    className="transition-colors relative duration-300 text-md py-1 mr-5"
                    onClick={() => setLinkState(link.id)}
                  >
                    {link.text}
                  </a>
                </Link>
              ))}
              <Button
                text="Connect Wallet"
                className="btn mt-0"
                right={true}
                icon={<IIcon className="text-2xl ml-2 text-white" />}
              />
            </div>
          )}
          <Button
            text="Connect Wallet"
            className="hidden sm:flex btn mt-0"
            right={true}
            icon={<IIcon className="text-2xl ml-2 text-white" />}
          />
          <IMenu
            className="text-2xl color-primary block sm:hidden top-4 right-2 cursor-pointer absolute"
            onClick={() => setShowMenu(!showMenu)}
          />
        </nav>
      </div>
    </section>
  );
};

export default Nav;
