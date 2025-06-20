import UserCard from "@/components/module/tasks/UserCard";
import { AddUserModal } from "@/components/module/users/AddUserModal";
import { selectUsers } from "@/redux/features/users/userSlice";
import { useAppSelector } from "@/redux/hooks";

const Users = () => {
  const users = useAppSelector(selectUsers);
  console.log(users);

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 mt-10">
        <div className="flex items-center justify-end gap-5">
          <h1 className="mr-auto">Users</h1>
          <AddUserModal />
        </div>
        <div className=" grid grid-cols-4 gap-4 space-y-5 mt-5">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
