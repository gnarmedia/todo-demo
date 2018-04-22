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

    xit("should render the App with saved tasks", () => {
        const tasks = [
            { id: "ryBRdzBdM", title: "Saved Task 1", isComplete: false },
            { id: "HygBRpGBuG", title: "Saved Task 2", isComplete: true },
            { id: "r1ZSCdMruM", title: "Saved Task 3", isComplete: false }
        ];

        global.localStorage = {
            getItem: () => JSON.stringify(tasks)
        };

        const tree = shallow(<App />);

        expect(tree.find("TaskList").props().tasks).toEqual(tasks);

        // expect(tree.find('ul').children()).toMatchSnapshot();
    });
});
