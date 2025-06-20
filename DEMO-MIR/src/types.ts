export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
  isCompleated: boolean;
  assignedTo?: string | null; // Optional field for user ID
}


export interface IUser {
  id: string;
  name: string;
}