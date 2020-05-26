import { createContext } from 'react';

const SearchContext = createContext({
  searches: [],
  addToSearchList: () => {}
});

export default SearchContext;
