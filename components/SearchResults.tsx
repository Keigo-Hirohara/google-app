import React from 'react';
import PagenationButtons from './PagenationButtons';
import Parser from 'html-react-parser';

const SearchResults = ({results}: any) => {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>
        {results.items?.map((result: any) => (
          <div className="max-w-xl mb-8" key={result.link}>
            <div className="group">
              <a className="text-sm truncate" href={result.link}></a>
              <a className="grouphover:underline decoration-blue-800" href={result.link}>
                <h2 className="truncate text-xl font-medium text-blue-800">{result.title}</h2>
              </a>
            </div>
            <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
          </div>
        ))}
      <PagenationButtons/>
    </div>
  );
};

export default SearchResults;