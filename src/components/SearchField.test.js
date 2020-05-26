/* eslint-env jest */
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-DOM'
import toJson from 'enzyme-to-json'

import SearchField from './SearchField'
import App from './App'

const mockProps = {
  url: {
    value: "",
    touched: false
  },
  content: null,
  isLoading: false,
  error: null,
  setUrl: () => {}
}

describe('Search Field', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchField {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('tracks input value in state', () => {
    // The app component holds url value in state
    const wrapper = mount(<App />)
    const input = wrapper.find('input');
    input.instance().value = "field input string";
    input.simulate('change');
    expect(wrapper.state("url").value).toEqual("field input string")
  })

  it('renders a disabled submit button on mount', () => {
    const wrapper = mount(<SearchField {...mockProps} />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('enables the submit button if a valid url is supplied', () => {
    // The app component holds url value in state
    const wrapper = mount(<App />)
    const input = wrapper.find('input');
    input.instance().value = "https://validurl.com";
    input.simulate('change');

    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('disables the submit button if an invalid url is supplied', () => {
    // The app component holds url value in state
    const wrapper = mount(<App />)
    const input = wrapper.find('input');
    input.instance().value = "brokenurl.com";
    input.simulate('change');

    expect(toJson(wrapper)).toMatchSnapshot();
  })

})
