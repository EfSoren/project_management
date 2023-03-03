import React from "react";
import Nav from "./nav";

function Layout({ title, children }) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
      </head>
      <body>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default Layout;
