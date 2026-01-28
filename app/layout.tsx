import "./globals.css";
import Navbar from "../src/components/layout/Header";
import Foter from "../src/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Foter />

      </body>
    </html>
  );
}
