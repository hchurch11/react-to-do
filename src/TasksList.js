import React from "react";

export default function TasksList({ allTasks, handleDelete }) {
  return (
    <ol>
      {allTasks.map(({ title, description, id }) => (
        <li key={id}>
          <div>
            <button className="btn delete" onClick={() => handleDelete(id)}>
              Complete
            </button>
          </div>
          <div>
            <h2 className="title">{title}</h2>
            {!description ? null : (
              <small className="text-muted">notes: {description}</small>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
