"use client";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {/* <SocialBarContact /> */}
      <main className="overflow-x-hidden min-h-[60vh]">
        <div className="gradient-1"></div>
        {children}
      </main>
      <Footer />
    </>
  );
};
