/* eslint-disable prefer-const */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import ReactPlayer from 'react-player/lazy';
import {
  CheckIcon, PlusIcon, ThumbUpIcon, VolumeOffIcon,
} from '@heroicons/react/solid';
import { VolumeUpIcon } from '@heroicons/react/outline';
import { FaPlay } from 'react-icons/fa';
import { Element, Genre, Movie } from '../typings';
import { modalState, movieState } from '../atoms/modelAtom';

interface Props {
    movie:Movie
}

function VideoPlayer() {
  let [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(false);
  const [addedToList, setAddedToList] = useState(false);

  useEffect(() => {
    const strMovie:string = localStorage.getItem('movie') || '';
    movie = JSON.parse(strMovie);
    // setMovie(movie);
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
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

  return (
    <div className="w-screen h-screen">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailer}`}
        width="100%"
        height="100%"
        controls
        style={{ position: 'absolute', top: '0', left: '0' }}
        playing
        muted={muted}
      />
    </div>
  );
}

export default VideoPlayer;
