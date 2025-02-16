import React from "react";
import Hero from "@/components/Home/Hero";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Project from "@/components/Home/Project";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Project />
    </>
  );
};

export default Home;
