import axios from "axios";
import { useState, useEffect } from "react";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await axios.get("http://localhost:3001/tasks");
      setTasks(response.data);
    }
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}
