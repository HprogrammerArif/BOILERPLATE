import { createSlice } from "@reduxjs/toolkit";
import { quizData } from "../../home/quizData";

export type TQuize = {
  _id: string;
  title: string;
  description: string;
  questions: TQuizeData;
  createdAt: string;
  updatedAt: string;
};

export interface TQuizeData {
  questions: typeof quizData;
  currentQuestionIndex: number;
  userAnswers: (string | null)[]; // Track user answers (null means no answer selected)
  quizComplete: boolean;
}

const initialState: TQuizeData = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null), // Initialize with null for each question
  quizComplete: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswers[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    completeQuiz: (state) => {
      state.quizComplete = true;
    },

    setQuiz: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const {
  setAnswer,
  nextQuestion,
  previousQuestion,
  completeQuiz,
  setQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
