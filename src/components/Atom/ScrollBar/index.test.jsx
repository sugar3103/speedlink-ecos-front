import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// test file
import { shallow } from 'enzyme';
import ScrollBar from '.';

configure({ adapter: new Adapter() });

describe("<LiTag />", () => {
  it("should render out without error", async () => {
    const wrapper = shallow(<ScrollBar />);
    const p = wrapper.find('p');
    // expect(p.text()).toEqual('This is Header')
  });
});
