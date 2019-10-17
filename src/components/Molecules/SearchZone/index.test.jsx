import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// test file
import { shallow, mount, render } from 'enzyme';
import SearchBox from '../../Atom/SearchBox';

configure({ adapter: new Adapter() });

describe("<PricingSpecial />", () => {
  it("should render out without error", async () => {
    const wrapper = shallow(<SearchBox />);
    const p = wrapper.find('p');
    // expect(p.text()).toEqual('This is Footer')
  });
});
