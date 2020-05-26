/* eslint-env jest */
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Content from './Content'

let mockContent = {
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Campo_de_Blue_Bonnets.jpeg",
  title: "Mock Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\
  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\
  et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia\
  voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos\
  qui ratione voluptatem sequi nesciunt.\nNeque porro quisquam est, qui dolorem ipsum quia dolor\
  sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt\
  ut labore et dolore magnam aliquam quaerat voluptatem."
}

describe('Content component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Content content={mockContent} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('correctly converts linebreaks to <br> tags', () => {
    const wrapper = mount(<Content content={mockContent} />)
    expect(wrapper.find('p').first().html().includes("<br>")).toEqual(true)
  })

  it('renders UI with image tag when src supplied in props', () => {
    const wrapper = mount(<Content content={mockContent} />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('renders UI WITHOUT image tag when NO src supplied in props', () => {
    const content = {...mockContent, image: ""}
    const wrapper = mount(<Content content={content} />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

});
