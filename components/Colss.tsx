import React from 'react';
import { Movie } from '../typings';
import Thumbnail from './Thumbnail';

interface Props {
    movies:Movie[]
    title:string
}

function Colss({ movies, title }: Props) {
  return (
    <div className="h-fit  space-y-4 md:space-y-2 ">
      <h2 className="w-56 whitespace-nowrap cursor-pointer text-4xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-3xl">{ title }</h2>
      <div className="-ml-3 md:-ml-4">

        <div
          className="grid grid-cols-2 gap-1 space-x-2 lg:grid-cols-4 lg:gap-2 items-center overflow-x-hidden
               scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {
                movies.map((movie) => (
                  <Thumbnail key={movie.id} movie={movie} />
                ))
            }

        </div>

      </div>
    </div>
  );
}

export default Colss;
