"use client";

import React from "react";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function About() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-5xl text-center font-bold tracking-tight sm:text-6xl">
          About Us
        </h2>
        <div className="flex mt-6 justify-center">
          <div className="w-20 h-1 rounded-full bg-primary inline-flex mb-12"></div>
        </div>

        <div className="max-w-5xl mx-auto bg-card p-10 rounded-2xl shadow-lg text-center border border-border">
          <h2 className="text-3xl font-semibold text-card-foreground">
            <u>How It Started</u>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our journey began with a vision to revolutionize the digital
            landscape. From a small workspace with a passionate team, we have
            grown into a leading force in the industry, delivering impactful
            solutions to clients worldwide.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card p-10 rounded-2xl shadow-lg text-center border border-border mt-10">
          <h2 className="text-3xl font-semibold text-card-foreground">
            <u>Our Mission</u>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We are committed to driving innovation by developing cutting-edge
            technology that enhances lives and simplifies everyday tasks. Our
            goal is to create seamless digital experiences, ensuring that our
            products empower individuals and businesses alike.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card p-10 rounded-2xl shadow-lg text-center border border-border mt-10">
          <h2 className="text-3xl font-semibold text-card-foreground">
            <u>Our Goals</u>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            - Foster a culture of continuous learning and innovation.
            <br />- Expand our reach across industries and global markets.
            <br />- Develop user-centric solutions that drive efficiency and
            engagement.
            <br />- Uphold ethical practices and inclusivity in all aspects of
            our work.
            <br />- Collaborate with forward-thinking minds to create meaningful
            change.
          </p>
        </div>
      </div>
      <WhyChooseUs />
    </section>
  );
}
