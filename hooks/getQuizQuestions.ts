import { QuizQuestion } from "@/lib/types";
import fs from "fs";
import path from "path";

// Hook to fetch quiz questions
export const getQuizQuestions = () => {
  const quizQuestionsPath = path.join(process.cwd(), "database/quiz.json");
  // Load quiz data from the JSON file
  const quizData = fs.readFileSync(quizQuestionsPath, "utf-8");
  const categories = JSON.parse(quizData);

  // Flatten the questions from each category
  const allQuestions: QuizQuestion[] = categories.flatMap((category: { category: string; questions: QuizQuestion[] }) =>
    category.questions.map((question) => ({
      ...question,
      category: category.category, // You can also keep track of the category if needed
    }))
  );

  return allQuestions;
};
