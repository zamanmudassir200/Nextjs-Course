import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Website | MMZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-purple-700">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
