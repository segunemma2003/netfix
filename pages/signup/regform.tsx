import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import useAuth from '../../hooks/useAuth';
import Welcome from '../../components/Welcome';
import HeaderSign from '../../components/HeaderSign';
import SignupFooter from '../../components/SignupFooter';

interface Inputs {
    email: string
    password: string
  }

function SignForm() {
  const [login, setLogin] = useState(false);
  const {
    signIn, signUp, error, setError,
  } = useAuth();
  const [email, setEmail] = useState<string>('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  useEffect(() => {
    const remail:string = window.localStorage.getItem('email') ?? '';
    setValue('email', remail);
  }, []);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSign />

      <main className="content-center mt-52 pb-20">
        <div className="w-4/6 flex flex-col space-y-3 text-start  mx-auto">

          <p className="text-sm">STEP 1 OF 3</p>
          <h4 className="pt-2 text-3xl font-bold">Create a password to start your membership</h4>
          <p className="text-md">
            Just a few more steps and you are done!
          </p>
          <p className="text-md pb-4">
            We hate paperwork, too.
          </p>
          <form
            className="space-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <label
                className="inline-block w-full"
                htmlFor="email"
              >
                <input
                  type="email"
                  placeholder="Email"
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
              <label
                htmlFor="password"
                className="inline-block w-full"
              >
                <input
                  type="password"
                  {...register('password', { required: true })}
                  placeholder="Password"
                  className={`input ${
                    errors.password && 'border-b-2 border-orange-500'
                  }`}
                />
                {errors.password && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Your password must contain between 4 and 60 characters.
                </p>
                )}
              </label>
            </div>
            <div className="w-full flex flex-row space-x-4 items-center">
              <input
                type="checkbox"
                className="w-8 h-8"
              />
              <p>Please do not email me Netflix special offers</p>
            </div>

            <button
              className="w-full rounded bg-[#E50914] py-3 font-semibold"
              type="submit"
              onClick={() => setLogin(false)}
            >
              Next
            </button>
            <div aria-hidden="true" id="alert" onClick={() => setError('')} className={`${error ? 'flex' : 'hidden'} bg-[#E50914] text-white text-sm  justify-between cursor-pointer shadow-2xl px-2 py-4`}>
              <p>{error}</p>
              <p className="text-base">x</p>
            </div>
          </form>
        </div>
      </main>
      <SignupFooter />
    </div>
  );
}

export default SignForm;
