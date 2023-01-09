/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRecoilState } from 'recoil';
import ReactPlayer from 'react-player/lazy';
import { FaPlay } from 'react-icons/fa';

import {
  CheckIcon,
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from '@heroicons/react/outline';
import MuiModal from '@mui/material/Modal';
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';
import requests from '../utils/requests';
import { Element, Genre, Movie } from '../typings';
import { db } from '../firebase';
import useAuth from '../hooks/useAuth';
import { modalState, movieState } from '../atoms/modelAtom';
import NewHeader from '../components/NewHeader';
import VideoTrailer from '../components/VideoTrailer';
import Colss from '../components/Colss';

interface Props {
    trendingNow: Movie[]
  }

function Moviedetails2(
  { trendingNow }:Props,
) {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      <div className="flex flex-row h-full">
        <NewHeader />
        <main className="relative lg:space-y-24 lg:pl-16 w-screen">
          <VideoTrailer />
          <section className="md:space-y-18 space-y-20">
            <Colss title="Related Movie/Tv shows" movies={trendingNow} />
          </section>
        </main>
      </div>
    </div>

  );
}

export default Moviedetails2;

export const getServerSideProps = async () => {
  const [
    trendingNow,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
  ]);

  return {
    props: {
      trendingNow: trendingNow.results,
    },
  };
};
