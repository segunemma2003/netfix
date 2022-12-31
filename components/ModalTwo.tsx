import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import Router from 'next/router';
import ReactPlayer from 'react-player/lazy';
import { FaPlay, FaRecycle } from 'react-icons/fa';
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
import { modalState, modalStateTwo, movieState } from '../atoms/modelAtom';
import { baseUrl } from '../constants/movie';

function ModalTwo() {
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState('');
  const [showModal, setShowModal] = useRecoilState(modalStateTwo);
  const [muted, setMuted] = useState(true);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [addedToList, setAddedToList] = useState(false);
  const { user } = useAuth();
  const [movies, setMovies] = useState<DocumentData[] | Movie[]>([]);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  const toastStyle = {
    background: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '15px',
    borderRadius: '9999px',
    maxWidth: '1000px',
  };

  const showMovie = () => {
    const strMovie:string = JSON.stringify(movie);
    localStorage.setItem('movie', strMovie);
    Router.push('/videoread');
  };

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`,
      ).then((response) => response.json());
      if (data?.videos) {
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

  const handleClose = () => {
    setShowModal(false);
    setMovie(null);
    toast.dismiss();
  };

  // Find all the movies in the user's list
  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, 'customers', user.uid, 'myList'),
        (snapshot) => setMovies(snapshot.docs),
      );
    }
  }, [movie]);

  // Check if the movie is already in the user's list
  useEffect(
    () => setAddedToList(
      movies.findIndex((result) => result.data().id === movie?.id) !== -1,
    ),
    [movie?.id, movies],
  );

  const handleList = async () => {
    if (addedToList) {
      await deleteDoc(
        doc(db, 'customers', user!.uid, 'myList', movie?.id.toString()!),
      );

      toast(
        `${movie?.title || movie?.original_name} has been removed from My List`,
        {
          duration: 8000,
          style: toastStyle,
        },
      );
    } else {
      await setDoc(
        doc(db, 'customers', user!.uid, 'myList', movie?.id.toString()!),
        {
          ...movie,
        },
      );

      toast(
        `${movie?.title || movie?.original_name} has been added to My List.`,
        {
          duration: 8000,
          style: toastStyle,
        },
      );
    }
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed  !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <Toaster position="bottom-center" />
        <button
          type="button"
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={handleClose}
        >
          <XIcon className="h-6 w-6" />
        </button>
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen bg-blend-darken pt-50">
          <Image
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            layout="fill"
            className="opacity-90"
            alt="dd"
            objectFit="cover"
          />
        </div>
        <div className=" px-10 relative top-10 flex flex-col space-y-8">
          <h1 className="text-2xl md:text-4xl lg:text-7xl">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="flex flex-row space-x-4">
            <p>New </p>
            <p>{movie?.first_air_date || movie?.release_date}</p>
            <div className="w-fit h-fit px-4  bg-[#333333] rounded">
              PG-13
            </div>
            <p>1hr 45min</p>
            <div className="w-fit h-fit px-4  bg-transparent border border-white rounded">
              HD
            </div>
            <div className="w-fit h-fit px-4  bg-transparent border border-white rounded">
              5.2
            </div>
          </div>
          <div className="w-4/6">
            <h3 className="text-2xl font-semibold"> #3 in Movies Today </h3>
            <p>
              { movie?.overview }
            </p>
          </div>
          <div className="w-4/6 flex flex-row space-x-4">
            <BsHandThumbsUp
              color="white"
            />
            <BsHandThumbsDown />
          </div>
          <div className="w-4/6 flex  flex-col space-y-6">
            <div
              aria-hidden="true"
              onClick={() => {
                setCurrentMovie(movie);
                showMovie();
              }}
              className="hover:border-2 hover:border-white w-1/3 flex flex-row px-4 space-x-4 items-center rounded-lg"
            >
              <FaPlay />
              <p>Resume Playing</p>
            </div>
            <div
              aria-hidden="true"
              onClick={() => {
                setCurrentMovie(movie);
                showMovie();
              }}
              className="hover:border-2 hover:border-white w-fit flex flex-row px-4 space-x-4 items-center rounded-lg"
            >
              <FaRecycle />
              <p>Play From Beginning</p>
            </div>
            <div
              aria-hidden="true"
              onClick={() => {
                setCurrentMovie(movie);
                showMovie();
              }}
              className="hover:border-2 hover:border-white w-1/3 flex flex-row px-4 space-x-4 items-center rounded-lg"
            >
              <FaPlay />
              <p>Resume Trailer</p>
            </div>
          </div>

        </div>
      </>
    </MuiModal>
  );
}

export default ModalTwo;
