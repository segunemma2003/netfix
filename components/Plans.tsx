import { CheckIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Product } from '../typings';
import Loader from './Loader';
import SignupFooter from './SignupFooter';
import Table from './Table';

interface Props {
    products: Product[]
  }

function Plans({ products }: Props) {
  const { logout } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2]);
  // eslint-disable-next-line no-unused-vars
  const [isBillingLoading, setBillingLoading] = useState(false);

  return (
    <div>
      <Head>
        <title>Home - Netflix</title>
        
      </Head>
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
          onClick={logout}
        >
          Sign Out
        </button>
      </header>
      <main className="mx-auto max-w-6xl px-3 pt-28 pb-12 transition-all md:px-10 space-y-2">
        <p className="text-sm">STEP 2 OF 3</p>
        <h1 className="mb-3 text-3xl font-medium">Choose the plan that is right for you</h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" />
            {' '}
            Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" />
            {' '}
            Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" />
            {' '}
            Change or cancel
            your plan anytime.
          </li>
        </ul>
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-4/6">
            {products.map((product) => (
              <div
                className={`planBox ${
                  selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'
                }`}
                key={product.id}
                aria-hidden="true"
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>
          <Table products={products} selectedPlan={selectedPlan} />
          <div className="w-9/12">
            <small>
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your
              internet
              service and device capabilities.
              Not all content is available in all resolutions.
              See our Terms of Use for more details.
            </small>
            <br />
            {' '}
            <br />
            <small>
              Only people who live with you may use your account. Watch on 4
              different devices at the same time with Premium, 2 with Standard,
              and 1 with Basic and Mobile.
            </small>
          </div>
          <button
            type="button"
            onClick={() => Router.push('/signup/howtopay')}
            disabled={!selectedPlan || isBillingLoading}
            className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
              isBillingLoading && 'opacity-60'
            }`}
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-gray-300" />
            ) : (
              'Next'
            )}
          </button>
        </div>
      </main>
      <SignupFooter />
    </div>
  );
}

export default Plans;
