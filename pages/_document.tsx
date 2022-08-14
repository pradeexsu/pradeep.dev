import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" >
      <Head>
        <title>Pradeep° </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="bg-dark antialiased selection:bg-slate-600/30 selection:text-cyan-400 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
