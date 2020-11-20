import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form className="formInput" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Enter New To-Do item"
        value={newTask.title || ""}
        onChange={handleChange}
        autoComplete="off"
      />

      <button className="btn" type="submit">
        Add To-Do
      </button>
      {!newTask.title ? null : (
        <div className="taskNotes">
          <textarea
            name="description"
            placeholder="Notes on task. . . "
            value={newTask.description || ""}
            onChange={handleChange}
          />
        </div>
      )}
    </form>
  );
}
