
import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default class SearchField extends Component {

  constructor(props) {
    super(props)
    this.state = {
      valid: false,
      alert: null,
      inProgress: false,
    }
  }

  handleError(err) {
    alert("Oops, Something went wrong! Please try again");
  }

  async handleSubmit(event) {
    event.preventDefault()
    const url = ReactDOM.findDOMNode(this.refs.url).value.trim();
    this.setState({inProgress: true})
    this.props.submitUrl(url);
  }

  alertDismiss() {
    this.setState({alert: null});
  }



  validate() {

    const url = ReactDOM.findDOMNode(this.refs.url).value.trim();
    const pattern = /^(?:(?:https?|HTTPS?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/
    let isValid = pattern.test(url);

    if ( isValid ) {
      this.setState({valid: true});
    } else {
      this.setState({valid: false});
    }

  }

  render() {
    return (
      <div id="searchWrapper">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            ref="url" type="text"
            onChange={this.validate.bind(this)}
            placeholder="Paste a website URL"
          />
          <button type="submit" className="contactForm-submitButton" disabled={!this.state.valid || this.state.inProgress}>
            {this.props.isLoading ? 'Loading' : 'Submit'}
          </button>
        </form>
      </div>
    )
  }

}
