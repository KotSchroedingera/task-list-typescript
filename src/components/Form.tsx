import { useState, useEffect, useRef, ChangeEventHandler, FormEventHandler } from "react"; 
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";
import { useTasks } from "./hooks";


export const Form: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const tasks = useTasks();

  const inputEl = useRef<HTMLInputElement | null>(null);
  const helperEl = useRef<HTMLParagraphElement | null>(null);
  
  const dispatch = useDispatch();

  const isTaskValid = (str: string): boolean => {
    const task = str.trim();
    if (!task.length) return false;
    for (let elem of tasks) {
      if (elem.title === task) return false;
    }
    if (task.length > 30) return false;
    return true;
  }

  useEffect(() => {
    inputEl.current?.focus();
    inputEl.current?.classList.add('invalid');
    if (helperEl.current?.textContent) helperEl.current.textContent = 'Enter the text';
  }, []);


  const taskInputHandler: ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (isTaskValid(evt.target.value)) {
      inputEl.current?.classList.remove('invalid');
      inputEl.current?.classList.add('valid');
    } else {
      inputEl.current?.classList.remove('valid');
      inputEl.current?.classList.add('invalid');
    }
    setTask(evt.target.value);
  }; 

  const submitHandler: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    if (isTaskValid(task)) {
      dispatch(addTask({ task })); 
      setTask('');
    }
  }

  return <div>
    <form 
      action=""
      onSubmit={(evt) => submitHandler(evt)}
      >
      <label htmlFor="input-task">Please input task</label>
      <input
        className="valid"
        placeholder="Please input task"
        id="input-task"
        ref={inputEl}
        type='text'
        value={task}
        onChange={evt => taskInputHandler(evt)} />
      <p 
        ref={helperEl}
        className="helper-text">{
          inputEl.current?.classList.contains('invalid')
            ? 'Task is invalid'
            : 'Task is valid'
        }</p>
      <button 
        className="btn waves-effect waves-light" 
        type="submit">
          Submit task
          <i className="material-icons right">add_circle_outline</i>
      </button>
    </form>
  </div>
}