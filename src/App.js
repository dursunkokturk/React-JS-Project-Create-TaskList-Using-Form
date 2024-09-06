import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const createTask = (title, taskDescription) => {
        const createdTasks = [
          ...tasks,
          {
              id: Math.round(Math.random() * 999999),
              title,
              taskDescription,
          },
        ];
        setTasks(createdTasks);
    };
    const deleteTaskById = (id) => {
        const afterDeletingTasks = tasks.filter((task) => {
            return task.id !== id;
        });
        setTasks(afterDeletingTasks);
    };
    const editTaskById = (id, updatedTitle, updatedTaskDescription) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { id, title: updatedTitle, taskDescription: updatedTaskDescription };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            <TaskCreate onCreate={createTask} />
            <h1>Your Tasks</h1>
            <TaskList tasks={tasks}
                      onDelete={deleteTaskById}
                      onUpdate={editTaskById}
            />
        </div>
    );
}

export default App;