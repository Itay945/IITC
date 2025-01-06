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
  return (
    <div className="flex  flex-col items-center justify-center min-h-screen bg-blue-100 ">
      <TaskTable />
      <CreateTaskButton />
    </div>
  );
}

export default App;
