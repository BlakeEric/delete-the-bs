import React, { Component } from 'react';
import SearchField from './SearchField'
import Content from './Content'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const baseUrl = publicRuntimeConfig.baseUrl || process.env.BASE_URL;



export default class App extends Component {

 /*
  * Return an object of blank state values.
  * remountKey will be unique each time the object is regenerated
  * and will force remound of SearchField
  */
  initialState = () => {
    return {
      url: "",
      content: null, //object with disc, image, text, copyright
      isLoading: false,
      error: null,
      remountKey: (new Date()).getTime(),
      prevSearches: []
    }
  }

  state = this.initialState();

 /*
  * Make an API request to scrape the url webpage content
  */
  submitUrl = (url) => {

    let prevSearches = [];

    if (this.state.content) {
      prevSearches = [this.state.content, ...this.state.prevSearches]
    }

    this.setState({
      isLoading: true,
      error: null,
      content: null,
      prevSearches
    });

    fetch(encodeURI(`${baseUrl}/api/scrape?url=${url}`))
    .then(res => {
      return res.json()
    })
    .then((data) => {
      if (data.error) {
        if(data.error.statusCode === 404)
          throw "Webpage not found"

        throw "Request error"
      }

      return data
    })
    .then((data) => {
      this.setState({
        content: data,
        isLoading: false
      })
    })
    .catch((err) => {
      this.setState({
        error: err,
        isLoading: false
      });
    })
  }

  /*
   * Reset App to it's initial state
   */
  reset = () => {
    this.setState(this.initialState());
  }


  render() {
    return (
      <>
        <section className={`pageInner-header ${this.state.isLoading || this.state.content || this.state.error ? 'top' : ''}`}>
          <div className="pageInner-titleWrap">
            <h1 className="title">Delete the Bullshit</h1>
            <h3 className="subTitle">
              View the content of any website distraction-free
              (without ads, trackers, or other bullshit).
            </h3>
          </div>
          <SearchField key={this.state.remountKey} submitUrl={this.submitUrl} isLoading={this.state.isLoading} />
        </section>

        {this.state.content && !this.state.isLoading ?
          <Content content={this.state.content} isLoading={this.state.isLoading} url={this.state.url} reset={this.reset}/>
        : ''}

        {this.state.isLoading ?
          <div className="loadingText">
            <h2>Deleting Bullshit</h2>
          </div>
        : ''}

        {this.state.error ?
          <div className="errorMessage">
            <h2>Oops, that didn't work...</h2>
            <p>Reason: {this.state.error}</p>
            <p>Make sure you submitted a valid url or try a different one</p>
          </div>
        : ''}
      </>
    )
  }
}
