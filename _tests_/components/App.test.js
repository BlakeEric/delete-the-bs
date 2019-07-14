/* eslint-env jest */
import { shallow, mount, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import App from '../../components/App'

configure({ adapter: new Adapter() });

describe('App markup', () => {
  it('Shows default content on load', () => {
    const app = mount(<App />)
    // Test the application state
    console.log(app.state())
  })
})
