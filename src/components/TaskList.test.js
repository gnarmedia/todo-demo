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
            wrapper = shallow(<TaskList tasks={tasks} />);

        expect(wrapper).toMatchSnapshot();
    });
});
