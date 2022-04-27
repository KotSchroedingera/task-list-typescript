import React, { useEffect, useState } from 'react'; 
import { ITask } from './Task';
import { Form } from './Form';
import { List } from './List';

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  type TaskHandler = (arg0: string) => void;
  const removeTask: TaskHandler = (id) => {
    setTasks(tasks.filter(elem => elem.id !== id));
  };
  const changeComplete: TaskHandler = (id) => {
    const newTasks: ITask[] = [];
    for (const elem of tasks) {
      if (elem.id === id) elem.complete = !elem.complete;
      newTasks.push(elem);
    }
    setTasks(newTasks);
  }
  const addTask = (task: string) => {
    const newTask: ITask = {
      id: Date.now().toString(), 
      title: task, 
      complete: false,
    };
    setTasks([newTask, ...tasks]);
  }

  return (
    <div className='container'>
      <Form 
        addTask={addTask}
        tasks={tasks}/>
      {
        tasks.length 
          ? <List
              tasks={tasks}
              changeComplete={changeComplete}
              removeTask={removeTask} />
          : <p>No posts</p>
      }
    </div>
  )
}

