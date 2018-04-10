// import dependencies
import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

// import components
import Task from "./Task.jsx";
import AddTask from "./AddTask.jsx";
import FilterTask from "./FilterTask.jsx";

/**
 * @name: TaskList
 * @desc: A list of tasks with statuses
 * @param: {array} tasks
 * @returns: {function}
 */
class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: props.filter,
            tasks: props.tasks
        };

        this._renderTask = this._renderTask.bind(this);
        this.handleToggleStatusClick = this.handleToggleStatusClick.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
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

    _shouldFilterTask(filter, task) {
        if (
            (filter === "COMPLETE" && !task.isComplete) ||
            (filter === "INCOMPLETE" && task.isComplete)
        ) {
            return false;
        }

        return true;
    }

    handleToggleStatusClick(id) {
        this.setState((prevState, props) => {
            const tasksMapped = prevState.tasks.map(task => {
                if (task.id === id) {
                    task.isComplete = !task.isComplete;
                }

                return task;
            });

            localStorage.setItem("tasks", JSON.stringify(tasksMapped));
            return tasksMapped;
        });
    }

    handleAddSubmit(task) {
        this.setState((prevState, props) => {
            const tasks = Object.assign({}, prevState).tasks;

            tasks.splice(0, 0, task);

            localStorage.setItem("tasks", JSON.stringify(tasks));
            return { tasks };
        });
    }

    handleRemoveClick(id) {
        this.setState((prevState, props) => {
            const tasks = Object.assign({}, prevState).tasks.filter(
                x => x.id !== id
            );

            localStorage.setItem("tasks", JSON.stringify(tasks));
            return { tasks };
        });
    }

    handleFilterClick(filter) {
        localStorage.setItem("filter", JSON.stringify(filter));
        this.setState((prevState, props) => ({ filter }));
    }

    render() {
        const filter = this.state.filter;

        return (
            <Fragment>
                <AddTask onSubmit={this.handleAddSubmit} />
                <ul>
                    {this.state.tasks
                        .filter(task => this._shouldFilterTask(filter, task))
                        .map(this._renderTask)}
                </ul>
                <FilterTask onFilterClick={this.handleFilterClick} />
            </Fragment>
        );
    }
}

// These are proptypes, they are used to define the expected minimum prop values
// for a component
TaskList.propTypes = {
    filter: PropTypes.string.isRequired,
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
