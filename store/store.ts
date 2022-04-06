import {configureStore} from '@reduxjs/toolkit';
import tasksListReducer from '../src/screens/Tasks/slice/TasksSlice';

export const store = configureStore({
  reducer: {
    tasksList: tasksListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
