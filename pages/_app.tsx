import "../styles/globals.css";
import { Inter, Merriweather, Dancing_Script } from "next/font/google";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-merriweather" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing-script", weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${merriweather.variable} ${dancingScript.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
