//=============================== styles ==================================
import "@/styles/global.css";

//=============================== next ==================================
import type { AppProps } from 'next/app'
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="./images/GOOD-DEEDS-LOGO.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
};

export default App;
