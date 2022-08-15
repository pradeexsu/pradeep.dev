import { Html, Head, Main, NextScript } from "next/document";
import BgTexture from "./components/bg-tecture";

export default function Document() {
  return (
    <Html className="scroll-smooth" >
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="bg-dark antialiased selection:bg-slate-600 selection:text-cyan-400 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <BgTexture />

        <div className="h-full bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png')] bg-top bg-no-repeat opacity-50 will-change-transform" />
      </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
