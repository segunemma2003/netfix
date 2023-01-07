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
import { Element, Genre, Movie } from '../typings';
import { db } from '../firebase';
import useAuth from '../hooks/useAuth';
import { modalState, movieState } from '../atoms/modelAtom';
import NewHeader from '../components/NewHeader';
import VideoTrailer from '../components/VideoTrailer';

function Moviedetails() {
  return (
    <VideoTrailer />
  // <div className="w-screen flex flex-col h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
  //   <div className="relative w-full h-[80%]">
  //     <ReactPlayer
  //       url={`https://www.youtube.com/watch?v=${trailer}`}
  //       width="100%"
  //       height="100%"
  //       style={{ position: 'absolute', top: '0', left: '0' }}
  //       playing
  //       muted={muted}
  //     />
  //     <div className="flex w-full absolute bottom-10 items-center justify-between px-10">
  //       <div className="flex space-x-2">
  //         <button type="button" className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
  //           <FaPlay className="h-7 w-7 text-black" />
  //           Play
  //         </button>
  //         <button type="button" className="modalButton" onClick={handleList}>
  //           {addedToList ? (
  //             <CheckIcon className="h-7 w-7" />
  //           ) : (
  //             <PlusIcon className="h-7 w-7" />
  //           )}
  //         </button>
  //         <button type="button" className="modalButton">
  //           <ThumbUpIcon className="h-6 w-6" />
  //         </button>
  //       </div>
  //       <button type="button" className="modalButton" onClick={() => setMuted(!muted)}>
  //         {muted ? (
  //           <VolumeOffIcon className="h-6 w-6" />
  //         ) : (
  //           <VolumeUpIcon className="h-6 w-6" />
  //         )}
  //       </button>
  //     </div>
  //   </div>

  //   <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8 h-10%">
  //     <div className="space-y-6 text-lg">
  //       <div className="flex items-center space-x-2 text-sm">
  //         <p className="font-semibold text-green-400">
  //           {movie?.vote_count || movie?.vote_average}
  //           % Match
  //         </p>
  //         <p className="font-light">
  //           {movie?.release_date || movie?.first_air_date}
  //         </p>
  //         <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
  //           HD
  //         </div>
  //       </div>
  //       <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
  //         <p className="w-5/6">{movie?.overview}</p>
  //         <div className="flex flex-col space-y-3 text-sm">
  //           <div className="flex flex-row">
  //             <span className="text-[gray]">Genres:</span>
  //             {' '}
  //             {genres.map((genre) => genre.name).join(', ')}
  //           </div>

  //           <div>
  //             <span className="text-[gray]">Original language:</span>
  //             {' '}
  //             {movie?.original_language}
  //           </div>

  //           <div>
  //             <span className="text-[gray]">Total votes:</span>
  //             {' '}
  //             {movie?.vote_count}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  );
}

export default Moviedetails;
