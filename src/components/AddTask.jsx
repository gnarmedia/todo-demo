// import dependencies
import React, { Component } from "react";
import shortid from "shortid";

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const task = {
            id: shortid.generate(),
            title: this.state.value,
            isComplete: false
        };

        this.props.onSubmit(task);
        this.setState((prevState, props) => ({
            value: ""
        }));

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add Task: </label>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button type="submit">Add Task</button>
            </form>
        );
    }
}

// export our component for importing into other modules
export default AddTask;
