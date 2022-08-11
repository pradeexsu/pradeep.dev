import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Footer from "./components/footer";
import PostCard, { PostProps } from "./components/post-card";
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

  const post_title =
    "(WIP) Automatically Generate Branded Open Graph (OG) Images for Your Blog Posts";
  const post_description =
    "Draft: Use Cloudinary to automatically generate a branded OG image for each post.";
  const post_date = "27 Sept";
  const post_views = 123;
  const post_likes = 1232;

  const postCardData: PostProps = {
    title: post_title,
    description: post_description,
    date: post_date,
    views: post_views,
    likes: post_likes,
    link: "#",
  };
  return (
    <div className="">
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="pedroduarteisalegend">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#pedroduarteisalegend)"
        ></rect>
      </svg>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="h-full bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')] bg-top bg-no-repeat opacity-[0.3] will-change-transform"></div>
      </div>
      <Header />

      <main className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-48 text-lg text-rose-100/90 xl:grid-cols-[1fr,minmax(auto,280px),min(640px,100%),minmax(auto,280px),1fr] xl:gap-x-8 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
        <Profile
          name={name}
          title={title}
          image_url={imageUrl}
          short_title={shortTitle}
          logo_url={logoUrl}
        />

        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />
        <PostCard {...postCardData} />

        <Footer />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  return {
    props: {
      name: "Pradeep",
      title: "Software Engineer",
      imageUrl: "https://i.ibb.co/bQbRxkm/image.png",
      shortTitle: "SWE",
      logoUrl: "https://i.ibb.co/YdjybK1/upstox-white-logo.png",
    },
  };
};
// "https://assets.upstox.com/common/images/upstox-logo-primary.svg",

export default Home;
