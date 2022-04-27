import { Task, ITask } from './Task';

interface IProps {
  tasks: ITask[]; 
  changeComplete: (arg0: string) => void;
  removeTask: (arg0: string) => void;
}

export const List: React.FC<IProps> = (props) => {
  const { tasks, changeComplete, removeTask } = props;
  
  return <ul>
    {tasks.map((elem: ITask) => {
    return <li key={elem.id}>
      <Task {...elem}/>
      <label style={{
        display: 'flex',
        marginBottom: '1em'
      }}>
        <input
          type='checkbox'            
          checked={elem.complete}
          onChange={() => changeComplete(elem.id)} />
        {elem.complete
          ? <span>Set undone</span>
          : <span>Set done</span>}
      </label>
      <button
        className='btn-small'
        id={elem.id.toString()}
        onClick={() => removeTask(elem.id)}>
          Delete task
          <i className="material-icons right">delete</i>
      </button>
      <hr></hr>
    </li>})}
  </ul>
}