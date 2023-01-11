import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import useAuth from '../hooks/useAuth';

function Welcome() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`w-full h-fit ${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <img
          src="https://rb.gy/ulxxee"
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
          alt=""
        />
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <Link href="/login">
          <button
            type="button"
            className="active:scale-95 md:mr-5 px-4 py-1 text-sm sm:text-lg  rounded-[3px] bg-[#f40612] text-white "
          >
            Sign in
          </button>
        </Link>
        <Link href="/signup">
          <button
            type="button"
            className="active:scale-95 md:mr-5 px-4 py-1 text-sm sm:text-lg  rounded-[3px] bg-[#f40612] text-white "
          >
            Sign up
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Welcome;
