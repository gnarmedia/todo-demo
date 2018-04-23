// import dependencies
import React, { Fragment } from "react";
import PropTypes from "prop-types";

/**
 * @name Task
 * @desc Renders a task with status
 * @param {object} task
 * @returns {function} Task component
 */
const Task = ({ title, isComplete, onToggleStatusClick, onRemoveClick }) => {
    return (
        // Fragments are used to wrap multiple rendered elements within a component
        <Fragment>
            {/* sets the check based on status */}
            <input
                type="checkbox"
                defaultChecked={isComplete}
                onClick={onToggleStatusClick}
            />
            {title}&nbsp;[{isComplete ? "complete" : "incomplete"}]&nbsp;
            <button onClick={onRemoveClick}>remove</button>
        </Fragment>
    );
};

Task.propTypes = {
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    onToggleStatusClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired
};

// export our component for importing into other modules
export default Task;
