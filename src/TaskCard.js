import React from "react";
import "./assets/styles/style.css";

const TaskCard = ({ task }) => {
  return (
    <>
      <div className="task-card">
        <h5>{task.subject}</h5>
        <p>{task.description}</p>
        <div className="task-details">
          <div>
            <span className="text-muted font-10 mr-1">Due Date:</span>
            {task.due_date}
          </div>
          <div>
            <span className="text-muted font-10 mr-1">Assigned To:</span>
            {task.assigned_to}
          </div>
          <div>
            <span className="text-muted font-10 mr-1">Priority:</span>
            <span className="badge-red">{task.priority}</span>
          </div>
          <div>
            <span className="text-muted font-10 mr-1">Status:</span>
            <span className="badge-primary">{task.status}</span>
          </div>
          <div>
            <span className="text-muted font-10 mr-1">Assigned By:</span>
            {task.assigned_by}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
export default TaskCard;
