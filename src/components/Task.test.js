import React from "react";
import { shallow } from "enzyme";

// import components
import Task from "./Task.jsx";

// load some fake tasks
const task = {
        id: 1,
        title: "Task 1",
        isComplete: false
    },
    onToggleStatusClickMock = jest.fn();

describe("Task", function() {
    it("renders the Task with completed status", () => {
        const tree = shallow(
            <Task
                title="Complete Task"
                isComplete={true}
                onToggleStatusClick={onToggleStatusClickMock}
            />
        );
        expect(tree).toMatchSnapshot();
    });

    it("renders the Task with incomplete status", () => {
        const tree = shallow(
            <Task
                title="Incomplete Task"
                isComplete={false}
                onToggleStatusClick={onToggleStatusClickMock}
            />
        );
        expect(tree).toMatchSnapshot();
    });

    it("should call onToggleStatusClick when checkbox is clicked", () => {
        const onToggleStatusClickMock = jest.fn(),
            wrapper = shallow(
                <Task
                    title="Task 1"
                    isComplete={false}
                    onToggleStatusClick={onToggleStatusClickMock}
                />
            );
        expect(wrapper.find("input").exists()).toEqual(true);
        wrapper.find("input").simulate("click");
        expect(onToggleStatusClickMock).toHaveBeenCalled();
    });
});
