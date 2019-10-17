import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// test file
import { shallow } from 'enzyme';
import LoginPage from '.';

configure({ adapter: new Adapter() });

describe("<LiTag />", () => {
  it("should render out without error", async () => {
    const wrapper = shallow(<LoginPage />);
    const p = wrapper.find('p');
    // expect(p.text()).toEqual('This is Header')
  });
});
