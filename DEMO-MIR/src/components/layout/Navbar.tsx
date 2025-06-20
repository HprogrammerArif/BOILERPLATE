import Logo from "@/assets/Logo";
import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center gap-2">
        {/* <img
          src="/logo.png"
          alt="Logo"
          className="h-10 w-10 rounded-full object-cover"
        /> */}
        <Logo/>
        <span className="text-xl font-semibold ml-2">MyApp</span>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/users">Users</Link>
      </div>
      <div className="ml-auto flex items-center gap-3">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;