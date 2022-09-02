import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import { ContextType } from '../types/context';
import SearchHeader from '../components/SearchHeader';
import ImageResults from '../components/ImageResults';
import SearchResults from '../components/SearchResults';
import { SearchResultsType } from '../types/search-results';

const search = ({results}: SearchResultsType) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>
      <SearchHeader/>
      {router.query.searchType === "image" ? (
        <ImageResults results={results}/>
      ) : (
        <SearchResults results={results}/>
      )}
    </div>
  );
};

export async function getServerSideProps(context: ContextType) {
  const startIndex: string = context.query.start || "1";
  const mockData: boolean = false;
  const data: Promise<Response> | boolean = mockData
     ? Response :
     await fetch(`https://www.googleapis.com/customsearch/v1?key=${
      process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`)
      .then((response) => response.json());
  console.log(typeof(context));
  
  return {
    props: {
      results: data,
    }
  }
}

export default search;