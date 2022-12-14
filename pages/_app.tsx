import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <React.StrictMode>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Endcredit Motion" />
          <meta property="og:description" content="Endcredit Motion" />
          <meta property="og:image" content="/images/img_meta.png" />
          <link rel="icon" href="/favicon.ico" />
          <title>EndingCreditMotion</title>
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
};

export default MyApp;
