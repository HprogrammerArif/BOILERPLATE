import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

// const count = useAppSelector((state) => state.counter.value);
// const dispatch = useAppDispatch();

// const handleIncreament = (value: number) => {
//   dispatch(increment(value));
// };

// const handleDecreament = () => {
//   dispatch(decrement());
// };

{
  /* <div className="flex min-h-svh flex-col items-center justify-center">
        <Button onClick={() =>handleIncreament(1)}>Increment</Button>
        <Button onClick={() =>handleIncreament(5)}>Increment by 5</Button>
        <div>{count}</div>
        <Button onClick={handleDecreament}>Decrement</Button>
      </div> */
}
