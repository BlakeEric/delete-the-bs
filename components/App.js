import React, { Component } from 'react';
import SearchField from './SearchField'
import Content from './Content'
import PrevSearches from './PrevSearches'
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
      url: {
        value: "",
        touched: false
      },
      content: null, //object with disc, image, text, copyright
      isLoading: false,
      error: null,
      successfulSearches: []
    }
  }

  state = this.initialState();

  generateSearchList = () => {

    const url = this.state.url.value;

    const searches = [url, ...this.state.successfulSearches.filter((item, index) =>
      item !== url && index < 5
    )]

    return searches;
  }

 /*
  * Make an API request to scrape the url webpage content
  */
  submitUrl = () => {

    this.setState({
      isLoading: true,
      error: null,
      content: null,
      url: {
        ...this.state.url,
        touched: false
      }
    });

    fetch(encodeURI(`${baseUrl}/api/scrape?url=${this.state.url.value}`))
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
        isLoading: false,
        successfulSearches: this.generateSearchList()
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
   * Keep track of controlled form in state
   */
   setUrl = (urlInput) => {
     this.setState({
       url: {
         value: urlInput,
         touched: true
       }
     })
   }

   /*
    * Resubmit a previous item
    */
    resubmit = (value) => {
      this.setState({
        url: {
          value: value,
        }
      },
      () => this.submitUrl()
    )}

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
          <SearchField key={this.state.remountKey} url={this.state.url} setUrl={this.setUrl} submitUrl={this.submitUrl} isLoading={this.state.isLoading} />
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

        <PrevSearches handleResubmit={this.resubmit}data={this.state.successfulSearches} />
      </>
    )
  }
}
