import React from 'react';
import {useSession, signIn, signOut} from "next-auth/react";
import { SearchPageClassType } from '../types/opts/search-page-class';
import Image from 'next/image';


const User = ({className}: SearchPageClassType) => {
  const { data: session } = useSession();

  const signInWrapper = (): void => {
    signIn();
  }

  const signOutWrapper = (): void => {
    signOut();
  }

  if (session?.user?.image) {
    return (
      <div className='relative'>
      <Image className={`rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`} width="40" height="40" onClick={signOutWrapper} alt="user-image" src={session.user?.image} />
      </div>
    )
  }

  return (
    <>
    <button className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`} onClick={signInWrapper}>サインイン</button>
    </>
  );
};

export default User;