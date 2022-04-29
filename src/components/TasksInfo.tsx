import { useSelector } from 'react-redux';
import { RootState } from '../store/index';
import { ITask } from './interfaces';

export const TasksInfo: React.FC = () => {
  const tasks: ITask[] = useSelector((state: RootState) => state.tasks.tasks);

  return <div>
    <p>
      Всего задач: {tasks.length}<br />
      Выполнено: {tasks.filter(elem => elem.complete === true).length}<br />
      Осталось: {tasks.length - tasks.filter(elem => elem.complete === true).length}<br />
    </p>
  </div>
}