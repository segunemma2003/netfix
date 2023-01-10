import { BellIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';

function MenuDropdown() {
  return (
    <>
      <button
        id="dropdownUsersButton"
        data-dropdown-toggle="language-dropdown-menu"
        type="button"
      >
        {/* <BellIcon
          className="h-6 w-6"
        /> */}
      </button>
      <div id="language-dropdown-menu" className="hidden z-10 w-60 bg-white rounded shadow dark:bg-gray-700">
        <ul className="overflow-y-auto py-1 h-48 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton">
          <li>
            <Link href="/" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <img className="mr-2 w-6 h-6 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jes" />
              Jese Leos
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <img className="mr-2 w-6 h-6 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese" />
              Robert Gough
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <img className="mr-2 w-6 h-6 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese" />
              Bonnie Green
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <img className="mr-2 w-6 h-6 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Jese" />
              Leslie Livingston
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <img className="mr-2 w-6 h-6 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese" />
              Michael Gough
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <img className="mr-2 w-6 h-6 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese" />
              Joseph Mcfall
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <img className="mr-2 w-6 h-6 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese" />
              Roberta Casas
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <img className="mr-2 w-6 h-6 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese" />
              Neil Sims
            </Link>
          </li>
        </ul>
        <Link href="/" className="flex items-center p-3 text-sm font-medium text-blue-600 bg-gray-50 border-t border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline">
          <svg className="mr-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" /></svg>
          Add new user
        </Link>
      </div>
    </>
  );
}

export default MenuDropdown;
