import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import useAuth from '../hooks/useAuth';

function HeaderSign() {
  const { logout } = useAuth();
  return (
    <header className="border-b border-white/10 bg-[#141414]">
      <Link href="/">
        <img
          src="https://rb.gy/ulxxee"
          alt="Netflix"
          width={150}
          height={90}
          className="cursor-pointer object-contain"
        />
      </Link>
      <button
        type="button"
        className="text-lg font-medium hover:underline"
        onClick={() => Router.push('/login')}
      >
        Sign In
      </button>
    </header>
  );
}

export default HeaderSign;
