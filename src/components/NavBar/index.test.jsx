import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// test file
import { shallow, mount, render } from "enzyme";
import NavLeft from ".";

configure({ adapter: new Adapter() });

describe("<Page404 />", () => {
  it("should render out without error", async () => {
    const wrapper = shallow(<NavLeft />);
    const p = wrapper.find("p");
    // expect(p.first().text()).toEqual('This is NavLeft')
  });
});
