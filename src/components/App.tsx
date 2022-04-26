import React, { ChangeEventHandler, EventHandler, ReactEventHandler, SyntheticEvent, useState } from 'react'; 
import { Task, ITask } from './Task';

export const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  
  const handleInput: ChangeEventHandler<HTMLInputElement> = (evt) => setTask(evt.target.value);

  return (
    <div>
      <div>
        <input
          type='text'
          value={task}
          onChange={handleInput}/>
        <button>Add task</button>
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
