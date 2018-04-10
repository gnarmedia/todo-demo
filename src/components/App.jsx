// import dependencies
import React, { Fragment } from "react";

// import components
import TaskList from "./TaskList.jsx";

// mock up a list of tasks, be sure the ids are unique
const localTasks = localStorage.getItem("tasks"),
    tasks = (localTasks ? 
        JSON.parse(localStorage.getItem("tasks")) :
        [
            { id: "ryBRDzBdM", title: "Task 1", isComplete: false },
            { id: "HygBRPGBuG", title: "Task 2", isComplete: true },
            { id: "r1ZSCDMruM", title: "Task 3", isComplete: false }
        ]
    );

/**
 * @name: App
 * @desc: This is a function that renders the markup for our app, for brevity it
 *        is all done in a single component.
 * @returns: {function}
 */
const App = () => (
    <Fragment>
        <h1>Task List demo</h1>
        <TaskList tasks={tasks} filter="ALL" />
    </Fragment>
);

// export our component for importing into other modules
export default App;
