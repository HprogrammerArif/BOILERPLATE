import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import taskReducer from "./features/tasks/taskSlice"; // Assuming you have a taskSlice defined
import userReducer from "./features/users/userSlice"; // Assuming you have a userSlice defined

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer, // Assuming you have a taskReducer imported
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
