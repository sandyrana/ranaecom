import React from "react";
import { shallow } from 'enzyme';
import App from './App';

function Component(props) {
  return shallow(<App {...props} />)
}

describe('app component', () => {
  it('snapshot testing', () => {
    const wrapper = Component();
    expect(wrapper).toMatchSnapshot();
  })
})