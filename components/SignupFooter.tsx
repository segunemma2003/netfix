/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';

function SignupFooter() {
  return (
    <div className="w-full px-4 lg:px-20 flex flex-col bg-[#333333] space-y-8 py-8 mt-auto">
      <Link
        href="#"
      >
        Questions? Contact us.
      </Link>
      <div className="flex flex-row  space-x-32 text-xs">
        <div className="flex flex-col space-y-2">
          <Link
            href="#"
          >
            FAQ

          </Link>
          <Link
            href="#"
          >
            Privacy

          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <Link
            href="#"
          >
            Help Center

          </Link>
          <Link
            href="#"
          >
            Cookie Preferences

          </Link>
        </div>
        <div className="hidden lg:flex flex-col space-y-2">
          <Link
            href="#"
          >
            Netflix Shop

          </Link>
          <Link
            href="#"
          >
            Corporate Information

          </Link>
        </div>
        <div className="hidden lg:flex flex-col space-y-2">
          <Link
            href="#"
          >
            Terms of Use

          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupFooter;
