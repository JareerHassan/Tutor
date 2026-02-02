import "./globals.css";
import Navbar from "../src/components/layout/Header";
import Foter from "../src/components/layout/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Foter />
      </body>
    </html>
  );
}
