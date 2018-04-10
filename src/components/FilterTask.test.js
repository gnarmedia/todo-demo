import React from "react";
import { shallow } from "enzyme";

// import components
import FilterTask from "./FilterTask.jsx";

describe("FilterTask", () => {
    it("should render the FilterTask", () => {
        const handleFilterClickMock = jest.fn(),
            wrapper = shallow(
                <FilterTask onFilterClick={handleFilterClickMock} />
            );

        expect(wrapper).toMatchSnapshot();
    });

    // add event handler test
});
