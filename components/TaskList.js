import axios from "axios";

export default function TaskList({ tasks }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    window.location.reload(); // Simple reload to update the list
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          {/* Additional buttons for Edit and Mark as Complete */}
        </div>
      ))}
    </div>
  );
}
