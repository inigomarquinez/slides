import { Inter } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Íñigo Marquínez Prado - Slides",
  description: "Slides of talks and presentations by Íñigo Marquínez Prado.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
