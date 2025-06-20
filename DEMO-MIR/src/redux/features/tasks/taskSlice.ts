import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

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
    },
    {
      id: "2",
      title: "create the API endpoints",
      description:
        " This task involves creating the API endpoints for the application.",
      dueDate: "",
      priority: "medium",
      isCompleated: false,
    },
  ],
  filter: "all",
};

type draftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;

const createTask = (taskData: draftTask): ITask => {
  return {
    id: nanoid(),
    isCompleated: false,
    ...taskData,
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
    updateFilter: (state, action: PayloadAction<"high" | "medium" | "low" | "all">) => {
      state.filter = action.payload;
    },
  },
});

export const selectTasks = (state: RootState) => {
  const filter =  state.todo.filter;

  if(filter === 'low') {
    return state.todo.tasks.filter((task) => task.priority === 'low')
  } else if(filter === 'medium') {
    return state.todo.tasks.filter((task) => task.priority === 'medium')
  } else if(filter === 'high') {
    return state.todo.tasks.filter((task) => task.priority === 'high')
  } else {
    return state.todo.tasks
  }
};

export const { addTask, toggleCompleateState, deleteTask, updateFilter } = taskSlice.actions;

export default taskSlice.reducer;

//  const id = uuidv4()
//       const taskData = {
//         ...action.payload,
//         id,
//         isCompleated: false
//       }
// import { v4 as uuidv4 } from 'uuid';
//  const id = uuidv4()
