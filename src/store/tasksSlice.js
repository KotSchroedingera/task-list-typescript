import { createSlice } from "@reduxjs/toolkit";


const tasksSlice = createSlice({
  name: 'tasks', 
  initialState: {
    tasks: []
  }, 
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: Date.now().toString(), 
        title: action.payload.task, 
        complete: false,
      });
    }, 
    deleteTask(state, action) {
      state.tasks = state.tasks
        .filter(elem => elem.id !== action.payload.id);
    }, 
    toggleTaskComplete(state, action) {
      for (const elem of state.tasks) {
        if (elem.id === action.payload.id) elem.complete = !elem.complete;
      }
    }
  }
});

export const { addTask, deleteTask, toggleTaskComplete } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;