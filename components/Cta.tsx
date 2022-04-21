import React from "react";
import { Button } from ".";

const Cta = () => {
  return (
    <section className="p-12 bg-white">
      <div className="md:max-w-screen-lg m-auto flex flex-col  items-center justify-center text-center">
        <h1 className="color-primary capitalize text-3xl font-bold w-full sm:w-3/5">
          Don't be a stranger, We always love to hear from you.
        </h1>
        <Button text="Contact Us" className="mt-4" />
      </div>
    </section>
  );
};

export default Cta;
