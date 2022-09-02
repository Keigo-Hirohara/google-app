import React from 'react';
import PagenationButtons from './PagenationButtons';
import Parser from 'html-react-parser';
import { SearchItemType, SearchResultsType } from '../types/opts/search-results';

const SearchResults = ({results}: SearchResultsType) => {

  if (results.error.code == 429) {
    return (
      <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        <h2 className='mt-10'>申し訳ありません！検索数の上限を超えてしまいました！</h2>
        <h2>時間を置いて再度お試し下さい。</h2>
      </div>
    )
  }

  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">結果 {results.searchInformation.formattedTotalResults} 件 ({results.searchInformation.formattedSearchTime} 秒)</p>
        {results.items?.map((result: SearchItemType) => (
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