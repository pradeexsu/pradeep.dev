import type { NextPage } from 'next'
import Head from 'next/head'
import Profile from './components/profile';

const Header: React.FC = () => (
  <Head>
    <title>●° Pradeep </title>
    <link rel="icon" href="/favicon.png" />
  </Head>);

const Home: NextPage = () => {

  return (
    <div className="bg-gray-900 antialiased selection:bg-purple-500/90 selection:text-white">
      <Header />
      <Profile
        name={"Pradeep"}
        title={"Software Engineer"}
        image_url={"https://i.ibb.co/bQbRxkm/image.png"}
        short_title={"SWE"}
        logo_url={"https://assets.upstox.com/common/images/upstox-logo-primary.svg"}
      />
    </div>
  );

}

export default Home
