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

        expect(wrapper.state().tasks).toBeUndefined();
        expect(wrapper.find("button").exists()).toEqual(true);
        wrapper.instance()._inputElement = task;
        expect(
            wrapper.instance().handleSubmit({ preventDefault: function() {} })
        );
        expect(onAddTaskSubmitMock).toHaveBeenCalled();
    });
});
