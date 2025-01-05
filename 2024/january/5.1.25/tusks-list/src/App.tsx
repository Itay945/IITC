import CreateTaskButton from './components/create-task-button';
import TaskTable from './components/task-table';



function App() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-100 '>
      <TaskTable />
      <CreateTaskButton />
    </div>
    
  )
}

export default App