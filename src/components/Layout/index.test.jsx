import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// test file
import { shallow, mount, render } from 'enzyme';
import Layout from '.';

configure({ adapter: new Adapter() });

describe("<Layout />", () => {
  it("should render out without error", async () => {
    const wrapper = shallow(<Layout/>);
    const p = wrapper.find('p');
    // expect(p.text()).toEqual('This is Header')
  });
});
