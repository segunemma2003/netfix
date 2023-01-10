import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import {
  FaCcMastercard, FaCcVisa, FaChevronRight, FaCreditCard,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import useAuth from '../../hooks/useAuth';
import Welcome from '../../components/Welcome';
import HeaderSign from '../../components/HeaderSign';
import SignupFooter from '../../components/SignupFooter';

interface Inputs {
    firstName: string
    lastName: string
    cardNumber: string
    expDate: string
    cvv: string
    email: string
  }

function SignPayForm() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
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
    //   await signIn(data.email, data.password);
    } else {
    //   await signUp(data.email, data.password);
    }
  };
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        
      </Head>
      <HeaderSign />

      <main className="mt-96 pt-72">
        <div className="w-4/12 flex flex-col space-y-3 text-start  mx-auto pb-32">

          <p className="text-sm">STEP 3 OF 3</p>
          <h4 className="pt-2 text-3xl font-bold">Set up your credit or debit card</h4>
          <div className="flex flex-row float-left">

            <FaCcVisa className=" w-8  h-6" />
            <FaCcMastercard className=" w-8  h-6" />
            <FaCreditCard className=" w-8  h-6" />
          </div>
          <form
            className="space-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <label
                className="inline-block w-full"
                htmlFor="firstname"
              >
                <input
                  type="text"
                  placeholder="First Name"
                  className={`input ${
                    errors.firstName && 'border-b-2 border-orange-500'
                  }`}
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Please enter a valid first name.
                </p>
                )}
              </label>
              <label
                htmlFor="password"
                className="inline-block w-full"
              >
                <input
                  type="text"
                  {...register('lastName', { required: true })}
                  placeholder="Last Name"
                  className={`input ${
                    errors.lastName && 'border-b-2 border-orange-500'
                  }`}
                />
                {errors.lastName && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Last Name is required
                </p>
                )}
              </label>
              <label
                className="inline-block w-full"
                htmlFor="cardNumber"
              >
                <input
                  type="number"
                  placeholder="CardNumber"
                  className={`input ${
                    errors.cardNumber && 'border-b-2 border-orange-500'
                  }`}
                  {...register('cardNumber', { required: true })}
                />
                {errors.cardNumber && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Please enter a valid Card Number.
                </p>
                )}
              </label>
              <label
                className="inline-block w-full"
                htmlFor="expDate"
              >
                <input
                  type=""
                  placeholder="Expiration Date (MM/YY)"
                  className={`input ${
                    errors.expDate && 'border-b-2 border-orange-500'
                  }`}
                  {...register('expDate', { required: true })}
                />
                {errors.expDate && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Please enter a valid expiry date.
                </p>
                )}
              </label>
              <label
                className="inline-block w-full"
                htmlFor="cvv"
              >
                <input
                  type="text"
                  placeholder="Security code (CVV)"
                  className={`input ${
                    errors.cvv && 'border-b-2 border-orange-500'
                  }`}
                  {...register('cvv', { required: true })}
                />
                {errors.cvv && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Please enter a valid cvv.
                </p>
                )}
              </label>
            </div>
            <div className="w-full flex flex-row justify-between items-center p-4 bg-[#333333]">
              <div className="flex flex-col">
                <p>$ 20/Month</p>
                <p>Premium plan</p>
              </div>
              <Link
                href="/signup/plan"
              >
                Change
              </Link>
            </div>
            <div className="w-full text-xs">
              Your payments will be processed internationally. Additional bank fees may apply.
            </div>
            <div className="w-full text-xs">
              By checking the checkbox below, you agree to our Terms of Use, Privacy Statement,
              and that you are over 18. Netflix will automatically continue your membership and
              charge the membership fee (currently ₦4,400/month) to your payment method until you
              cancel.
              You may cancel at any time to avoid future charges.
            </div>
            <div className="flex flex-row gap-x-1">
              <input
                type="checkbox"
                className="w-8 h-8"
              />
              <p>I agree.</p>
            </div>

            <button
              className="w-full rounded bg-[#E50914] py-3 font-semibold"
              type="button"
              onClick={() => Router.push('/')}
            >
              Start Membership
            </button>

          </form>
        </div>

      </main>
      <SignupFooter />
    </div>
  );
}

export default SignPayForm;
