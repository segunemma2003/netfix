/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

interface Inputs {
  email: string
  password: string
}

function ForgotPassword() {
  const [login, setLogin] = useState(false);
  const {
    signIn, signUp, error, setError,
  } = useAuth();
  const [selected, setSelected] = useState('email');
  const moveUser = () => Router.push('/signup');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  const handleChange = (event:any) => {
    setSelected(event.target.value);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        
      </Head>
      <Image
        src="https://rb.gy/vpa0jn"
        layout="fill"
        alt="ss"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
        alt=""
      />

      <form
        className="relative top-20 space-y-8 rounded bg-black/75 py-20 px-32 md:mt-0 md:max-w-md md:px-14 mb-20"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-semibold whitespace-nowrap">Forgot Email/Password</h1>
        <div className="flex flex-col space-y-3">
          <p>How would you like to reset your password?</p>
          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-2">
              <input
                type="radio"
                name="mytype"
                value="email"
                checked={selected === 'email'}
                onChange={handleChange}
              />
              <label>Email</label>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <input
                type="radio"
                name="mytype"
                value="text"
                checked={selected === 'text'}
                onChange={handleChange} 
              />
              <label>Text Message (SMS)</label>
            </div>

          </div>
          <div>
            {selected === 'email' ? (<p>We will send you an email with instructions on how to reset your password.</p>)
              : (
                <p>
                  We will text you a verification code to reset your password. 
                  Message and data rates may apply.
                </p>
              )}
          </div>
        </div>
        <div className="space-y-4">
          <label
            className="inline-block w-full"
            htmlFor="email"
          >
            <input
              type={selected === 'email' ? 'email' : 'text'}
              placeholder={selected === 'email' ? 'Email' : 'Phone Number'}
              className={`input ${
                errors.email && 'border-b-2 border-orange-500'
              }`}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
        </div>
        {/* <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row space-x-2 items-center">
            <input
              type="checkbox"
            />
            <p>Remember me</p>
          </div>
          <Link
            href="#"
          >
            Need help?
          </Link>
        </div> */}

        <button
          className="w-full rounded bg-[#E50914] py-3 font-semibold"
        //   onClick={() => setLogin(true)}
          type="submit"
        >
          {
            selected === 'email' ? 'Email me' : 'Text me'
          }
        </button>
        <div aria-hidden="true" id="alert" onClick={() => setError('')} className={`${error ? 'flex' : 'hidden'} bg-[#E50914] text-white text-sm  justify-between cursor-pointer shadow-2xl px-2 py-4`}>
          <p>{error}</p>
          <p className="text-base">x</p>
        </div>
        {/* <div className="text-[gray]">
          New to Netflix?
          {' '}
          <button
            className="cursor-pointer text-white hover:underline"
            onClick={() => moveUser()}
            type="button"
          >
            Sign up now
          </button>
        </div> */}
        {/* <p className="text-xs">
          This page is protected by Google reCAPTCHA
          to ensure you are not a bot. Learn more.
        </p> */}
      </form>
      <div className="w-full relative top-20 px-20 flex flex-col bg-black/75 space-y-8 py-8 mt-auto">
        <Link
          href="#"
        >
          Questions? Contact us.
        </Link>
        <div className="flex flex-row space-x-32 text-xs">
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
          <div className="flex flex-col space-y-2">
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
          <div className="flex flex-col space-y-2">
            <Link
              href="#"
            >
              Terms of Use

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
