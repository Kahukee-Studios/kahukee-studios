"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ThemeButton } from "@/components/ThemeButton";
import Banner from "@/components/Banner";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Banner />
      <header className="bg-background text-foreground">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="Kahukee Studios Logo"
                src="/logo.png"
                className="h-8 w-auto"
                width={75}
                height={75}
              />
            </Link>
          </div>
          <div className="flex lg:hidden items-center gap-x-2">
            <ThemeButton />
            <Button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground bg-transparent variant='ghost'"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </Button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/home"
              className="text-sm/6 font-semibold text-foreground"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm/6 font-semibold text-foreground"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm/6 font-semibold text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-sm/6 font-semibold text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm/6 font-semibold text-foreground"
            >
              Contact
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
            <ThemeButton />
            <Link href="#" className="text-sm/6 font-semibold text-foreground">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/home" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  alt="Kahukee Studios Logo"
                  src="/logo.png"
                  className="h-8 w-auto"
                  width={75}
                  height={75}
                />
              </Link>
              <Button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-foreground bg-transparent variant='ghost'"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  <Link
                    href="/home"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-muted"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-muted"
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-muted"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-muted"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-muted"
                  >
                    Contact
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-foreground hover:bg-muted"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
