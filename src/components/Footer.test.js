/* eslint-env jest */
import ReactDOM from 'react-dom'
import Footer from './Footer'

describe('Footer component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
