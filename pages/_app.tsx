import "../styles/globals.css";
import { Inter, Merriweather, Dancing_Script } from "next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Metaphor: ReFantazio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${inter.variable} ${merriweather.variable} ${dancingScript.variable}`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default appWithTranslation(MyApp);
