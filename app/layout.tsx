import { Footer } from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import NextAuthProvider from "@/components/auth/NextAuthProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 min-h-screen bg-slate-100 flex flex-col`}
        >
          <Navbar />
          <div className="h-full flex flex-1 justify-center items-center">
            {children}
          </div>
          <Footer />
        </body>
      </NextAuthProvider>
    </html>
  );
}
