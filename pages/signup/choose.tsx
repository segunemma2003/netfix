import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/outline';
import Router from 'next/router';
import useAuth from '../../hooks/useAuth';
import Welcome from '../../components/Welcome';
import HeaderSign from '../../components/HeaderSign';

function Choose() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSign />

      <main>
        <div className="w-11/12 space-y-8 flex flex-col items-center justify-center mx-auto">
          <div
            className="relative min-w-[20px] cursor-pointer transition duration-200 ease-out md:min-w-[30px] md:hover:scale-105"
            aria-hidden="true"
          >
            <img
              src="https://rb.gy/dld41a"
              className="rounded-sm object-cover md:rounded"
              alt="hj"
            />
          </div>
          <p className="text-sm">STEP 2 OF 3</p>
          <h4 className="text-center pt-2 text-3xl font-bold">Choose your plan.</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-x-2 text-lg">
              <CheckIcon className="h-7 w-7 text-[#E50914]" />
              {' '}
              No commitments, cancel anytime.
            </li>
            <li className="flex items-center gap-x-2 text-lg">
              <CheckIcon className="h-7 w-7 text-[#E50914]" />
              {' '}
              Everything on Netflix for one low price.
            </li>
            <li className="flex items-center gap-x-2 text-lg">
              <CheckIcon className="h-7 w-7 text-[#E50914]" />
              {' '}
              No ads and no extra fees. Ever.
            </li>
          </ul>
          <button
            type="button"
            className="w-full rounded bg-[#E50914] py-3 font-semibold"
            onClick={() => Router.push('/signup/plan')}
          >
            Next
          </button>
        </div>
      </main>

    </div>
  );
}

export default Choose;
