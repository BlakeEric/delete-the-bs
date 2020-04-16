/* eslint-env jest */
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import App from './App'
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

global.fetch = jest.fn(() => Promise.resolve({ json: () => mockContent}))

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const wrapper = mount(<App />)

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('sets state appropriately when form is submitted', async () => {

    const wrapper = mount(<App />)

    const input = wrapper.find('input');
    input.instance().value = "http://wikipedia.com";
    input.simulate('change');

    const form = wrapper.find('form').first()
    form.simulate('submit');

    expect(wrapper.state().content).toEqual(null)
    expect(wrapper.state().isLoading).toEqual(true)

    // wait until all promises are resolved
    await tick();

    expect(wrapper.state().content).toEqual(mockContent)
    expect(wrapper.state().isLoading).toEqual(false)
  });

  it('modifies ui appropriately when form is submitted', () => {

    const wrapper = mount(<App />)

    const input = wrapper.find('input');
    input.instance().value = "http://wikipedia.com";
    input.simulate('change');

    const form = wrapper.find('form').first()
    form.simulate('submit');

    expect(wrapper.find('.pageInner-header').first().hasClass('top')).toEqual(true)

  });

  it('renders <Content /> if it exists in state and resets UI when "reset" button is clicked', async() => {
    const wrapper = mount(<App />)
    const input = wrapper.find('input');
    input.instance().value = "http://wikipedia.com";
    input.simulate('change');

    wrapper.setState({content: mockContent})
    expect(wrapper.exists('Content')).toEqual(true)
    const resetButton = wrapper.find('.endcontent-currentUrl-resetButton').first()

    resetButton.simulate('click')
    wrapper.update();

    expect(wrapper.exists('Content')).toEqual(false)
    expect(wrapper.find('input').instance().value).toEqual("")
  });

  describe("prevSearches", () => {
    it('Adds previous search to state', async () => {
      const wrapper = mount(<App />)
      const input = wrapper.find('input');
      input.instance().value = "http://wikipedia.com";
      input.simulate('change');

      const form = wrapper.find('form').first()
      form.simulate('submit');

      // wait until all promises are resolved
      await tick();

      input.instance().value = "http://google.com";
      input.simulate('change');
      form.simulate('submit');

      await tick();

      expect(wrapper.state().successfulSearches).toContain('http://wikipedia.com')
      expect(wrapper.state().successfulSearches).toContain('http://google.com')
      expect(wrapper.state().successfulSearches.length).toEqual(2)

    });
  })


  it('displays an error message if form submission is NOT successful', async () => {
    global.fetch = jest.fn(() => Promise.reject( "error" ))

    const wrapper = mount(<App />)

    const input = wrapper.find('input');
    input.instance().value = "http://wikipedia.com";
    input.simulate('change');

    const form = wrapper.find('form').first()
    form.simulate('submit');

    expect(wrapper.state().error).toBeFalsy()
    expect(wrapper.exists(".errorMessage")).toBeFalsy()

    // wait until all promises are resolved
    await tick();
    wrapper.update();

    expect(wrapper.state().error).toBeTruthy()
    expect(wrapper.exists(".errorMessage")).toBeTruthy()
  });

});


// Helper function returns a promise that resolves after all other promise mocks,
// even if they are chained like Promise.resolve().then(...)
function tick() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  })
}
