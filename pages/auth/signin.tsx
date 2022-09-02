import React from 'react';
import Header from '../../components/Header';
import {getProviders, signIn} from 'next-auth/react';
import { SignInPropType } from '../../types/opts/sign-in-prop';
import Image from 'next/image';

const SignIn = (props: SignInPropType) => {
  return (
    <>
      <Header/>
      <div className="mt-40">
        {Object.values(props.providers).map(provider => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              className='object-cover'
              width="240px" height="80"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
              alt="google-logo"
            />
            <p className='text-sm italic my-10 text-center'>このページは学習のために作成されています</p>
            <button
              className='bg-red-400 rounded-lg text-white p-3 hover:bg-red-500'
              onClick={() => signIn(provider.id, {callbackUrl: "/"})}
            >Sigh in with {provider.name}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {providers}
  }
}

export default SignIn;