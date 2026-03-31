import React from "react";
const FilterTask = () => {
  return (
    <>
      <div className="filter-form">
        <label>
          <span className="text-muted font-10">Status</span>
          <br />
          <select name="status">
            <option value="">Select Status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <label>
          <span className="text-muted font-10">Priority</span>
          <br />
          <select name="priority">
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <div>
          <button>Apply Filters</button>
        </div>
      </div>
    </>
  );
};
export default FilterTask;
