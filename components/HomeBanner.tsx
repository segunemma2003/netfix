import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import { MdArrowForwardIos } from 'react-icons/md';
import Router from 'next/router';
import { Movie } from '../typings';
import { baseUrl } from '../constants/movie';
import { modalState, movieState } from '../atoms/modelAtom';

function HomeBanner() {
  const [email, setEmail] = useState('');
  const saveEmail = () => {
    window.localStorage.setItem('email', email);
    return Router.push('/signup');
  };
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[100vh]  lg:justify-center lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src="https://rb.gy/3ewa1y"
          layout="fill"
          alt="dd"
          className="opacity-30 "
          objectFit="cover"
        />
      </div>
      <div className="w-2/3 mx-auto text-center text-white md:w-[800px]">
        <h1 className="text-3xl md:text-7xl font-semibold">
          Unlimited movies, TV shows and more.
        </h1>
        <h3 className=" text-lg md:text-2xl font-medium mt-3 md:mt-5">
          Watch anywhere. Cancel anytime
        </h3>
        <h4 className=" text-base  md:text-xl mt-3 md:mt-5">
          Ready to watch? Enter your email to create or restart your
          membership.
        </h4>
        <form className="flex flex-col sm:flex-row  justify-center mt-5">
          <input
            className=" py-4 rounded-r-sm sm:rounded-r-none sm:py-0 rounded-l-sm px-5 outline-none text-black w-full"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
          />
          <div
            aria-hidden="true"
            onClick={() => saveEmail()}
            className=" cursor-pointer mx-auto sm:mx-auto mt-10 sm:mt-0 rounded-r-sm w-32 text-sm sm:w-64 sm:py-4 sm:text-2xl py-2 justify-center rounded-l-sm sm:rounded-l-none bg-[#f40612] flex items-center"
          >
            Get Started
            <MdArrowForwardIos className=" ml-3" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomeBanner;
