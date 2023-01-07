/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaImdb, FaPlay } from 'react-icons/fa';
import { BsFillCalendar2Fill, BsFillStarFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GiTomato } from 'react-icons/gi';
import { BiTimeFive } from 'react-icons/bi';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import Router from 'next/router';
import { Movie, Genre, Element } from '../typings';
import { baseUrl } from '../constants/movie';
import { modalState, modalStateTwo, movieState } from '../atoms/modelAtom';

interface Props {
    netflixOriginals:Movie[]
}

function BannerThree({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie| null>(null);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [showModalTwo, setShowModalTwo] = useRecoilState(modalStateTwo);
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    const mov = netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)];
    setMovie(
      mov,
    );
    async function fetchMovie() {
      const data = await fetch(
        `https:api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`,
      ).then((response) => response.json());
      console.log(data);
      if (data?.videos) {
        console.log(data?.videos);
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer',
        );
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [netflixOriginals]);

  const showMovie = () => {
    const strMovie:string = JSON.stringify(movie);
    localStorage.setItem('movie', strMovie);
    Router.push('/videoread');
  };
  const showMovieDetails = () => {
    const strMovie:string = JSON.stringify(movie);
    localStorage.setItem('movie', strMovie);
    Router.push('/moviedetails');
  };

  const randomInteger = (min: any) => Math.floor(Math.random() * (9 - min + 1)) + min;

  const randomIntegerTwo = (min: any) => Math.floor(Math.random() * (10000 - min + 1)) + min;

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

      <div className=" h-fit flex flex-row relative top-20 mr-20">
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
                <p>{Math.floor(movie?.vote_average || 7)}</p>
              </div>
              <div className="flex flex-row space-x-2 align-items-center justify-center">
                <AiOutlineCalendar
                  className="w-6 h-6"
                />
                <p>{ movie?.release_date || movie?.first_air_date}</p>
              </div>
              <div className="flex flex-row space-x-2 align-items-center justify-center">
                <BiTimeFive
                  className="w-6 h-6"
                />
                <p>1 Hr 59 mins</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-6">
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
                showMovieDetails();
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
                <p>
                  {randomInteger(movie?.vote_average)}
                  /10
                </p>
                <p>{randomIntegerTwo(movie?.vote_count)}</p>
                <p>votes</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <GiTomato
                className="w-8 h-12"
                color="red"
              />
              <div>
                <p>
                  {randomInteger(movie?.vote_average)}
                  /10
                </p>
                <p>{randomIntegerTwo(movie?.vote_count)}</p>
                <p>votes</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <FaImdb
                className="w-8 h-12"
                color="orange"
              />
              <div>
                <p>
                  {randomInteger(movie?.vote_average)}
                  /10
                </p>
                <p>{randomIntegerTwo(movie?.vote_count)}</p>
                <p>votes</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <GiTomato
                className="w-8 h-12"
                color="red"
              />
              <div>
                <p>
                  {randomInteger(movie?.vote_average)}
                  /10
                </p>
                <p>{randomIntegerTwo(movie?.vote_count)}</p>
                <p>votes</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {
             genres.map((item, key) => (
               <div key={key} className="w-fit h-fit rounded-lg px-4 py-2 bg-[#393838] whitespace-nowrap">
                 {item?.name}
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

export default BannerThree;
