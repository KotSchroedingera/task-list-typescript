import React from 'react'; 
import { Form } from './Form';
import { List } from './List';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';
import { ITask } from './interfaces';
import { TasksInfo } from './TasksInfo';


export const App: React.FC = () => {
  const tasks: ITask[] = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <div className='container'>
      <Form />
      {
        tasks.length 
          ? <>
              <TasksInfo />
              <List />
            </>
          : <p>No posts</p>
      }
    </div>
  )
}

