// import dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";

/**
 * @name: Task
 * @desc: A task with status
 * @param {object} task
 * @returns: {function}
 */
const Task = ({ title, isComplete }) => {
    return (
        // Fragments are used to wrap multiple rendered elements within a component
        <Fragment>
            {/* sets the check based on status */}
            <input type="checkbox" defaultChecked={isComplete} />
            {title}&nbsp;[{isComplete ? "complete" : "incomplete"}]
        </Fragment>
    );
};

Task.propTypes = {
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired
};

// export our component for importing into other modules
export default Task;
