import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Team from "../components/Team";
import Solutions from "../components/Solutions";
import Contact from "../components/Contact";
import WhatWeDo from "../components/WhatWeDo";
import IndustriesWeServe from "../components/IndustriesWeServe";
import Header from "../components/Header";



export default function Home() {
  return (
    <>
    <Header/>
      <Hero />
      <Overview />
      <Team />
      <Solutions />
       <WhatWeDo/>
       <IndustriesWeServe/>
      <Contact />

    </>
  );
}
