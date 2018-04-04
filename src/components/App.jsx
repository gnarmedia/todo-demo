// import dependencies
import React, { Fragment } from "react";

// mock up a list of tasks, be sure the ids are unique
const tasks = [
    { id: "ryBRDzBdM", title: "Task 1", isComplete: false },
    { id: "HygBRPGBuG", title: "Task 2", isComplete: true },
    { id: "r1ZSCDMruM", title: "Task 3", isComplete: false }
];

/**
 * @name: _renderTask
 * @desc: This function renders the task component
 * @param {object} task
 */
const _renderTask = ({ id, title, isComplete }) => (
    <li key={id.toString()}>
        <input type="checkbox" defaultChecked={isComplete} />
        {title}&nbsp;[{isComplete ? "complete" : "incomplete"}]
    </li>
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
        <ul>{tasks.map(_renderTask)}</ul>
    </Fragment>
);

// export our component for importing into other modules
export default App;
