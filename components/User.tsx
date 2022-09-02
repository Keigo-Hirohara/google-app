import React, { useEffect } from 'react';
import {useSession, signIn, signOut} from "next-auth/react";
import { SearchPageClassType } from '../types/search-page-class';


const User = ({className}: SearchPageClassType) => {
  const { data: session } = useSession();

  const signInWrapper = () => {
    signIn();
  }

  const signOutWrapper = () => {
    signOut();
  }

  if (session?.user?.image) {
    return (
      <>
      <img className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`} onClick={signOutWrapper} alt="user-image" src={session.user?.image}/>
      </>
    )
  }

  return (
    <>
    <button className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`} onClick={signInWrapper}>Sign in</button>
    </>
  );
};

export default User;