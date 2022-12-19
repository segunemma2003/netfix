import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import Router from 'next/router';
import useAuth from '../../hooks/useAuth';
import Welcome from '../../components/Welcome';
import HeaderSign from '../../components/HeaderSign';
import SignupFooter from '../../components/SignupFooter';

function SignUp() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSign />

      <main className="content-center mt-52 pb-20">
        <div className="w-4/6 flex flex-col items-center justify-center mx-auto">
          <div
            className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
            aria-hidden="true"
          >
            <img
              src="https://rb.gy/uhhakw"
              className="rounded-sm object-cover md:rounded"
              alt="hj"
            />
          </div>
          <p className="text-sm">STEP 1 OF 3</p>
          <h4 className="text-center pt-2 text-3xl font-bold">Finish setting up your account</h4>
          <p className="text-center text-md">
            Netflix is personalized for you.
          </p>
          <p className="text-center text-md pb-4">
            Create a password to watch on any device at any time.
          </p>
          <button
            type="button"
            onClick={() => Router.push('/signup/regform')}
            className="w-full rounded bg-[#E50914] py-3 font-semibold"
          >
            Next
          </button>
        </div>
      </main>
      <SignupFooter />
    </div>
  );
}

export default SignUp;
