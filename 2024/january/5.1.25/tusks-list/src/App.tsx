import { useState, useEffect } from "react";
import axios from "axios";
import CreateTaskButton from "./components/create-task-button";
import TaskTable from "./components/task-table";

export type Task = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Progress" | "Completed";
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks when the component mounts
  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await axios.get("http://localhost:3000/tasks");
        setTasks(res.data); // Update tasks state
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    }

    fetchTasks();
  }, []); // The empty array means this runs once when the component mounts

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      {/* Pass tasks and setTasks as props to CreateTaskButton */}
      <CreateTaskButton tasks={tasks} setTasks={setTasks} />
      <TaskTable tasks={tasks} /> {/* Display the tasks in a table */}
    </div>
  );
}

export default App;
