// import dependencies
import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

// import components
import Task from "../Task/Task.jsx";
import AddTask from "../AddTask/AddTask.jsx";
import FilterTask from "../FilterTask/FilterTask.jsx";

/**
 * @name TaskList
 * @desc A TaskList class with a list of tasks with statuses
 */
class TaskList extends Component {
    /**
     * @name constructor
     * @param {object} props (tasks and filter)
     */
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

    /**
     * @name _renderTask
     * @desc task render helper
     * @param {object} task
     * @returns {function} Task component with li
     */
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

    /**
     * @name _filterTask
     * @desc Determines if task should be filtered or not
     * @param {string} filter
     * @param {object} task
     * @returns {boolean} Flag for whether or not task should be filtered
     */
    _shouldFilterTask(filter, task) {
        if (
            (filter === "COMPLETE" && !task.isComplete) ||
            (filter === "INCOMPLETE" && task.isComplete)
        ) {
            return false;
        }

        return true;
    }

    /**
     * @name handleToggleStatusClick
     * @desc Handles the click event for the task status toggle
     * @param {striing} id
     */
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

    /**
     * @name handleAddSubmit
     * @desc Handles submission of task to add
     * @param {object} task
     */
    handleAddSubmit(task) {
        this.setState((prevState, props) => {
            const tasks = Object.assign({}, prevState).tasks;

            tasks.splice(0, 0, task);

            localStorage.setItem("tasks", JSON.stringify(tasks));
            return { tasks };
        });
    }

    /**
     * @name handleRemoveClick
     * @desc Handles the click event for the remove task button
     * @param {*} id 
     */
    handleRemoveClick(id) {
        this.setState((prevState, props) => {
            const tasks = Object.assign({}, prevState).tasks.filter(
                x => x.id !== id
            );

            localStorage.setItem("tasks", JSON.stringify(tasks));
            return { tasks };
        });
    }

    /**
     * @name handleFilterClick
     * @desc Handles the click event for the task filter buttons
     * @param {string} filter 
     */
    handleFilterClick(filter) {
        localStorage.setItem("filter", JSON.stringify(filter));
        this.setState((prevState, props) => ({ filter }));
    }

    /**
     * @name render
     * @desc Renders TaskList component
     * @returns {function} TaskList component
     */
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
