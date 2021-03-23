import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


const App = () => {

  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 7',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 2',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 3',
            reminder: false,
        }
    ]
);

//Add Task
const addTask = (task) => {
  // console.log(task);
  const id = Math.floor(Math.random() * 10000 + 1);
  // console.log(task);
  const newTask = {id, ...task};
  //use existing tasks, and add the new task to the array
  setTasks([...tasks, newTask]);
}

//Delete Task
const deleteTask = (id) => {
  // console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  // console.log(id);
  setTasks(tasks.map((task) => task.id === id
  ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}/>
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

export default App;
