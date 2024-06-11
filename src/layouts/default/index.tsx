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
      <link
        rel="icon"
        href="/favicons/android-chrome-192x192.png"
        type="image/png"
        sizes="192x192"
      />
      <link
        rel="icon"
        href="/favicons/android-chrome-512x512.png"
        type="image/png"
        sizes="512x512"
      />
      <link
        rel="icon"
        href="/favicons/favicon-16x16.png"
        type="image/png"
        sizes="16x16"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        type="image/png"
        href="/favicons/apple-touch-icon.png"
      />
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
