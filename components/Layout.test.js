/* eslint-env jest */
import ReactDOM from 'react-dom'
import Layout from './Layout'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Layout component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout><h1>Child Node</h1></Layout>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a ui as expected, including child components', () => {
    const wrapper = mount(<Layout><h1>Child Node</h1></Layout>)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
