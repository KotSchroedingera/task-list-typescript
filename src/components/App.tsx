import React, { useState } from 'react'; 
import { Task, ITask } from './Task';
import { Form } from './Form';

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);



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
    setTasks([...tasks, newTask]);
  }

  return (
    <div className='container'>
      <div>
        <Form 
          addTask={addTask}
          tasks={tasks}/>
      </div>
      {
        tasks.length 
          ? <div>
            {tasks.map((elem: ITask) => {
              return <div key={elem.id}>
                <Task {...elem}/>
                <input 
                  type='checkbox'            
                  checked={elem.complete}
                  onChange={() => changeComplete(elem.id)} />
                <button
                  id={elem.id.toString()}
                  onClick={() => removeTask(elem.id)}>Delete task</button>
                  <hr></hr>
              </div>})}
          </div>
          : <p>No posts</p>
      }
    </div>
  )
}

