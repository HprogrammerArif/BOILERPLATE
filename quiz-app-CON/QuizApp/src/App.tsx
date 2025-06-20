// import { Question } from "./home/Question";
import AllQuiz from "./home/AllQuiz";
import { Question } from "./home/Question";
import { QuizSummary } from "./home/QuizSummary";
import { useAppSelector } from "./Redux/hooks";

const App = () => {
  const { quizComplete } = useAppSelector((state) => state.quiz);

  return (
    <div className="container mx-auto p-4">
      <h4 className="text-center text-9xl my-12">Quiz App</h4>
      <AllQuiz></AllQuiz>
      {!quizComplete ? <Question /> : <QuizSummary />}
      
    </div>
  );
};

export default App;
