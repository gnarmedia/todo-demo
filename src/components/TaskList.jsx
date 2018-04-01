// import dependencies
import React from "react";
import PropTypes from "prop-types";

// import components
import Task from "./Task.jsx";

/**
 * @name: _renderTask
 * @desc: This function renders the task component
 * @param {object} task
 */
const _renderTask = ({ id, title, isComplete }) => (
    <li key={id.toString()}>
        <Task title={title} isComplete={isComplete} />
    </li>
);

/**
 * @name: TaskList
 * @desc: A list of tasks with statuses
 * @param: {array} tasks
 * @returns: {function}
 */
const TaskList = ({ tasks }) => {
    return <ul>{tasks.map(_renderTask)}</ul>;
};

// These are proptypes, they are used to define the expected minimum prop values
// for a component
TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            isComplete: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

// export our component for importing into other modules
export default TaskList;
