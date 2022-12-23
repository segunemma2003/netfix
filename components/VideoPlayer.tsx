/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { ReactNetflixPlayer } from 'react-netflix-player';
import { useRecoilState } from 'recoil';
import { Element, Genre, Movie } from '../typings';
import { modalState, movieState } from '../atoms/modelAtom';

interface Props {
    movie:Movie
}

function VideoPlayer() {
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    console.log(movie);
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
    <ReactNetflixPlayer
      src="https://www.youtube.com/watch?v=mKRYPFKQdZg"
      playerLanguage="en"
    />
  );
}

export default VideoPlayer;
