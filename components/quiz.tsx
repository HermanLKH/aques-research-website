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
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current question index

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
      setShowAnswers(false); // Reset showAnswers for the next question
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowAnswers(false); // Reset showAnswers for the previous question
    }
  };

  const currentQuestion = questions[currentIndex]; // Get the current question
  const category = currentQuestion.category; // Assuming each question has a `category` property
  const sequence = `${currentIndex + 1}/${questions.length}`; // Current question sequence

  return (
    <section className="my-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">
        Test Your Understanding
      </h2>

      {/* Render the current question */}
      <div className="border p-5 rounded-lg shadow-md bg-white">
        <div className="mb-3 flex justify-between">
          <h3 className="font-semibold">{currentQuestion.question}</h3>
          <h3 className="text-gray-600">
            {category} - {sequence}
          </h3>
        </div>
        <ul className="space-y-2">
          {currentQuestion.options.map((option, index) => (
            <li
              key={index}
              className={`p-3 rounded-lg cursor-pointer ${
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
      <div className="flex justify-between mt-5">
        <Button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default Quiz;
