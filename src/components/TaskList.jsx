// import dependencies
import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

// import components
import Task from "./Task.jsx";
import AddTask from "./AddTask.jsx";

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
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    _renderTask({ id, title, isComplete }) {
        return (
            <li key={id.toString()}>
                <Task
                    title={title}
                    isComplete={isComplete}
                    onToggleStatusClick={() => this.handleToggleStatusClick(id)}
                    onRemoveClick={() => this.handleRemoveClick(id)}
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

    handleAddSubmit(task) {
        this.setState((prevState, props) => {
            const tasks = Object.assign({}, prevState).tasks;

            tasks.splice(0, 0, task);
            return { tasks };
        });
    }

    handleRemoveClick(id) {
        this.setState((prevState, props) => {
            let tasks = Object.assign({}, prevState).tasks;

            tasks = tasks.filter(x => x.id !== id);
            return { tasks };
        });
    }

    render() {
        return (
            <Fragment>
                <AddTask onSubmit={this.handleAddSubmit} />
                <ul>{this.state.tasks.map(this._renderTask)}</ul>
            </Fragment>
        );
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
