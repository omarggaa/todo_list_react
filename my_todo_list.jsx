import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'study', checked: false },
    { id: 2, text: 'sleep', checked: true },
    { id: 3, text: 'wake up', checked: false },

  ]);
  const [newTask, setNewTask] = useState('');


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTaskObj = {
        id: tasks.length + 1,
        text: newTask,
        checked: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>My To Do List</h1>
      <input
        type="text"
        placeholder="Title..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => deleteTask(task.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
