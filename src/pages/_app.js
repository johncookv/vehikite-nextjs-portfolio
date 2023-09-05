import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${montserrat.variable} font-mont bg-light w-full h-screen`}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
