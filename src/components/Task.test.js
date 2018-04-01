import React from "react";
import { shallow } from "enzyme";

// import components
import Task from "./Task.jsx";

// load some fake tasks
const task = {
    id: 1,
    title: "Task 1",
    isComplete: false
};

describe("Task", function() {
    it("renders the Task with completed status", () => {
        const tree = shallow(<Task title="Complete Task" isComplete={true} />);
        expect(tree).toMatchSnapshot();
    });

    it("renders the Task with incomplete status", () => {
        const tree = shallow(
            <Task title="Incomplete Task" isComplete={false} />
        );
        expect(tree).toMatchSnapshot();
    });
});
