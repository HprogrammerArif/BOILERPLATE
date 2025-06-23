import { Card } from "@/components/ui/card";
import { useGetAllQuizesQuery } from "@/Redux/api/quizApi";
import { useAppDispatch } from "../Redux/hooks";
import { setQuiz, TQuize, TQuizeData } from "@/Redux/features/quizSlice";

const AllQuiz = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllQuizesQuery(undefined);
  console.log({ data });
  if (isLoading) {
    return <p>Loading....</p>;
  }

  const handleSetQuize = (questions:TQuizeData) => {
    console.log(questions);
    dispatch(setQuiz(questions));
  };

  return (
    <div className="my-3 ">
      <div className="grid grid-cols-8 gap-4">
        {data?.map((quiz:TQuize, index:string) => (
          <Card
            onClick={() => handleSetQuize(quiz.questions)}
            className="p-4 hover:shadow-md cursor-pointer"
            key={index}
          >
            <h3>Name: {quiz.title} </h3>
            <p>Description:{quiz.description} </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllQuiz;
