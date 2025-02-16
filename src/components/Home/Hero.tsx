import type React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <div className="relative z-10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:w-[72rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
          <div className="sm:mb-8 flex justify-center">
            <div className="relative rounded-full px-4 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-primary">
              Elevate your online presence.{" "}
              <Link href="/about" className="font-semibold text-primary">
                Learn how <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Crafting Digital Success for Your Business
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl sm:max-w-2xl mx-auto">
              We create stunning e-commerce websites and powerful online
              platforms that drive business growth. Let us elevate your digital
              presence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto px-6 py-3">
                  Get started
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto text-foreground hover:text-primary"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-20 sm:w-[72rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
