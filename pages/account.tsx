import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import Membership from '../components/Membership';
import useAuth from '../hooks/useAuth';
import { Product } from '../typings';
import productss from './api/products';

interface Props {
    products: Product[]
  }

function Account({ products }: Props) {
  const { logout, loading } = useAuth();
  const [isBillingLoading, setBillingLoading] = useState(false);
  const subscription = products[0];

  if (loading) return null;
  return (
    <div>
      <Head>
        <title>Account Settings - Netflix</title>

      </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            alt="a"
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img
              src="https://rb.gy/4vfk4r"
              alt=""
              className="h-7 w-7"
            />
            <p className="text-xs font-semibold text-[#555]"> Member since 24th August 2022 </p>
          </div>
        </div>

        <Membership />

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
          <h4 className="text-lg text-[gray]">Plan Details</h4>
          {/* Find the current plan */}
          <div className="col-span-2 font-medium">
            {
                    products.filter(
                      (product) => product.id === subscription?.id,
                    )[0]?.name
                    }
          </div>
          <p
            className="cursor-pointer text-blue-500 hover:underline md:text-right"
          >
            Change plan
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
          <h4 className="text-lg text-[gray]">Settings</h4>
          <p
            className="col-span-3 cursor-pointer text-blue-500 hover:underline"
            onClick={logout}
            aria-hidden="true"
          >
            Sign out of all devices
          </p>
        </div>
      </main>
    </div>
  );
}

export default Account;

export const getStaticProps: GetStaticProps = async () => {
  const products:Product[] = productss;

  return {
    props: {
      products,
    },
  };
};
