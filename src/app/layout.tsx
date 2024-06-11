import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Layout } from "@/layouts/default";
import { DrawerContextProvider } from "@/context/drawer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | @jsonfm",
  description:
    "Jason's personal web portfolio. I am an engineer and software developer. Efficient and methodical learner. Curious, and dedicated problem solver. Data analyst, and application builder.",
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
      <GoogleAnalytics gaId="G-T04T57NDVE" />
    </html>
  );
}
