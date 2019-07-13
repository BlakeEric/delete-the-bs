/* eslint-env jest */
import { shallow, mount, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../../pages/index.js'

configure({ adapter: new Adapter() });

describe('App markup', () => {
  it('Shows default content on load', () => {
    const page = mount(<HomePage />)
    expect(page.exists('#searchWrapper')).toEqual(true);
  })
})
