import React from "react";
import Head from "next/head";

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
          <div>Top logo bar Component</div>
          <div>Menu bar Component</div>
        </nav>
      </header>
      <div className="d-flex">{children}</div>
      <footer>Here is the FOOTER</footer>
    </div>
  );
};

export default Layout;
