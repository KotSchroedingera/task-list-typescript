import React, { ChangeEventHandler, useState } from 'react'; 
import { Task, ITask } from './Task';

export const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  
  const handleInputTask: ChangeEventHandler<HTMLInputElement> = (evt) => setTask(evt.target.value);
  const handleSubmitTask: ChangeEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    const newTask: ITask = {
      id: Date.now(), 
      title: task, 
      complete: false,
    }
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <div>
        <input
          type='text'
          value={task}
          onChange={handleInputTask}/>
        <button
          type='submit'
          onSubmit={handleSubmitTask}
        >Add task</button>
      </div>
      {
        tasks.length 
          ? <div>
            {tasks.map((elem: ITask) => <Task {...elem}/>)}
          </div>
          : <p>No posts</p>
      }
    </div>
  )
}
