import { Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks";
import { deleteTask, toggleCompleateState } from "@/redux/features/tasks/taskSlice";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch()
  return (
    <div className="border px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cn("w-2.5 h-2.5 size-3 rounded-full", {
            "bg-green-500": task.priority === "high",
            "bg-yellow-500": task.priority === "medium",
            "bg-red-500": task.priority === "low",
          })}></div>
          <h3 className={cn("text-lg font-semibold", {
            "line-through text-gray-500": task.isCompleated,
            "text-gray-900": !task.isCompleated,
          })}>{task.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button
          onClick={() => dispatch(deleteTask(task.id))}
            variant="link"
            className="text-red-500 hover:underline"
            size="sm"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
          <Checkbox checked={task.isCompleated} onClick={() => dispatch(toggleCompleateState(task.id))} />
        </div>
      </div>
      <p className="text-gray-600 mt-2">{task.description} </p>
    </div>
  );
};

export default TaskCard;
