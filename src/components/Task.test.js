import React from "react";
import renderer from "react-test-renderer";

// import components
import Task from "./Task.jsx";

// load some fake tasks
const task = {
    id: 1,
    title: "Task 1",
    isComplete: false
};

describe("Task", function() {
    it("should render the Task with completed status", () => {
        const tree = renderer
            .create(<Task title="Complete Task" isComplete={true} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("should render the Task with incomplete status", () => {
        const tree = renderer
            .create(<Task title="Incomplete Task" isComplete={false} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
