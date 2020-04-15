import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default class SearchField extends Component {

  state = {
    valid: false,
    alert: null,
    url: '',
    touched: false,
  }

  handleError(err) {
    alert("Oops, Something went wrong! Please try again");
  }

 /*
  * Wrapper function for submitUrl callback prop
  */
  handleSubmit = (event) => {

    event.preventDefault()

    this.setState({
      touched: false
    })

    if (!this.isValid())
      return

    this.props.submitUrl(this.state.url);
  }

 /*
  * Keep track of controlled form in state
  */
  setUrl = (urlInput) => {
    this.setState({
      url: urlInput,
      touched: true
    })
  }

 /*
  * Validate the url field
  */
  isValid = () => {
    const pattern = /^(?:(?:https?|HTTPS?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/
    return pattern.test(this.state.url);
  }

  render() {
    return (
      <div id="searchWrapper">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={(event) => this.setUrl(event.target.value)}
            placeholder="Paste a website URL to delete bullshit"
            value={this.state.url}
          />
          <button type="submit"
            className="contactForm-submitButton"
            disabled={!this.state.touched || this.props.isLoading || !this.isValid()}
          >
            {this.props.isLoading ? '…' : 'Submit'}
          </button>
        </form>
      </div>
    )
  }

}

SearchField.defaultProps = {
  isLoading: false
}
