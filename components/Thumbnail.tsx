import { DocumentData } from 'firebase/firestore';
import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modelAtom';
import { Movie } from '../typings';

interface Props {
  movie: Movie | DocumentData
}

function Thumbnail({ movie }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  return (
    <div className="flex flex-col ">
      <div
        className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
        aria-hidden="true"
        onClick={() => {
          setCurrentMovie(movie);
          setShowModal(true);
        }}
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
      <div className="w-full h-16 whitespace-nowrap px-2  overflow-hidden py-2 bg-[#333333]">
        <p>
          <b>Title: </b>
          {movie.title || movie.name}
        </p>
        <p>
          <b>Rating: </b>
          {Math.floor(movie.vote_average)}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
