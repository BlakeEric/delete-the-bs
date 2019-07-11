// This will wrap the other components and hold the application state to pass down to
// other components.

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import SearchField from './SearchField'
import Footer from './Footer'
import Content from './Content'
import getConfig from 'next/config'

const { publicRuntimeConfig = {} } = getConfig() || {};
const baseUrl = publicRuntimeConfig.baseUrl || process.env.BASE_URL;


const initialState = {
  content: null, //object with disc, image, text, copyright
  isLoading: false,
  url: '',
  error: null,
}

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = initialState;
    this.submitUrl = this.submitUrl.bind(this)
    this.reset = this.reset.bind(this)
  }

  submitUrl(url) {
    this.setState({isLoading: true});
    fetch(encodeURI(`${baseUrl}/api/scrape?url=${url}`))
    .then(res => res.json())
    .then((data) => {
      this.setState({content: data})
    })
    .catch((err) => {
      alert("Thar waz an error")
    })
    .then(() => {
      this.setState({
        isLoading: false,
        url: url
      });
    });
  }


  setUrl(url) {
    this.setState({url: url});
  }

  reset() {
    this.setState(initialState);
  }

  render() {
    return (
      <div>
        <div className="pageInner">
          <Content content={this.state.content} isLoading={this.state.isLoading} url={this.state.url} reset={this.reset}/>
          {!this.state.url ?
            <SearchField submitUrl={this.submitUrl} isLoading={this.state.isLoading} setUrl={this.setUrl} />
          : ''}
          {this.state.isLoading ?
            <div className="loadingText">
              <h2>Loading...</h2>
            </div>
          : ''}
        </div>
        <Footer />
      </div>
    )
  }

}


// Article.propTypes = {
//   data: PropTypes.object.isRequired,
// }
