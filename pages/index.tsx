import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Profile from "./components/profile";

interface HomeProps {
  name: string;
  title: string;
  imageUrl: string;
  shortTitle: string;
  logoUrl: string;
}
const Header: React.FC = () => (
  <Head>
    <title>●° Pradeep </title>
    <link rel="icon" href="/favicon.png" />
  </Head>
);

const Home: NextPage<any> = (props: HomeProps) => {
  console.log(props);

  const { name, title, imageUrl, shortTitle, logoUrl } = props;
  return (
    <div className="bg-stone-800 antialiased selection:bg-purple-500/90 selection:text-white">
      <svg className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light" width="100%" height="100%">
    <filter id="pedroduarteisalegend">
      <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence>
    </filter>
    <rect width="100%" height="100%" filter="url(#pedroduarteisalegend)"></rect>
  </svg>
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div  className="h-full bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')] bg-top bg-no-repeat opacity-[0.3] will-change-transform" ></div>
  </div>
      <Header />
      
      <Profile
        name={name}
        title={title}
        image_url={imageUrl}
        short_title={shortTitle}
        logo_url={logoUrl}
      />

    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  return {
    props: {
      name: "pradeep",
      title: "Software Engineer",
      imageUrl: "https://i.ibb.co/bQbRxkm/image.png",
      shortTitle: "SWE",
      logoUrl: "https://i.ibb.co/YdjybK1/upstox-white-logo.png"
    },
  };
};
// "https://assets.upstox.com/common/images/upstox-logo-primary.svg",


export default Home;
