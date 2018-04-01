import React from "react";
import { shallow } from "enzyme";

// import components
import TaskList from "./TaskList.jsx";

describe("TaskList", () => {
    it("renders the TaskList", () => {
        const tasks = [
                { id: "1", title: "Task 1", isComplete: false },
                { id: "2", title: "Task 2", isComplete: true },
                { id: "3", title: "Task 3", isComplete: false }
            ],
            tree = shallow(<TaskList tasks={tasks} />);
        expect(tree).toMatchSnapshot();
    });

    it("should toggle the first task's 'isComplete' prop to 'true'", () => {
        const tasks = [{ id: "1", title: "Task 1", isComplete: false }],
            wrapper = shallow(<TaskList tasks={tasks} />);
        expect(wrapper.state().tasks).toEqual(tasks);
        expect(wrapper.instance().handleToggleStatusClick("1"));
        expect(wrapper.state().tasks[0].isComplete).toEqual(true);
    });

    it("should toggle the first task's 'isComplete' prop to 'false'", () => {
        const tasks = [{ id: "1", title: "Task 1", isComplete: true }],
            wrapper = shallow(<TaskList tasks={tasks} />);
        expect(wrapper.state().tasks).toEqual(tasks);
        expect(wrapper.instance().handleToggleStatusClick("1"));
        expect(wrapper.state().tasks[0].isComplete).toEqual(false);
    });

    it("should toggle the second task's 'isComplete' prop to 'true'", () => {
        const tasks = [
                { id: "1", title: "Task 1", isComplete: false },
                { id: "2", title: "Task 2", isComplete: false }
            ],
            wrapper = shallow(<TaskList tasks={tasks} />);
        expect(wrapper.state().tasks).toEqual(tasks);
        expect(wrapper.instance().handleToggleStatusClick("2"));
        expect(wrapper.state().tasks[1].isComplete).toEqual(true);
    });

    it("should add a task", () => {
        const tasks = [
                { id: "1", title: "Task 1", isComplete: false },
                { id: "2", title: "Task 2", isComplete: false }
            ],
            wrapper = shallow(<TaskList tasks={tasks} />);
        expect(wrapper.state().tasks).toEqual(tasks);
        expect(
            wrapper.instance().handleAddTaskSubmit({
                id: "3",
                title: "Task 3",
                isComplete: false
            })
        );
        expect(wrapper.state()).toEqual({
            tasks: [
                { id: "3", title: "Task 3", isComplete: false },
                { id: "1", title: "Task 1", isComplete: false },
                { id: "2", title: "Task 2", isComplete: false }
            ]
        });
    });
});
