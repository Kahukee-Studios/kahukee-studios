import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function NewsLetterSection() {
  return (
    <div className="relative isolate overflow-hidden bg-background py-16 sm:py-20 lg:py-24 text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Want news and updates?
              <br />
              Sign up for our newsletter.
            </h2>
          </div>
          <div className="w-full max-w-md">
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <Label htmlFor="email-address" className="sr-only">
                Email address
              </Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full sm:flex-auto rounded-md bg-input px-4 py-3 text-base outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary sm:text-sm"
              />
              <Button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-white bg-primary rounded-md"
              >
                Subscribe
              </Button>
            </form>
            <p className="mt-3 text-sm text-muted-foreground">
              We care about your data. Read our{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
