import axios from "axios";
import { Task } from "../App";
import { useState } from "react";

export default function CreateTaskButton({ tasks, setTasks }: { tasks: Task[]; setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) {
  const [newTask, setNewTask] = useState<Omit<Task, "id">>({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    status: "Pending",
  });

  function AddNewTask() {
    // Create a new task object with a unique ID
    const taskWithId = {
      ...newTask, // takes all the previous parts of the object and adding the dynamic ID later
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    };

    axios
      .post("http://localhost:3000/tasks", taskWithId)
      .then((res) => {
        setTasks((prev) => [...prev, res.data]);

        setNewTask({
          title: "",
          description: "",
          dueDate: "",
          priority: "Low",
          status: "Pending",
        });
      })
      .catch((error) => {
        console.error("Failed to add task:", error);
      });
  }

  return (
    <div className="flex flex-col items-center">
      {/* Inputs for New Task */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask((prev) => ({ ...prev, title: e.target.value }))}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask((prev) => ({ ...prev, description: e.target.value }))}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask((prev) => ({ ...prev, dueDate: e.target.value }))}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <select
          value={newTask.priority}
          onChange={(e) => setNewTask((prev) => ({ ...prev, priority: e.target.value as Task["priority"] }))}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          value={newTask.status}
          onChange={(e) => setNewTask((prev) => ({ ...prev, status: e.target.value as Task["status"] }))}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* New Task Button */}
      <div className="flex justify-center items-center h-7 w-20 bg-gray-100 rounded tracking-tighter mt-2 border border-black mb-5 hover:bg-[#bfdbfe]">
        <button onClick={AddNewTask}>New Task</button>
      </div>
    </div>
  );
}
