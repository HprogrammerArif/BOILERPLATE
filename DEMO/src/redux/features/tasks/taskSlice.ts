import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "1",
      title: "connect to the database",
      description: "",
      dueDate: "",
      priority: "low",
      completed: false,
    },
    {
      id: "2",
      title: "create the API endpoints",
      description: "",
      dueDate: "",
      priority: "low",
      completed: false,
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export default taskSlice.reducer;
