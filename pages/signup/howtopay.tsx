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

function HowToPay() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSign />

      <main>
        <div className="w-11/12  flex flex-col items-center justify-center mx-auto">
          <div
            className="relative min-w-[20px] cursor-pointer transition duration-200 ease-out md:min-w-[30px] md:hover:scale-105"
            aria-hidden="true"
          >
            <img
              src="https://rb.gy/rqf45m"
              className="rounded-sm object-cover md:rounded"
              alt="hj"
            />
          </div>
          <p className="text-sm">STEP 3 OF 3</p>
          <h4 className="text-center pt-2 text-3xl font-bold">Choose how to pay</h4>
          <p className="text-1xl text-center">Your payment is encrypted and you can change how you pay anytime.</p>
          <p className="text-1xl text-center font-semibold">Secure for peace of mind.</p>
          <p className="text-1xl text-center font-semibold pb-8">Cancel easily online.</p>
          <button
            type="button"
            onClick={() => Router.push('/')}
            className="w-full rounded bg-[#E50914] py-3 font-semibold"
          >
            Make Payment
          </button>
        </div>
      </main>

    </div>
  );
}

export default HowToPay;
