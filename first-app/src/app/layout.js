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
        <section className="text-white p-4 max-w-[1300px] mx-auto min-h-[calc(100vh-150px)]">
          <Navbar />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
