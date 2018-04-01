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
        const onAddTaskSubmitMock = jest.fn(),
            task = { id: "ryBRDzBdM", title: "Task 1", isComplete: false },
            wrapper = shallow(
                <AddTask onAddTaskSubmit={onAddTaskSubmitMock} />
            );

        // check assert default state
        expect(wrapper.state()).toMatchObject({ value: "" });
        expect(wrapper.find("button").exists()).toEqual(true);

        // assert existence of elements
        expect(wrapper.find("button").exists()).toEqual(true);
        expect(wrapper.find("input").exists()).toEqual(true);

        // set input value
        wrapper.find("input").simulate("change", { target: { value: "test" } });
        expect(wrapper.state()).toMatchObject({ value: "test" });

        // simulate submission and assert the call
        wrapper.instance().handleSubmit({ preventDefault: function() {} });
        expect(onAddTaskSubmitMock).toHaveBeenCalled();
    });
});
