import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "@/layouts/default";
import "./globals.css";
import { DrawerContextProvider } from "@/context/drawer";

export const metadata: Metadata = {
  title: "Portfolio | @jsonfm",
  description: "Personal Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DrawerContextProvider>
        <body className={`overflow-x-hidden`}>
          <Layout>{children}</Layout>
        </body>
      </DrawerContextProvider>
    </html>
  );
}
