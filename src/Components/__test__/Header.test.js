import React from "react";
import { shallow } from 'enzyme';
import Header from '../Header';

function Component(props) {
  return shallow(<Header {...props} />)
}

describe('app component', () => {
  it('snapshot testing', () => {
    const wrapper = Component();
    expect(wrapper).toMatchSnapshot();
  })
})