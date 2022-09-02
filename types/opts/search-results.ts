// Ref: add new type element if necessary...
export type SearchResultsType = {
  results: {
    searchInformation: {
      formattedTotalResults: string;
      formattedSearchTime: string;
    };
    error: {
      code: number;
    };
    items: SearchItemType[];
  };
};

export type SearchItemType = {
  title: string;
  link: string;
  displayLink: string;
  htmlSnippet: string;
  image: {
    contextLink: string;
  };
};
