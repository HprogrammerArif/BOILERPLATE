import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../users/userSlice";

interface IInitialState {
  tasks: ITask[];
  filter: "high" | "medium" | "low" | "all";
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "1",
      title: "connect to the database",
      description: "This task involves setting up the database connection.",
      dueDate: "",
      priority: "high",
      isCompleated: false,
      assignedTo: null,
    },
    {
      id: "2",
      title: "create the API endpoints",
      description:
        " This task involves creating the API endpoints for the application.",
      dueDate: "",
      priority: "medium",
      isCompleated: false,
      assignedTo: null,
    },
  ],
  filter: "all",
};

type draftTask = Pick<
  ITask,
  "title" | "description" | "priority" | "dueDate" | "assignedTo"
>;

const createTask = (taskData: draftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleated: false,
    assignedTo: taskData.assignedTo || null, // Ensure assignedTo is set to null if not provided
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<draftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleateState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleated = !task.isCompleated)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"high" | "medium" | "low" | "all">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task
      );
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }
};

export const { addTask, toggleCompleateState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;

//  const id = uuidv4()
//       const taskData = {
//         ...action.payload,
//         id,
//         isCompleated: false
//       }
// import { v4 as uuidv4 } from 'uuid';
//  const id = uuidv4()
