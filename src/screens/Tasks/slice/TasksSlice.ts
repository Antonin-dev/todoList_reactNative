import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Task, TasksState} from '../../../types/task';
import {SetStateAction} from 'react';

const initialState: TasksState = {
  tasks: [],
};

export const counterSlice = createSlice({
  name: 'tasksList',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask = {
        id: new Date().getTime(),
        title: action.payload,
        isCompleted: false,
      };
      state.tasks = [...state.tasks, newTask];
    },
    updateTask: (state, action: PayloadAction<number>) => {
      const newTasks: SetStateAction<Task[]> = [];
      state.tasks.forEach(task => {
        if (task.id !== action.payload) {
          newTasks.push(task);
          return;
        } else {
          newTasks.push({
            id: task.id,
            title: task.title,
            isCompleted: !task.isCompleted,
          });
        }
      });
      state.tasks = [...newTasks];
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const newTasks: Task[] = [];
      state.tasks.forEach(({id: taskId, title, isCompleted}) => {
        if (action.payload !== taskId) {
          newTasks.push({id: taskId, title, isCompleted});
        } else {
          return;
        }
      });
      state.tasks = [...newTasks];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addTask, updateTask, deleteTask} = counterSlice.actions;

export default counterSlice.reducer;
