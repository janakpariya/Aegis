import React from "react";
import Head from "next/head";
import TopBar from "./topBar";
import MenuBar from "./menuBar";

const Layout = ({ children, title = "This is the default title" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <TopBar />
          <MenuBar />
        </nav>
      </header>
      <div>{children}</div>
      <footer>Here is the FOOTER</footer>
    </div>
  );
};

export default Layout;
