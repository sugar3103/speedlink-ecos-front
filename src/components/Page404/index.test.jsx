import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// test file
import { shallow, mount, render } from 'enzyme';
import Page404 from '.';

configure({ adapter: new Adapter() });

describe("<Page404 />", () => {
  it("should render out without error", async () => {
    const wrapper = shallow(<Page404 />);
    const p = wrapper.find('h1');
    expect(p.text()).toEqual('ERROR 404')
  });
});
