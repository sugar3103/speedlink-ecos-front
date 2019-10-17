import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// test file
import { shallow, mount, render } from 'enzyme';
import RangeWeight from '.';

configure({ adapter: new Adapter() });

describe("<RangeWeight />", () => {
  it("should render out without error", async () => {
    const wrapper = shallow(<RangeWeight />);
    const p = wrapper.find('p');
    // expect(p.text()).toEqual('This is Footer')
  });
});
