"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return null;
}

RedirectPage.getInitialProps = (ctx: {
  res?: { writeHead: (code: number, headers: object) => void; end: () => void };
}) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: "/home" });
    ctx.res.end();
  }
  return {};
};
