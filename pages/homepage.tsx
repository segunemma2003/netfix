import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Welcome from '../components/Welcome';
import AccordianPage from '../components/AccordianPage';
import HomeBanner from '../components/HomeBanner';

export default function Home() {
  const [email, setEmail] = useState('');
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-950/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
      <main>
        <HomeBanner />
        <hr className="divide-stone-600" />
        <div className="h-full py-24 px-20 flex flex-row justify-between  bg-black">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Enjoy on your TV.</h1>
            <p className="text-3xl">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more
            </p>
          </div>
          <div
            className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
            aria-hidden="true"
          >
            <Image
              src="https://rb.gy/qjdvyb"
              className="rounded-sm object-cover md:rounded"
              layout="fill"
              alt="hj"
            />
          </div>
        </div>
        <hr />
        <div className="h-full py-24 px-20 flex flex-row justify-between  bg-black">
          <div
            className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
            aria-hidden="true"
          >
            <Image
              src="https://rb.gy/vacitf"
              className="rounded-sm object-cover md:rounded"
              layout="fill"
              alt="hj"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Download your shows to watch offline.</h1>
            <p className="text-3xl">
              Save your favorites easily and always have something to watch.
            </p>
          </div>

        </div>
        <hr />
        <div className="h-full py-24 px-20 flex flex-row justify-between  bg-black">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Watch everywhere.</h1>
            <p className="text-3xl">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>
          <div
            className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
            aria-hidden="true"
          />
        </div>
        <hr />
        <div className="h-full py-24 px-20 flex flex-row justify-between  bg-black">
          <div
            className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
            aria-hidden="true"
          >
            <Image
              src="https://rb.gy/zhsf87"
              className="rounded-sm object-cover md:rounded"
              layout="fill"
              alt="hj"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Create profiles for kids.</h1>
            <p className="text-3xl">
              Send kids on adventures with their favorite characters in a space made just
              for them—free with your membership.
            </p>
          </div>

        </div>
        <hr />
        <AccordianPage />
      </main>
    </div>
  );
}
