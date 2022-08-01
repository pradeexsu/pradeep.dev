import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BgTexture from './components/bg-tecture';

const Header: React.FC = () => (
  <Head>
    <title>●° Pradeep </title>
    <link rel="icon" href="/favicon.png" />
  </Head>);


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <BgTexture>
        <div className='w-100wh h-100vh'>
          <h1 className='text-4xl'>
            Pradeep
            Pradeep
            Pradeep
          </h1>
        </div>
      </BgTexture>
    </>
  );

}

export default Home
