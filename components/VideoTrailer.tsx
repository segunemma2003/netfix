/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { useRecoilState } from 'recoil';
import ReactPlayer from 'react-player/lazy';
import {
  CheckIcon, PlusIcon, ThumbUpIcon, VolumeOffIcon,
} from '@heroicons/react/solid';
import { VolumeUpIcon } from '@heroicons/react/outline';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Element, Genre, Movie } from '../typings';
import { modalState, movieState } from '../atoms/modelAtom';

interface Props {
    movie:Movie
}

function VideoTrailer() {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  let [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(true);
  const [addedToList, setAddedToList] = useState(false);

  useEffect(() => {
    const strMovie:string = localStorage.getItem('movie') || '';
    movie = JSON.parse(strMovie);
    // setMovie(movie);
    if (!movie) return;

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
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  const showMovie = () => {
    const strMovie:string = JSON.stringify(movie);
    localStorage.setItem('movie', strMovie);
    Router.push('/moviedetails');
  };

  return (
    <div className="h-full">
      <div className="w-full h-[80%] relative">
        {/* <div className="absolute top-10 w-20 h-20 -z-40">
          <AiOutlineArrowLeft color="white" className="w-full h-full" />
        </div> */}
        <ReactPlayer
          url={`https:www.youtube.com/watch?v=${trailer}`}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: '0', left: '0' }}
          playing
          muted={muted}
        />
        <div className="flex w-full absolute bottom-10 items-center justify-between px-10">
          <div className="flex space-x-2">
            <button
              onClick={() => {
                setCurrentMovie(movie);
                showMovie();
                // setShowModal(true);
              }}
              type="button"
              className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]"
            >
              <FaPlay className="h-7 w-7 text-black" />
              Play
            </button>
            <button type="button" className="modalButton">
              {addedToList ? (
                <CheckIcon className="h-7 w-7" />
              ) : (
                <PlusIcon className="h-7 w-7" />
              )}
            </button>
            <button type="button" className="modalButton">
              <ThumbUpIcon className="h-6 w-6" />
            </button>
          </div>
          <button type="button" className="modalButton" onClick={() => setMuted(!muted)}>
            {muted ? (
              <VolumeOffIcon className="h-6 w-6" />
            ) : (
              <VolumeUpIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8 h-10%">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie?.vote_average * 10 || 'Not applicable'}
                % Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">{movie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div className="flex flex-row">
                  <span className="text-[gray]">Genres:</span>
                  {' '}
                  {genres.map((genre) => genre.name).join(', ')}
                </div>

                <div>
                  <span className="text-[gray]">Original language:</span>
                  {' '}
                  {movie?.original_language}
                </div>

                <div>
                  <span className="text-[gray]">Total votes:</span>
                  {' '}
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default VideoTrailer;
