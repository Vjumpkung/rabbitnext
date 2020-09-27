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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
