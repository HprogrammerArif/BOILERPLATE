import { Button } from "@/components/ui/button"; // Adjust path to your Button component
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setAnswer } from "../Redux/features/quizSlice"; // Adjust path to actions
import { useAppDispatch, useAppSelector } from "../Redux/hooks"; // Adjust path to hooks
import QuizControls from "./QuizControls";

export function Question() {
  const dispatch = useAppDispatch();
  const { questions, currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex]; // Get the selected answer

  // Handle answer selection
  const handleAnswerChange = (answer: string) => {
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };

  return (
    <div>
      {
        questions.length>0 && <div className="flex justify-center">
      <Card className="w-[450px] ">
        <CardHeader className="">
          <CardTitle>
            <h3>{currentQuestion?.question}</h3>
          </CardTitle>
          <CardDescription>
            <p>
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            {currentQuestion?.options.map((option, index) => (
              <Button
                className="w-full mt-3"
                key={index}
                size={"lg"}
                variant={option === currentAnswer ? "default" : "outline"}
                onClick={() => handleAnswerChange(option)}
              >
                {option}
              </Button>
            ))}
          </div>
          <QuizControls />
        </CardContent>
      </Card>
    </div>
      }
    </div>
  );
}
