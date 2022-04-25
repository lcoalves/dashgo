import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://storagecp1234.z15.web.core.windows.net"
          />
          <link
            href="https://storagecp1234.z15.web.core.windows.net/fonts.scss"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
