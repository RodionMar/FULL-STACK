//=============================== styles ==================================
import "@/styles/global.css";

//=============================== next ==================================
import type { AppProps } from 'next/app'
import Head from "next/head";

//=============================== react ==================================
import React from "react";

//=============================== redux ==================================
import Providers from "@/store/provider";


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <Providers>
        <div>
          <Head>
            <link rel="icon" href="./images/GOOD-DEEDS-LOGO.png" />
          </Head>
          <Component {...pageProps} />
        </div>
      </Providers>
    </React.StrictMode>
  )
};

export default App;