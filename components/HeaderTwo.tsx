import { SearchIcon, BellIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import BasicMenu from './BasicMenu';
import MenuDropdown from './MenuDropdown';

interface Props {
  name:string
}

function HeaderTwo({ name }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`px-24 ${isScrolled && 'bg-[#141414]'}`}>
      <div className=" flex flex-row items-center space-x-2 md:space-x-10">
        <h1 className="text-2xl font-bold">
          {name}
        </h1>
        <div className="">
          <select className="bg-transparent rounded border border-white px-4 py-1  text-white" name="" id="cars">
            <option value=""><span className="hover:bg-red-700 bg-red-700">Genres</span></option>
            <option value="">हिन्दी</option>
          </select>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        {/* <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link> */}
      </div>
    </header>
  );
}

export default HeaderTwo;
