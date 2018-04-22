// import dependencies
import React from "react";
import PropTypes from "prop-types";

/**
 * @name FilterTask
 * @desc Filters for tasks
 * @param {string} filter
 * @returns {function}
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
