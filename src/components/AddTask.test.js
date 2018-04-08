import React from "react";
import { shallow } from "enzyme";

// import component
import AddTask from "./AddTask.jsx";

describe("AddTask", () => {
    it("should render the AddTask", () => {
        const wrapper = shallow(<AddTask />);

        expect(wrapper).toMatchSnapshot();
    });

    it("should call onAddTaskSubmit when form is submitted", () => {
        const onAddSubmitMock = jest.fn(),
            wrapper = shallow(<AddTask onSubmit={onAddSubmitMock} />),
            button = wrapper.find("button"),
            input = wrapper.find("input");

        // check assert default state
        expect(wrapper.state()).toMatchObject({ value: "" });
        expect(button.exists()).toEqual(true);

        // assert existence of elements
        expect(button.exists()).toEqual(true);
        expect(input.exists()).toEqual(true);

        // set input value
        input.simulate("change", { target: { value: "test" } });
        expect(wrapper.state()).toMatchObject({ value: "test" });

        // simulate submission and assert the call
        wrapper.instance().handleSubmit({ preventDefault: function() {} });
        expect(onAddSubmitMock).toHaveBeenCalled();
    });
});
