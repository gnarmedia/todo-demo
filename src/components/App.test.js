import React from "react";
import { shallow } from "enzyme";

// import component
import App from "./App.jsx";

describe("App", () => {
    it("should render the App", () => {
        const tasks = [
                { id: "ryBRDzBdM", title: "Task 1", isComplete: false },
                { id: "HygBRPGBuG", title: "Task 2", isComplete: true },
                { id: "r1ZSCDMruM", title: "Task 3", isComplete: false }
            ],
            tree = shallow(<App />);

        expect(tree.find("TaskList").props().tasks).toEqual(tasks);

        expect(tree).toMatchSnapshot();
    });
});
