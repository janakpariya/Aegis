import { Fragment } from "react";
import Head from "next/head";
import "../styles/token.css";
import "../styles/styles.css";
import "@innovaccer/design-system/css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
