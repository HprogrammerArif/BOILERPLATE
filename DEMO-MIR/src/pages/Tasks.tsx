import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/tasks/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Tasks = () => {
  const dispatch = useAppDispatch()
  const tasks = useAppSelector(selectTasks);
  return (
    <div className="max-w-7xl mx-auto px-5 mt-10">
      <div className="flex items-center justify-end gap-5">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger onClick={() =>dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={() =>dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
            <TabsTrigger onClick={() =>dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={() =>dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal/>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
