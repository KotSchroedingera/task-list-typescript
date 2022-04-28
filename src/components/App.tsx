import React, { useEffect } from 'react'; 
import { ITask } from './interfaces';
import { Form } from './Form';
import { List } from './List';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';


export const App: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    const saved: ITask[] = JSON.parse(localStorage.tasks);
    if (!saved.length) return;
  }, []);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='container'>
      <Form 
        tasks={tasks}/>
      {
        tasks.length 
          ? <List />
          : <p>No posts</p>
      }
    </div>
  )
}

