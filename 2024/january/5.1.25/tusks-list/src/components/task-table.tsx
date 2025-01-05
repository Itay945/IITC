import axios from "axios";
import { useEffect, useState } from "react";

type task = {
  id: number; 
  title: string; 
  description: string; 
  dueDate: string; 
  priority: "Low" | "Medium" | "High"; 
  status: "Pending" | "In Progress" | "Completed";
};


export default function taskTable() {
  
  const [tasks, setTasks] = useState<task[]>([])
  useEffect(() => {

    async function fetchTasks() {
      const res = await axios.get("http://localhost:3000/tasks");
      setTasks(res.data);
    }
    fetchTasks()
  }, [])


  return (
    <div className="p-4">
      <table className=" table-auto border-collapse border border-black w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

 