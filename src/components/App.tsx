import React from 'react'; 
import { Form } from './Form';
import { List } from './List';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';


export const App: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <div className='container'>
      <Form />
      {
        tasks.length 
          ? <List />
          : <p>No posts</p>
      }
    </div>
  )
}

