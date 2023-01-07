import { DocumentData } from 'firebase/firestore';
import Image from 'next/image';
import React from 'react';
import Router from 'next/router';
import { BsDot, BsFillStarFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { modalState, movieState, modalStateTwo } from '../atoms/modelAtom';
import { Movie } from '../typings';

interface Props {
  movie: Movie | DocumentData
}

function Thumbnail({ movie }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalStateTwo);
  const showMovie = () => {
    const strMovie:string = JSON.stringify(movie);
    localStorage.setItem('movie', strMovie);
    Router.push('/moviedetails');
  };
  return (
    <div
      className="flex flex-col "
      aria-hidden="true"
      onClick={() => {
        setCurrentMovie(movie);
        showMovie();
        // setShowModal(true);
      }}

    >
      <div
        className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"

      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          layout="fill"
          alt="hj"
        />

      </div>
      <div className="w-full text-sm h-16 whitespace-nowrap px-2  transition duration-200 ease-out overflow-hidden py-2 bg-[#333333]">
        <div>
          {movie.title || movie.name}
        </div>
        <div className="flex flex-row space-x-6">
          <div className="flex flex-row space-x-2 align-items-center justify-center">
            <BsFillStarFill
              className="w-4 h-4"
            />
            <p>
              {' '}
              {Math.floor(movie.vote_average)}
            </p>
          </div>
          <div className="flex flex-row align-items-center justify-center">
            <div className="flex flex-row">
              <p>Release</p>
              <BsDot
                className="w-5 h-5"
              />
            </div>
            <p>{ movie?.release_date || movie.first_air_date}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
