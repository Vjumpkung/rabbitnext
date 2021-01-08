import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";
import fs from "fs";
import path from "path";
class CustomNextHead extends Head {
  getCssLinks({ allFiles }) {
    return allFiles
      .filter((file) => file.endsWith(".css"))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(path.join(".next", file), "utf-8"),
          }}
        />
      ));
  }
}
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="th">
        <CustomNextHead />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="google-site-verification"
          content="l7GATULSOkNYPGYElSPgRQWj89aBsHL55tgWJWoZFKA"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js" integrity="sha512-ubuT8Z88WxezgSqf3RLuNi5lmjstiJcyezx34yIU2gAHonIi27Na7atqzUZCOoY4CExaoFumzOsFQ2Ch+I/HCw==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha512-lmArColmgJ0LRo8c6rZwAhB3mVVSFSsrpqOrmtXMgOFYu8VOwdxTliXrHYdsdmututXwD0Xc1GiGvZlHgNAh4g==" crossorigin="anonymous"></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
