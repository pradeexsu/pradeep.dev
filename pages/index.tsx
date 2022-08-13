import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import BgTexture from "./components/bg-tecture";
import Footer from "./components/footer";
import PostCard, { PostProps } from "./components/post-card";
import Profile from "./components/profile";
import Timeline from "./components/timeline";
import { TimeLineItemProp } from "./components/timeline-item";

interface HomeProps {
  name: string;
  title: string;
  imageUrl: string;
  shortTitle: string;
  logoUrl: string;
  timeLineItemProps: TimeLineItemProp[];
}
const Header: React.FC = () => (
  <Head>
    <title>●° Pradeep </title>
    <link rel="icon" href="/favicon.png" />
  </Head>
);

const Home: NextPage<any> = (props: HomeProps) => {
  // console.log(props);

  const { name, title, imageUrl, shortTitle, logoUrl, timeLineItemProps } =
    props;

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
    <div className="bg-[#241e1c] antialiased selection:bg-purple-500/90 selection:text-white opacity-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="h-full bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')] bg-top bg-no-repeat opacity-[0.3] will-change-transform"></div>
      </div>
      <Header />
      <BgTexture />
      <main className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-48 text-lg text-rose-100/90 xl:grid-cols-[1fr,minmax(auto,280px),min(640px,100%),minmax(auto,280px),1fr] xl:gap-x-8 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
        <Profile
          name={name}
          title={title}
          image_url={imageUrl}
          short_title={shortTitle}
          logo_url={logoUrl}
        />
        <Timeline {...timeLineItemProps} />

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

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/experience`;
  console.log(url);

  const experince = [
    {
      title: "Software Developer Engineer",
      date: "July 2022 - Present",
      description: `Implemented Java Backend Logic specific feature within the IPOs and Mutual Funds project, and delivered with 99.9% uptime after deployment.`,
      logoUrl: `data:image/jpeg;base64,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`,
      organization: "Upstox",
    },
    {
      title: "Software Developer Intern",
      date: "Mar 2022 - Jun 2022",
      description: `Migrated existing NodeJs Backend to Java Spring Boot for IPOs and Mutual Funds project.
      Contributed to the development of high-performance gRPC and REST micro-services in Java Spring Boot.
      Researched and evaluated various solutions to problems and reduce friction in the development lifecycle, documenting and testing.`,
      organization: null,
      logoUrl: null,
    },
    {
      title: "Android Developer Intern",
      date: "Jul 2021 - Jan 2022",
      description: `Learned and Applied Advanced Concepts of Android including MVVM Architecture, API Integration, Jetpack Compose, Crashlytics, etc.
Collaborate with cross-functional teams to design, develop, and ship new features.
Maintaining Application by fixing bugs and improving application performance.`,
      logoUrl:
        "https://play-lh.googleusercontent.com/8XMxyycez8NGOMLxzuPPUwQ43iT7sGUgMmKXVrUik586igBPOunf7oUQK-15zVD_PmpO=w240-h480",
      organization: "WMall",
    },
    {
      title: "C++ Developer(Freelancer)",
      date: "Jan 2021 - Jun 2021",
      description: `Delivered a major project which provide user login interface application for WRDP console based software.`,
      organization: "Fiverr.com",
      logoUrl: "https://i.ibb.co/kyV6MX2/fiverr-480.png",
      // logoUrl: "https://i.ibb.co/vchNJML/fiverr-new-logo.png",
      // logoUrl: "https://img.icons8.com/color/96/000000/fiverr.png",
    },
  ];

  return {
    props: {
      name: "Pradeep",
      title: "Software Engineer",
      imageUrl: "https://i.ibb.co/bQbRxkm/image.png",
      shortTitle: "SWE",
      logoUrl: "https://i.ibb.co/YdjybK1/upstox-white-logo.png",
      timeLineItemProps: experince,
    },
  };
};
// "https://assets.upstox.com/common/images/upstox-logo-primary.svg",

export default Home;
