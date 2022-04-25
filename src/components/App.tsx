import React, { useState } from 'react';
import { ITodo } from '../types/data';
import { TodoList } from './TodoList';


const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (value: string): void => {
    if (!value) return;
    setTodos([...todos, {
      id: Date.now(), 
      title: value, 
      complete: false,
    }]); 
    setValue('');
  }

  return (
    <div>
      <div>
        <input 
          value={value}
          onChange={evt => setValue(evt.target.value)}
          type="text" />
        <button
          onClick={evt => addTodo(value)}>Add</button>
      </div>
      <TodoList items={todos}></TodoList>
    </div>
  )
}

export default App;