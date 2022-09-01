import React from 'react';
import {useRouter} from "next/router";

// Todo: type more explicitly of argument
const SearchHeaderOption = ({title, Icon, selected}: any) => {
  const router = useRouter();
  // Todo: type more explicitly of argument
  const selectTab = (title: any) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${title === "Images" ? "image" : ""}`
    )
  }
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:borde-:blue-500 pb-3 ${selected && "text-blue-500 border-blue-500"}`}
      onClick={() => selectTab(title)}
    >
      <Icon className="h-4"/>
      <p>{title}</p>
    </div>
  );
};

export default SearchHeaderOption;