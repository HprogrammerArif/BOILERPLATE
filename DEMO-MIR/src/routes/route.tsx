import App from "@/App";
import Login from "@/pages/Login";
import Tasks from "@/pages/Tasks";
import { Users } from "lucide-react";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default routes;
