import React from "react";
const SaveTaskForm = ({ onFormSubmit }) => {
  const saveTaskHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const taskData = Object.fromEntries(formData.entries());
    onFormSubmit(taskData);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={saveTaskHandler}>
        <label>
          Subject:
          <input type="text" name="subject" />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="description" />
        </label>
        <br />
        <label>
          Due Date:
          <input type="date" name="due_date" />
        </label>
        <br />
        <label>
          Assigned To:
          <select name="assigned_to">
            <option value="">Select Team Member</option>
            <option value="Priya Sharma">Priya Sharma</option>
            <option value="Anika Patel">Anika Patel</option>
            <option value="Dev Narayan">Dev Narayan</option>
            <option value="Lakshmi Iyer">Lakshmi Iyer</option>
            <option value="Sonal Mehta">Sonal Mehta</option>
            <option value="Rajesh Kumar">Rajesh Kumar</option>
            <option value="Keerthi Rajan">Keerthi Rajan</option>
          </select>
        </label>
        <br />
        <label>
          Assigned By:
          <select name="assigned_by">
            <option value="">Select Team Member</option>
            <option value="Priya Sharma">Priya Sharma</option>
            <option value="Anika Patel">Anika Patel</option>
            <option value="Dev Narayan">Dev Narayan</option>
            <option value="Lakshmi Iyer">Lakshmi Iyer</option>
            <option value="Sonal Mehta">Sonal Mehta</option>
            <option value="Rajesh Kumar">Rajesh Kumar</option>
            <option value="Keerthi Rajan">Keerthi Rajan</option>
          </select>
        </label>
        <br />
        <label>
          Status:
          <select name="status">
            <option value="">Select Status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <br />
        <label>
          Priority:
          <select name="priority">
            <option value="">Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <br />
        <button type="submit" className="save-button">
          Save Task
        </button>
      </form>
    </>
  );
};
export default SaveTaskForm;
