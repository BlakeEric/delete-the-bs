/* eslint-env jest */
import ReactDOM from 'react-dom'
import PrevSearches from './PrevSearches'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('PrevSearches component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PrevSearches />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders nothing when data is empty', () => {
    const wrapper = shallow(<PrevSearches />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('renders nothing when data array length is 1', () => {
    const wrapper = shallow(<PrevSearches data={["https://google.com"]}/>)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('renders ui correctly when more than one item exits in data prop', () => {
    const wrapper = shallow(<PrevSearches data={["https://google.com", "https://wikipedia.com", "https://medium.com"]}/>)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

});
