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
    <div>
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
      logoUrl:
        "https://assets.upstox.com/common/images/upstox-logo-primary.svg",
    },
  };
};


export default Home;
