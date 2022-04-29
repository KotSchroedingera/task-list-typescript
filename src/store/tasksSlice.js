import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const tasksSlice = createSlice({
  name: 'tasks', 
  initialState: {
    tasks: []
  }, 
  reducers: {
    addTask(state, action) {
      state.tasks.unshift({
        id: uuidv4(), 
        title: action.payload.task, 
        complete: action.payload.complete ? true : false,
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
    },
    deleteTasks(state) {
      state.tasks = [];
    }
  }
});

export const { 
  addTask, 
  deleteTask, 
  toggleTaskComplete, 
  deleteTasks } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;