import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

function Contactus() {
  return (
    <div className="relative flex bg-white h-screen w-screen  flex-col  md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        
      </Head>
      <header className="border-b border-white/10 bg-[#141414] px-64">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={90}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <div className="space-x-4">
          <button
            type="button"
            className="text-xs px-8 py-2   border-blue-500 bg-black font-medium hover:underline"
          >
            JOIN NETFLIX
          </button>
          <button
            type="button"
            className="text-xs font-medium bg-red-600 px-8 py-2 hover:underline"
          >
            Sign In
          </button>
        </div>
      </header>
      <main className=" pb-20 space-y-4">
        <h4 className="text-center pt-2 text-3xl font-bold">Contact us</h4>
        <h5 className="text-center pt-2 text-3xl font-bold">
          Tell us more and we will find the best solution for you
        </h5>
        <input
          className="w-full px-2 rounded"
          placeholder="Describe your issue"
        />
      </main>
    </div>
  );
}

export default Contactus;
