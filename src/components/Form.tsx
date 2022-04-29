import { useState, useEffect, useRef, ChangeEventHandler, FormEventHandler } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/tasksSlice";
import { RootState } from "../store";
import { ITask } from "./interfaces";


export const Form: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const tasks: ITask[] = useSelector((state: RootState) => state.tasks.tasks);
  const inputEl = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  const taskInputHandler: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setTask(evt.target.value);
  }; 

  const submitHandler: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    if (!task) return;
    for (let elem of tasks) {
      if (elem.title === task.trim()) return;
    }
    dispatch(addTask({ task }))
    setTask('');
  }

  return <div>
    <form 
      action=""
      onSubmit={(evt) => submitHandler(evt)}
      >
      <label htmlFor="input-task">Please input task</label>
      <input
        placeholder="Please input task"
        id="input-task"
        ref={inputEl}
        type='text'
        value={task}
        onChange={evt => taskInputHandler(evt)} />
      <button 
        className="btn waves-effect waves-light" 
        type="submit">
          Submit task
          <i className="material-icons right">add_circle_outline</i>
      </button>
    </form>
  </div>
}