import { useState, useEffect, useRef, ChangeEventHandler, FormEventHandler } from "react"; 
import { ITask } from "./Task";

interface IProps {
  addTask: (arg0: string) => void;
  tasks: ITask[];
}

export const Form: React.FC<IProps> = ({ addTask, tasks }) => {
  const [task, setTask] = useState<string>('');
  const inputEl = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  const taskInputHandler: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setTask(evt.target.value);
  }; 

  const submitHandler: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    for (let elem of tasks) {
      if (elem.title === task.trim()) return;
    }
    addTask(task.trim()); 
    setTask('');
  }

  return <div>
    <form 
      action=""
      onSubmit={(evt) => submitHandler(evt)}
      >
      <input
        ref={inputEl}
        type='text'
        value={task}
        onChange={evt => taskInputHandler(evt)} />
      <button
        type='submit'
      >Add task</button>
    </form>
  </div>
}