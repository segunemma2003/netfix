/* eslint-disable jsx-a11y/anchor-is-valid */
import { SearchIcon, BellIcon } from '@heroicons/react/solid';
import { HiClipboardList } from 'react-icons/hi';
import Link from 'next/link';
// import Router from 'nex/router';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';
import BasicMenu from './BasicMenu';
import MenuDropdown from './MenuDropdown';

function NewHeaders() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();
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
    <aside className="h-full w-fit pt-32 fixed z-50 opacity-60 bg-black" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded  dark:bg-gray-800">
        <ul className="space-y-5">
          <li>
            <Link
              href="/search"
              title="search"
              className={`flex items-center p-2 text-base font-normal text-gray-900
              rounded-lg dark:text-white hover:bg-red-600 dark:hover:bg-gray-700 hover:text-white
              ${router.asPath === '/search' && 'bg-red-600'}
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
              </svg>

            </Link>
          </li>
          <li>
            <Link
              href="/"
              title="home"
              className={`flex items-center p-2 text-base font-normal text-gray-900
              rounded-lg dark:text-white hover:bg-red-600 dark:hover:bg-gray-700 hover:text-white
              ${router.asPath === '/' && 'bg-red-600'}
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>

            </Link>
          </li>
          <li>
            <a>
              <Link
                title="Tv series"
                href="/tv"
                // onClick={()=>Router.push('/tv')}
                className={`flex items-center p-2 text-base font-normal text-gray-900
              rounded-lg dark:text-white hover:bg-red-600 dark:hover:bg-gray-700 hover:text-white
              ${router.asPath === '/tv' && 'bg-red-600'}
              `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                </svg>

              </Link>
            </a>
          </li>
          <li>
            <Link
              title="new movies/ series"
              href="/new"
              className={`flex items-center p-2 text-base font-normal text-gray-900
              rounded-lg dark:text-white hover:bg-red-600 dark:hover:bg-gray-700 hover:text-white
              ${router.asPath === '/new' && 'bg-red-600'}
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
              </svg>

            </Link>
          </li>
          <li>
            <Link
              title="movies"
              href="/movies"
              className={`flex items-center p-2 text-base font-normal text-gray-900
              rounded-lg dark:text-white hover:bg-red-600 dark:hover:bg-gray-700 hover:text-white
              ${router.asPath === '/movies' && 'bg-red-600'}
              `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                <path d="M1 12.5A4.5 4.5 0 005.5 17H15a4 4 0 001.866-7.539 3.504 3.504 0 00-4.504-4.272A4.5 4.5 0 004.06 8.235 4.502 4.502 0 001 12.5z" />
              </svg>

            </Link>
          </li>
          <li>
            <Link
              title="my list"
              href="/mylist"
              className={`flex items-center p-2 text-base font-normal text-gray-900
              rounded-lg dark:text-white hover:bg-red-600 dark:hover:bg-gray-700 hover:text-white
              ${router.asPath === '/mylist' && 'bg-red-600'}
              `}
            >
              <HiClipboardList
                className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
            </Link>
          </li>
          <li>
            <Link
              title="logout"
              href="#"
              onClick={() => logout()}
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-red-600 dark:hover:bg-gray-700 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>

            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default NewHeaders;
