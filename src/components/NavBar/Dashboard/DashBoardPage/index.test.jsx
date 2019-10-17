import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// test file
import { shallow, mount, render } from 'enzyme';
import DashBoardPage from '.';

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  it("should render out without error", async () => {
    const wrapper = shallow(<DashBoardPage />);
    const p = wrapper.find('p');
    // expect(p.first().text()).toEqual('This is Home')
  });
});
