import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React, { useRef, useState } from 'react';
import { Movie } from '../typings';
import Thumbnail from './Thumbnail';

interface Props {
    movies:Movie[]
}
function ColSearch({ movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  return (
    <div className="h-40 space-y-4 md:space-y-2">
      <h1 className="w-56 whitespace-nowrap cursor-pointer text-lg font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">Search</h1>
      <div className="space-x-4 w-3/4 lg:w-5/12 mx-auto border rounded">
        <input type="search" className="w-full bg-transparent shadow border-1 border-white rounded  p-3 focus:border-red-900 focus:border-1 focus:outline-none " placeholder="Search by name..." />
      </div>
      <div className=" md:-ml-2">
        <h5 className="text-3xl font-bold">Search Results</h5>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-center overflow-x-hidden
              space-x-0.5  scrollbar-hide md:space-x-2.5 md:p-2"
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

export default ColSearch;
