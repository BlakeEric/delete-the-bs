/* eslint-env jest */
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-DOM'
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json'

import SearchField from './SearchField'


describe('Search Field', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchField />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('tracks input value in state', () => {
    const wrapper = mount(<SearchField />)
    const input = wrapper.find('input');
    input.instance().value = "field input string";
    input.simulate('change');
    expect(wrapper.state("url")).toEqual("field input string")
  })

  it('renders a disabled submit button on mount', () => {
    const wrapper = mount(<SearchField />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('enables the submit button if a valid url is supplied', () => {
    const wrapper = mount(<SearchField />)
    const input = wrapper.find('input');
    input.instance().value = "https://validurl.com";
    input.simulate('change');

    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('disables the submit button if an invalid url is supplied', () => {
    const wrapper = mount(<SearchField />)
    const input = wrapper.find('input');
    input.instance().value = "brokenurl.com";
    input.simulate('change');

    expect(toJson(wrapper)).toMatchSnapshot();
  })

})
