import React from "react";
import Hero from "@/components/Home/Hero";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Project from "@/components/Home/Project";
import Testimonials from "@/components/Home/Testimonials";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Project />
      <Testimonials />
    </>
  );
};

export default Home;
