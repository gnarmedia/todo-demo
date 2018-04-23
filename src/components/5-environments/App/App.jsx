// import dependencies
import React, { Fragment } from "react";

// import components
import TaskList from "../../3-organisms/TaskList/TaskList.jsx";

// mock up a list of tasks, be sure the ids are unique
const localTasks = localStorage.getItem("tasks"),
    tasks = localTasks
        ? JSON.parse(localStorage.getItem("tasks"))
        : [
              { id: "ryBRDzBdM", title: "Task 1", isComplete: false },
              { id: "HygBRPGBuG", title: "Task 2", isComplete: true },
              { id: "r1ZSCDMruM", title: "Task 3", isComplete: false }
          ];

/**
 * @name App
 * @desc Renders the markup for our app
 * @returns {function} App component
 */
const App = () => (
    <Fragment>
        <h1>Task List demo</h1>
        <TaskList tasks={tasks} filter="ALL" />
    </Fragment>
);

// export our component for importing into other modules
export default App;
