import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from '.';
// test file
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });

describe("<MasterData />", () => {
  it("should render out without error", async () => {
    const wrapper = shallow(<Loading />);
    const p = wrapper.find('p');
    expect(p.text()).toEqual('This is Loading')
  });
});
