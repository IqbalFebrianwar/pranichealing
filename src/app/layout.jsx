import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Pranic Healing",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
