import React from "react";
import { shallow } from "enzyme";

// import components
import FilterTask from "./FilterTask.jsx";

describe("FilterTask", () => {
    it("should render the FilterTask", () => {
        const wrapper = shallow(<FilterTask onFilterClick={jest.fn()} />);

        expect(wrapper).toMatchSnapshot();
    });
});
