import { Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks";
import { removeUser } from "@/redux/features/users/userSlice";
import type { IUser } from "@/types";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className={cn("text-lg font-semibold")}>{user.name}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button
            onClick={() => dispatch(removeUser(user.id))}
            variant="link"
            className="text-red-500 hover:underline"
            size="sm"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
