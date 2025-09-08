import type { Metadata } from "next";
import { kalam, comicNeue, courierPrime, publicSans } from "./fonts";
import "./globals.css";
import { Topbar } from "@/components/topbar";

export const metadata: Metadata = {
  title: "Space Sheep",
  description: "Personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kalam.variable} ${comicNeue.variable} ${courierPrime.variable} ${publicSans.variable} antialiased`}
      >
        <Topbar />
        {children}
      </body>
    </html>
  );
}
