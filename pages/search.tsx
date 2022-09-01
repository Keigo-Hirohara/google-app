import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import ImageResults from '../components/ImageResults';
import SearchResults from '../components/SearchResults';

const search = ({results}: any) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>

      {/* Search Header */}

      <SearchHeader/>

      {/* Search web and Images Results */}
      {router.query.searchType === "image" ? (
        <ImageResults results={results}/>
      ) : (
        <SearchResults results={results}/>
      )}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const startIndex = context.query.start || "1";
  const mockData = false;
  const data = mockData
     ? Response : 
    //  Todo: implement fetch function
     await fetch(`https://www.googleapis.com/customsearch/v1?key=${
      process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`)
      .then((response) => response.json());
  return {
    props: {
      results: data,
    }
  }
}

export default search;