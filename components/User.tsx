import React from 'react';
import {useSession, signIn, signOut} from "next-auth/react";

// Todo: type more explicitly of argument
const User = ({className}: any) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
      <img className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`} onClick={() => signOut()} alt="user-image" src={session.user == null ? '' : session.user.image}/>
      </>
    )
  }

  return (
    <>
    <button className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`} onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default User;