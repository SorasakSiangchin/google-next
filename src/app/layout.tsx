import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Clone",
  description:
    "An open source Google clone build with Next Js and tailwind Css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen" >
        {/* {inter.className.toString()} */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
