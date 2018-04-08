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

function _renderTask({
    title = "Task",
    isComplete = false,
    onToggleStatusClick = () => {}
}) {
    return (
        <Task
            title={title}
            isComplete={isComplete}
            onToggleStatusClick={onToggleStatusClick}
        />
    );
}

describe("Task", function() {
    it("should render the Task with completed status", () => {
        const tree = shallow(
            _renderTask({ title: "Completed Task", isComplete: true })
        );

        expect(tree).toMatchSnapshot();
    });

    it("should render the Task with incomplete status", () => {
        const tree = shallow(_renderTask({ title: "Incomplete Task" }));

        expect(tree).toMatchSnapshot();
    });

    it("should call onToggleStatusClick when checkbox is clicked", () => {
        const onToggleStatusClickMock = jest.fn(),
            wrapper = shallow(
                _renderTask({ onToggleStatusClick: onToggleStatusClickMock })
            );

        expect(wrapper.find("input").exists()).toEqual(true);
        wrapper.find("input").simulate("click");
        expect(onToggleStatusClickMock).toHaveBeenCalled();
    });
});
