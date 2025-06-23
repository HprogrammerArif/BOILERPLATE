// import { Question } from "./home/Question";
// import AllQuiz from "./home/AllQuiz";
// import { Question } from "./home/Question";
// import { QuizSummary } from "./home/QuizSummary";
// import { useAppSelector } from "./Redux/hooks";

import Navbar2 from "./premadeCompo/Navbar2";

const App = () => {
  //const { quizComplete } = useAppSelector((state) => state.quiz);

  return (
    <div className="container">
      {/* <Navbar2 /> */}
      <Navbar2 />
      {/* Uncomment the following lines to use the quiz components */}
      {/* <h4 className="text-center text-9xl my-12">Quiz App</h4>
      <AllQuiz></AllQuiz>
      {!quizComplete ? <Question /> : <QuizSummary />}
       */}
    </div>
  );
};

export default App;
