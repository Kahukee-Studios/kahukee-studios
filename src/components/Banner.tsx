import { XMarkIcon } from "@heroicons/react/20/solid";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-100 dark:bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 flex justify-center"
      >
        <div className="w-[80vw] h-[40vh] bg-gradient-to-r from-primary to-secondary opacity-40 blur-3xl"></div>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          <strong className="font-semibold">🚀 Big Announcement</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          We are launching something exciting soon! Stay tuned.
        </p>
        <Link
          href="#"
          className="flex-none rounded-full bg-primary px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Learn More <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="flex flex-1 justify-end">
        <Button
          type="button"
          className="-m-3 p-3 bg-primary focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon
            aria-hidden="true"
            className="size-5 text-gray-900 dark:text-white"
          />
        </Button>
      </div>
    </div>
  );
}
