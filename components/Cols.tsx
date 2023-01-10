import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React, { useRef, useState } from 'react';
import { Movie } from '../typings';
import SelectComponent from './SelectComponent';
import Thumbnail from './Thumbnail';

interface Props {
    movies:Movie[]
}

const mydata = [
  {
    label: 'Name of Artist',
    value: 'Name of Artist',
  },
  {
    label: 'हिन्दी',
    value: 'हिन्दी',
  },
];

const mydata1 = [
  {
    label: 'Region',
    value: 'Region',
  },
  {
    label: 'हिन्दी',
    value: 'हिन्दी',
  },
];

const mydata2 = [
  {
    label: 'Date',
    value: 'date',
  },
  {
    label: 'हिन्दी',
    value: 'हिन्दी',
  },
];

function Cols({ movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  return (
    <div className="h-40 space-y-0.5 md:space-y-8">
      <h2 className="w-56 whitespace-nowrap cursor-pointer text-2xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">My List</h2>
      <div className="space-x-4 flex flex-row">
        {/* <select className="bg-transparent rounded border
        border-white px-4 py-1  text-white" name="" id="cars">
          <option value="">Name of Artist</option>
          <option value="">हिन्दी</option>
        </select> */}
        <SelectComponent mydata={mydata} />
        <SelectComponent mydata={mydata1} />
        <SelectComponent mydata={mydata2} />
        {/* <select className="bg-transparent rounded borde
        r border-white px-4 py-1  text-white" name="" id="cars">
          <option value="">Region</option>
          <option value="">हिन्दी</option>
        </select>
        <select className="bg-transparent
         rounded border border-white px-4 py-1  text-white" name="" id="cars">
          <option value="">Date</option>
          <option value="">हिन्दी</option>
        </select> */}
      </div>
      <div className="  -z-0 md:-ml-2">

        <div
          className="grid grid-cols-4 gap-2 items-center overflow-x-hidden
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

export default Cols;
