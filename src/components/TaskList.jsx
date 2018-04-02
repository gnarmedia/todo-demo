// import dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

// import components
import Task from "./Task.jsx";

/**
 * @name: TaskList
 * @desc: A list of tasks with statuses
 * @param: {array} tasks
 * @returns: {function}
 */
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: props.tasks };

        this._renderTask = this._renderTask.bind(this);
        this.handleToggleStatusClick = this.handleToggleStatusClick.bind(this);
    }

    _renderTask({ id, title, isComplete, onToggleStatusClick }) {
        return (
            <li key={id.toString()}>
                <Task
                    title={title}
                    isComplete={isComplete}
                    onToggleStatusClick={() => this.handleToggleStatusClick(id)}
                />
            </li>
        );
    }

    handleToggleStatusClick(id) {
        this.setState((prevState, props) =>
            prevState.tasks.map(t => {
                if (t.id === id) {
                    t.isComplete = !t.isComplete;
                }

                return t;
            })
        );
    }

    render() {
        return <ul>{this.props.tasks.map(this._renderTask)}</ul>;
    }
}

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
