import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// test file
import { shallow, mount, render } from 'enzyme';
import PricingSpecial from '.';

configure({ adapter: new Adapter() });

describe("<PricingSpecial />", () => {
  it("should render out without error", async () => {
    const wrapper = shallow(<PricingSpecial />);
    const p = wrapper.find('p');
    // expect(p.text()).toEqual('This is Footer')
  });
});
