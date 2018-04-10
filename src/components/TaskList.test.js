import React from "react";
import { shallow } from "enzyme";

// import components
import TaskList from "./TaskList.jsx";

describe("TaskList", () => {
    it("should render the TaskList", () => {
        const tasks = [
                { id: "1", title: "Task 1", isComplete: false },
                { id: "2", title: "Task 2", isComplete: true },
                { id: "3", title: "Task 3", isComplete: false }
            ],
            wrapper = shallow(<TaskList tasks={tasks} filter="ALL" />);

        expect(wrapper).toMatchSnapshot();
    });

    it("should not toggle the task's 'isComplete' prop", () => {
        const tasks = [{ id: "1", title: "Task 1", isComplete: false }],
            wrapper = shallow(<TaskList tasks={tasks} filter="ALL" />);

        expect(wrapper.state().tasks).toEqual(tasks);
        wrapper.instance().handleToggleStatusClick("2");
        expect(wrapper.state().tasks[0].isComplete).toEqual(false);
    });

    it("should toggle the task's 'isComplete' prop to 'true'", () => {
        const tasks = [{ id: "1", title: "Task 1", isComplete: false }],
            wrapper = shallow(<TaskList tasks={tasks} filter="ALL" />);

        expect(wrapper.state().tasks).toEqual(tasks);
        wrapper.instance().handleToggleStatusClick("1");
        expect(wrapper.state().tasks[0].isComplete).toEqual(true);
    });

    it("should toggle the task's 'isComplete' prop to 'false'", () => {
        const tasks = [{ id: "1", title: "Task 1", isComplete: true }],
            wrapper = shallow(<TaskList tasks={tasks} filter="ALL" />);

        expect(wrapper.state().tasks).toEqual(tasks);
        wrapper.instance().handleToggleStatusClick("1");
        expect(wrapper.state().tasks[0].isComplete).toEqual(false);
    });

    it("should add a task", () => {
        const tasks = [
                { id: "1", title: "Task 1", isComplete: false },
                { id: "2", title: "Task 2", isComplete: false }
            ],
            tasksAfter = [
                { id: "3", title: "Task 3", isComplete: false },
                { id: "1", title: "Task 1", isComplete: false },
                { id: "2", title: "Task 2", isComplete: false }
            ],
            taskToAdd = { id: "3", title: "Task 3", isComplete: false },
            wrapper = shallow(<TaskList tasks={tasks} filter="ALL" />);

        expect(wrapper.state().tasks).toEqual(tasks);
        wrapper.instance().handleAddSubmit(taskToAdd);
        expect(wrapper.state().tasks).toEqual(tasksAfter);
    });

    it("should remove a task", () => {
        const tasks = [
                { id: "1", title: "Task 1", isComplete: false },
                { id: "2", title: "Task 2", isComplete: false },
                { id: "3", title: "Task 3", isComplete: false }
            ],
            wrapper = shallow(<TaskList tasks={tasks} filter="ALL" />);

        expect(wrapper.instance().handleRemoveClick("3"));
        expect(wrapper.state().tasks).toEqual([
            { id: "1", title: "Task 1", isComplete: false },
            { id: "2", title: "Task 2", isComplete: false }
        ]);
    });

    // add filter test
});
