import React from 'react';
import App from 'next/app';
import SearchContext from '../components/SearchContext'

class MyApp extends App {
  state = {
    searches: []
  };

  addToSearchList = (url) => {

    const searches = [url, ...this.state.searches.filter((item, index) =>
      item !== url && index < 5
    )]

    this.setState({
      searches
    })
  }


  // https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/
  render() {
    const { Component, pageProps } = this.props;

    const contextValue = {
      searches: this.state.searches,
      addToSearchList: this.addToSearchList
    }

    return (
      <SearchContext.Provider value={contextValue}>
        <Component {...pageProps} />;
      </SearchContext.Provider>
    )
  }
}

export default MyApp;
