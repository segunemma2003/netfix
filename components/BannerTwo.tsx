import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import { Movie } from '../typings';
import { baseUrl } from '../constants/movie';
import { modalState, movieState } from '../atoms/modelAtom';
import {VideoPlayer} from './VideoPlayer';
import Router from 'next/router'

interface Props {
    netflixOriginals:Movie[]
}

function BannerTwo({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie| null>(null);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)],
    );
  }, [netflixOriginals]);

  const showMovie = (movied) => {
   return Router.push('/videoread')
  }

  return (
    <div className="flex pt-10 flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          alt="dd"
          objectFit="cover"
        />
      </div>
      
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button
          className="bannerbutton bg-white text-black"
          type="button"
          onClick={() => {
            setCurrentMovie(movie);
            showMovie(movie)
          }}
        >
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button
          className="bannerbutton bg-[gray]/70"
          type="button"
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default BannerTwo;
