import React, {useRef} from 'react';
import {useRouter} from 'next/router';
import Image from "next/image";
import {XIcon, MicrophoneIcon, SearchIcon} from "@heroicons/react/solid";
import User from './User';
import SearchHeaderOptions from './SearchHeaderOptions';
import { SearchInputType } from '../types/search-input';

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef<SearchInputType | null>(null);
  
  const search = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();
    const term  = searchInputRef.current?.value;
    if (!term) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  }

  return (
    <header className='stickey top-0 bg-white'>
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          width={120}
          objectFit="contain"
          height="40"
          className='cursor-pointer'
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
        />
        <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'>
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />
          <XIcon 
            onClick={() => (searchInputRef.current == null ? null : searchInputRef.current.value = "")}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <SearchIcon className='h-6 hidden sm:inlien-flex text-blue-500'/>
          <button onClick={search} type="submit" hidden></button>
        </form>
        <User className="ml-auto whitespace-nowrap"/>
      </div>
      <SearchHeaderOptions/>
    </header>
  );
};

export default SearchHeader;