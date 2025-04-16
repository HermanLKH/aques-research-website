"use client";
import { QuizQuestion } from "@/lib/types";
import { useState } from "react";
import { Button } from "./ui/button";

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<
    Record<number | string, number>
  >({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswerClick = (
    questionId: number | string,
    optionIndex: number
  ) => {
    setSelectedAnswer((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
    setShowAnswers(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswers(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowAnswers(false);
    }
  };

  const currentQuestion = questions[currentIndex];
  const category = currentQuestion.category;
  const sequence = `${currentIndex + 1}/${questions.length}`;

  return (
    <section className="my-10 px-3 sm:px-5">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        Test Your Understanding
      </h1>

      {/* Question Container */}
      <div className="border p-3 sm:p-5 rounded-lg shadow-md bg-white">
        <div className="mb-3 flex flex-col sm:flex-row justify-between items-center">
          <h3 className="font-semibold text-base sm:text-lg">
            {currentQuestion.question}
          </h3>
          <h3 className="text-gray-600 text-sm mt-2 sm:mt-0">
            {category} - {sequence}
          </h3>
        </div>

        <ul className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <li
              key={index}
              className={`p-2 sm:p-3 rounded-lg cursor-pointer ${
                showAnswers
                  ? index === currentQuestion.correct
                    ? "bg-green-300"
                    : index === selectedAnswer[currentQuestion.id]
                    ? "bg-red-300"
                    : "bg-gray-100"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => handleAnswerClick(currentQuestion.id, index)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-between mt-5 space-y-3 sm:space-y-0">
        <Button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="w-full sm:w-auto"
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default Quiz;
