import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import type { ITask } from "@/types";


const TaskCard = ({task}: {task: ITask}) => {
  return (
    <div className="border px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 size-3 rounded-full bg-green-500"></div>
          <h3 className="text-lg font-semibold">{task.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button
            variant="link"
            className="text-red-500 hover:underline"
            size="sm"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
            <Checkbox />
        </div>
      </div>
      <p className="text-gray-600 mt-2">
        This is a brief description of the task. It can be a few sentences long.
      </p>
    </div>
  );
};

export default TaskCard;
