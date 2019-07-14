/* eslint-env jest */
import { shallow, mount, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../../pages/index'
import App from '../../components/App'

configure({ adapter: new Adapter() });

describe('App markup', () => {
  it('Shows search form on page load', () => {
    const page = mount(<HomePage />)
    expect(page.exists('#searchWrapper')).toEqual(true);
  })
})
