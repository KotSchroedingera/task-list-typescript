import React, { ChangeEventHandler, FormEventHandler, ReactFragment, useState } from 'react'; 
import { SyntheticEvent } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Task, ITask } from './Task';

export const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [complete, setComplete] = useState(false); 
  const inputEl = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);
  
  const handleInputTask: ChangeEventHandler<HTMLInputElement> = (evt) => setTask(evt.target.value);
  const handleSubmitTask: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    const newTask: ITask = {
      id: Date.now(), 
      title: task, 
      complete: false,
    };
    setTasks([...tasks, newTask]);
    setTask('');
    inputEl.current?.focus();
  }; 

  return (
    <div>
      <div>
        <form 
          action=""
          onSubmit={handleSubmitTask}>
          <input
            ref={inputEl}
            type='text'
            value={task}
            onChange={handleInputTask}/>
          <button
            type='submit'
          >Add task</button>
        </form>
      </div>
      {
        tasks.length 
          ? <div>
            {tasks.map((elem: ITask) => {
              return <div key={elem.id}>
                <Task {...elem}/>
                <input 
                  type='checkbox'
                  checked={elem.complete} />
                  <hr></hr>
              </div>})}
          </div>
          : <p>No posts</p>
      }
    </div>
  )
}

