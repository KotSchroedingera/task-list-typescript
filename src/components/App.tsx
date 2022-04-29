import { Form } from './Form';
import { List } from './List';
import { TasksInfo } from './TasksInfo';
import { useTasks } from './hooks';


export const App: React.FC = () => {
  const tasks = useTasks();

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

