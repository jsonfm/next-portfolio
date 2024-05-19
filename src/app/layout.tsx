import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Layout } from "@/layouts/default";
import { DrawerContextProvider } from "@/context/drawer";
import "./globals.css";

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
      <GoogleAnalytics gaId="G-T04T57NDVE" />
      <DrawerContextProvider>
        <body className={`overflow-x-hidden`}>
          <Layout>{children}</Layout>
        </body>
      </DrawerContextProvider>
    </html>
  );
}
