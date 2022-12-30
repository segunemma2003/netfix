import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaImdb, FaPlay } from 'react-icons/fa';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import Router from 'next/router';
import { BsFillCalendar2Fill, BsFillStarFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GiTomato } from 'react-icons/gi';
import { BiTimeFive } from 'react-icons/bi';
import { Movie } from '../typings';
import { baseUrl } from '../constants/movie';
import { modalState, movieState } from '../atoms/modelAtom';

interface Props {
    netflixOriginals:Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie| null>(null);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)],
    );
  }, [netflixOriginals]);

  const showMovie = () => Router.push('/videoread');

  return (
    <div className="flex flex-col space-y-2 px-8 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          className="opacity-30"
          alt="dd"
          objectFit="cover"
        />
      </div>
      <div className=" h-fit flex flex-row">
        <div className="w-1/2 grid grid-cols-1 gap-4 content-between">
          <div className="space-y-2">
            <h1 className="text-2xl text-red-800 font-bold md:text-3xl lg:text-6xl">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="flex flex-row w-fit space-x-5">
              <div className="flex flex-row space-x-2 align-items-center justify-center">
                <BsFillStarFill
                  className="w-5 h-5"
                />
                <p>10</p>
              </div>
              <div className="flex flex-row space-x-2 align-items-center justify-center">
                <AiOutlineCalendar
                  className="w-6 h-6"
                />
                <p>2017</p>
              </div>
              <div className="flex flex-row space-x-2 align-items-center justify-center">
                <BiTimeFive
                  className="w-6 h-6"
                />
                <p>2 Hrs 59 mins</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              className="bannerbutton bg-white text-black"
              type="button"
              onClick={() => {
                setCurrentMovie(movie);
                showMovie();
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
        <div className="w-1/2 flex flex-col space-y-10 pt-50">
          <div className="flex flex-row space-x-10">
            <div className="flex flex-col space-y-4">
              <FaImdb
                className="w-8 h-12"
                color="orange"
              />
              <div>
                <p>10/10</p>
                <p>6634</p>
                <p>votes</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <GiTomato
                className="w-8 h-12"
                color="red"
              />
              <div>
                <p>10/10</p>
                <p>6634</p>
                <p>votes</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <FaImdb
                className="w-8 h-12"
                color="orange"
              />
              <div>
                <p>8/10</p>
                <p>9243</p>
                <p>votes</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <GiTomato
                className="w-8 h-12"
                color="red"
              />
              <div>
                <p>10/10</p>
                <p>6634</p>
                <p>votes</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {
             ['Drama', 'Action', 'Family', 'Series', 'Romance'].map((item, index) => (
               <div className="rounded-lg px-4 py-2 bg-[#393838]">
                 {item}
               </div>
             ))
            }
          </div>
          <p className="text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-sm">
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
