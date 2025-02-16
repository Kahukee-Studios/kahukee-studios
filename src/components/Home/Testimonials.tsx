import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Testimonials = () => {
  return (
    <section className="relative isolate overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/20),transparent)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl ring-1 ring-border/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Card>
          <CardContent>
            <blockquote className="text-center text-xl/8 font-semibold text-foreground sm:text-2xl/9 mt-5">
              <p>
                &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nemo expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.&quot;
              </p>
            </blockquote>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center">
            <figcaption className="mt-10">
              <div className="flex items-center justify-center">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-foreground">
                  Judith Black
                </div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-foreground"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-muted-foreground">CEO of Workcation</div>
              </div>
            </figcaption>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;
