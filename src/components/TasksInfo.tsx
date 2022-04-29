import { useDispatch } from 'react-redux';
import { useTasks } from './hooks';
import { deleteTasks } from '../store/tasksSlice';


export const TasksInfo: React.FC = () => {
  const tasks = useTasks();
  const dispath = useDispatch();

  const handleDeleteAllTasks = () => {
    if (window.confirm('Are you sure?')) dispath(deleteTasks());
  }

  return <div>
    <p>
      Всего задач: {tasks.length}<br />
      Выполнено: {tasks.filter(elem => elem.complete === true).length}<br />
      Осталось: {tasks.length - tasks.filter(elem => elem.complete === true).length}<br />
    </p>
    <button 
      className='btn red darken-2' 
      onClick={handleDeleteAllTasks}>Delete all tasks</button>
  </div>
}