"use client";
import React, { ReactNode, useEffect } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <>
      <Header />
      <main className="overflow-x-hidden min-h-[50vh]">{children}</main>
      <Footer />
    </>
  );
};
