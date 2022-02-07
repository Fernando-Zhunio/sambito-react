import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect } from "react";
// import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>Sistema Integrado</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
