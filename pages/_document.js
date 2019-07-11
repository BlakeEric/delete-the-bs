import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* Bing Search Console Validation */}
          <meta name="msvalidate.01" content="1B2777D6F9849D34503AB05D438A15B1" />
          {/* Google Search Console Validation */}
          <meta name="google-site-verification" content="HNehFboFYvNqBpCsPcjj7ng2d3fZkj3O8aabF2Xm-gc" />

          <link rel="apple-touch-icon" sizes="57x57" href="/static/img/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/img/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/img/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/img/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/img/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/img/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/img/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/img/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/img/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/img/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/img/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#1779ba" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#1779ba" />
        </Head>
        <body className="documentBody">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
