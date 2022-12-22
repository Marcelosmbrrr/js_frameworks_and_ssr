import { Html, Head, Main, NextScript } from 'next/document';

/*
Docs: // https://nextjs.org/docs/advanced-features/custom-document
*/

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet" />
      </Head>
      <body style={{ backgroundColor: '#F6F6F6' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}