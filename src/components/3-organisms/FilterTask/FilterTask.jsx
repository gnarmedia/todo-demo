// import dependencies
import React from "react";
import PropTypes from "prop-types";

/**
 * @name FilterTask
 * @desc Renders a filter task component
 * @param {string} filter
 * @returns {function} FilterTask component
 */
const FilterTask = ({ onFilterClick }) => {
    const filters = ["All", "Incomplete", "Complete"];

    return (
        <ul>
            {filters.map(filter => {
                return (
                    <button
                        key={`filterTask_${filter}`}
                        onClick={() => onFilterClick(filter.toUpperCase())}
                    >
                        {filter}
                    </button>
                );
            })}
        </ul>
    );
};

FilterTask.propTypes = {
    onFilterClick: PropTypes.func.isRequired
};

// export our component for importing into other modules
export default FilterTask;
