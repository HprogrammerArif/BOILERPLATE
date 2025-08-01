import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvide";
// import { BsCartCheckFill } from "react-icons/bs";
import { FaHome, FaShoppingCart } from "react-icons/fa";
// import useCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext);
  // const [cart] = useCart();
  // const [isAdmin] = useAdmin();

  const user = null; // Replace with actual user context
  const isAdmin = false; // Replace with actual admin check
  const cart = []; // Replace with actual cart context or state

  const handleLogOut = () => {
    // logOut()
    //   .then(() => {})
    //   .catch((err) => console.log(err));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>

      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome">
            <FaHome></FaHome> Admin Home
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink to="/dashboard/userHome">
            <FaHome></FaHome> User Home
          </NavLink>
        </li>
      )}

      <li>
        <Link to="/dashboard/cart">
          <button className="flex gap-2">
            {/* <BsCartCheckFill /> */}
            <FaShoppingCart className="mt-1 w-5" />
            <div className="badge badge-secondary">+{cart?.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <button onClick={handleLogOut} className="btn btn-active btn-ghost">
          Log Out
        </button>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-opacity-30 text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get Started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
