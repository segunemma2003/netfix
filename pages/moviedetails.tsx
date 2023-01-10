/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRecoilState, useRecoilValue } from 'recoil';
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
import MovieTwo from '../components/MovieTwo';
import Modal from '../components/Modal';
import Row from '../components/Row';

interface Props {
    trendingNow: Movie[]
  }

function Moviedetails(
  { trendingNow }:Props,
) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const strMovie:string = localStorage.getItem('movie') || '';
  const movie = JSON.parse(strMovie);
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>

      </Head>

      {/* <Header /> */}
      <div className="flex flex-row h-screen">
        <NewHeader />
        <main className="relative lg:space-y-24 lg:pl-16 w-screen">
          <MovieTwo movies={movie} onClick={() => setShowModal(true)} />
          <Row title="Similar Movies" movies={trendingNow} />
        </main>
        {showModal && <Modal />}
      </div>
    </div>

  );
}

export default Moviedetails;

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
