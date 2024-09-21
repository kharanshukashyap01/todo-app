import { useState } from "react";
import axios from "axios";

const TaskForm = ({ existingTask, onSuccess }) => {
  const [title, setTitle] = useState(existingTask ? existingTask.title : "");
  const [description, setDescription] = useState(
    existingTask ? existingTask.description : ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description };
    try {
      if (existingTask) {
        // Edit existing task
        await axios.put(
          `http://localhost:5000/api/tasks/${existingTask.id}`,
          taskData
        );
      } else {
        // Create new task
        await axios.post("http://localhost:5000/api/tasks", taskData);
      }
      onSuccess(); // Callback to refresh the task list
    } catch (error) {
      console.error("Error creating/updating task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">
        {existingTask ? "Update Task" : "Create Task"}
      </button>
    </form>
  );
};

export default TaskForm;
