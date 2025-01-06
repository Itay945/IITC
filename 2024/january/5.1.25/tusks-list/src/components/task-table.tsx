import axios from "axios";
import { useEffect, useState } from "react";
import { Task } from "../App";

export default function TaskTable() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    async function fetchTasks() {
      const res = await axios.get("http://localhost:3000/tasks");
      setTasks(res.data);
    }
    fetchTasks();
  }, []);

  return (
    <div className="p-4">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-black px-4 py-2">ID</th>
            <th className="border border-black px-4 py-2">Title</th>
            <th className="border border-black px-4 py-2">Description</th>
            <th className="border border-black px-4 py-2">Due Date</th>
            <th className="border border-black px-4 py-2">Priority</th>
            <th className="border border-black px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50">
              <td className="border border-black px-4 py-2 text-center">{task.id}</td>
              <td className="border border-black px-4 py-2">{task.title}</td>
              <td className="border border-black px-4 py-2">{task.description}</td>
              <td className="border border-black px-4 py-2">{task.dueDate}</td>
              <td className="border border-black px-4 py-2 text-center">{task.priority}</td>
              <td className="border border-black px-4 py-2 text-center">{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
