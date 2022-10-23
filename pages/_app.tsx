import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NextProgress from "nextjs-progressbar";

import "../styles/globals.css";
import { Navbar } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <NextProgress />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
