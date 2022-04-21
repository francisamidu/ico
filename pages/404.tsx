import React from "react";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import { Button } from "../components";
import { AiFillHome as IHome } from "react-icons/ai";

const NotFoundPage = (props: any) => {
  const redirectHome = () => {
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>404 - It appears youre lost</title>
      </Head>
      <main className="min-h-screen w-full">
        <section className="grid place-items-center">
          <div className="flex flex-col md:flex-row items-center justify-center mt-5">
            <div className="relative">
              <Image
                src="/lost-boy.jpg"
                width="500"
                height="500"
                layout="intrinsic"
              />
            </div>
            <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start px-4 sm:px-0">
              <h1 className="bg-[#00000015] p-3 rounded-xl w-fit">
                Page not found
              </h1>
              <h2 className="mt-2 text-2xl font-bold">Oh No! Error 404</h2>
              <p className="mt-2 text-[#999] text-center sm:text-left">
                It appears you're lost. Lets get you back to civilization before
                its too late
              </p>
              <Button
                text="Go back home"
                className="mt-4 btn"
                icon={<IHome className="ml-3 text-white"></IHome>}
                onClick={redirectHome}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
