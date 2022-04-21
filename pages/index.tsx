import Head from "next/head";
import React from "react";
import {
  Header,
  AboutUs,
  Featured,
  Cta,
  Footer,
  Vision,
  HowItWorks,
  Phase1,
  RoadMap,
  Team,
  Blog,
} from "../components";
import { useApp } from "../contexts";

const App = () => {
  const { name } = useApp();
  return (
    <>
      <Head>
        <title>{name} - A Digital currency for the crypto masses</title>
        <meta name="description" content="A Digital currency for the masses" />
        <meta name="og:name" content={name} />
        <meta name="author" content="Francis Amidu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Featured />
      <AboutUs />
      <Vision />
      <HowItWorks />
      <Phase1 />
      <RoadMap />
      <Team />
      <Blog />
      <Cta />
      <Footer />
    </>
  );
};

export default App;
