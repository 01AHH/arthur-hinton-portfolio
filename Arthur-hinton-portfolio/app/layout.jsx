import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: "Arthur Hinton",
  description: "Growth & Operations — Builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
