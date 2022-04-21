import React, { useState } from "react";
import { uid } from "../helpers";

import {
  BsDiscord as IDiscord,
  BsFacebook as IFacebook,
  BsTwitter as ITwitter,
  BsLinkedin as ILinkedin,
  BsQuestionCircle as IQuestion,
} from "react-icons/bs";
import { useApp } from "../contexts";
import Link from "next/link";
import { Button } from ".";

const Footer = () => {
  const { name, year } = useApp();
  const [socials, setSocials] = useState([
    {
      id: uid(),
      icon: <IFacebook className="text-3xl text-white" />,
      link: "http://www.facebook.com/perruna-token-1",
    },
    {
      id: uid(),
      icon: <ILinkedin className="text-3xl text-white" />,
      link: "http://www.linkedin.com/perruna-token",
    },
    {
      id: uid(),
      icon: <ITwitter className="text-3xl text-white" />,
      link: "http://www.twitter.com/perrunatoken",
    },
    {
      id: uid(),
      icon: <IDiscord className="text-3xl text-white" />,
      link: "http://www.discord.com/perrunatoken",
    },
  ]);
  const [links, setLinks] = useState([
    {
      id: uid(),
      path: "/about",
      name: "About Us",
    },
    {
      id: uid(),
      path: "/features",
      name: "Features",
    },
    {
      id: uid(),
      path: "/blog",
      name: "Blogs",
    },
    {
      id: uid(),
      path: "/contact",
      name: "Contact Us",
    },
    {
      id: uid(),
      path: "/help-center",
      name: "Help Center",
    },
    {
      id: uid(),
      path: "/legal",
      name: "Legal",
    },
    {
      id: uid(),
      path: "/security",
      name: "Security",
    },
    {
      id: uid(),
      path: "/support",
      name: "Support",
    },
    {
      id: uid(),
      path: "https://www.etherscan.com/address/0x00#code",
      name: "Etherscan",
    },
    {
      id: uid(),
      path: "/cookie-settings",
      name: "Cookie Settings",
    },
    {
      id: uid(),
      path: "/investors",
      name: "Investors",
    },
    {
      id: uid(),
      path: "/careers",
      name: "We're Hiring!",
    },
  ]);
  return (
    <section className="bg-primary">
      <footer className="md:max-w-screen-xl md:mx-auto">
        <div className="flex flex-col sm:flex-row justify-between py-4 px-4 ">
          <div className="py-4 flex-1 pr-6 mr-2">
            <h1 className="text-2xl font-bold mb-4 text-white">{name}</h1>
            <p className="my-4 text-[#eee]">
              Ramp up your crypto profile with our finest token. {name} follows
              the popular ERC20 token standard so rest assured it can be
              interoperable with other prominent coins.
            </p>
            <div className="flex flex-row items-center justify-start">
              {socials.map((social) => (
                <a key={social.id} href={social.link} className="w-fit mr-8">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex-2 flex flex-col sm:flex-row items-start">
            <div className="py-4 flex-1">
              <h2 className="font-bold uppercase text-white mb-4">Company</h2>
              <div className="flex flex-col">
                {links.slice(0, 5).map((link) => (
                  <Link href={link.path} key={link.id}>
                    <a className="text-[#ddd] hover:text-white transition-colors duration-200 capitalize w-fit mb-2">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-4 flex-1">
              <h2 className="font-bold uppercase text-white mb-4">Resources</h2>
              <div className="flex flex-col">
                {links.slice(5, 10).map((link) => (
                  <Link href={link.path} key={link.id}>
                    <a className="text-[#ddd] hover:text-white transition-colors duration-200 capitalize w-fit mb-2">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-4 flex-1">
              <h2 className="font-bold uppercase text-white mb-4">
                Quick Links
              </h2>
              <div className="flex flex-col">
                {links.slice(9, undefined).map((link, index) =>
                  index === 0 ? (
                    <a
                      className="text-[#ddd] hover:text-white transition-colors duration-200 capitalize w-fit mb-2"
                      href={link.path}
                    >
                      {link.name}
                    </a>
                  ) : link.path.includes("careers") ? (
                    <Link href={link.path} key={link.id}>
                      <a className="text-[#ddd] hover:text-white transition-colors duration-200 capitalize mb-2 w-fit">
                        {link.name}
                        <span className="bg-primary-accent ml-2 px-2 py-1 font-bold uppercase text-xs">
                          New
                        </span>
                      </a>
                    </Link>
                  ) : (
                    <Link href={link.path} key={link.id}>
                      <a className="text-[#ddd] hover:text-white transition-colors duration-200 capitalize mb-2 w-fit">
                        {link.name}
                      </a>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary py-1 px-4 flex flex-row items-center justify-between w-full mt-4">
          <div className="flex flex-row">
            <p className="text-white">
              &copy;
              <span className="ml-2 text-white">{name} LLC</span>
            </p>
            <Link href="/privacy-policy">
              <a className="px-4 ml-3 mr-1 border-r-2 border-[#eee] text-[#eee] text-white transition-colors duration-200 text-sm ">
                Privacy
              </a>
            </Link>
            <Link href="/terms-of-service">
              <a className="px-4 ml-1 text-[#eee] text-white transition-colors duration-200 text-sm ">
                Terms
              </a>
            </Link>
          </div>
          <Button
            text="Help"
            className="bg-blue-accent border-transparent mt-0 rounded-3xl h-10"
            left={true}
            icon={<IQuestion className="text-secondary text-1xl mr-2" />}
          />
        </div>
      </footer>
    </section>
  );
};

export default Footer;
