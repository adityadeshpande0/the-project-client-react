import React from "react";
import Questions from "../../components/questions-related/Question";
import { JSQusestions } from "../../utils/dummyData";
const QuestionsScreen: React.FC = () => {
    const handleOptionSelect = (selectedOption: string, correctAnswer: string) => {
      if (selectedOption === correctAnswer) {
        console.log("✅ Correct!");
      } else {
        console.log("❌ Incorrect! Correct Answer:", correctAnswer);
      }
    };
  
    return (
      <div className="p-4 space-y-6">
        <h1 className="text-2xl font-bold mb-4">All JavaScript Questions</h1>
  
        {JSQusestions.map((q, index) => (
          <Questions
            key={index}
            question={q.question}
            options={q.options}
            onSelectOption={(option) => handleOptionSelect(option, q.answer)}
          />
        ))}
      </div>
    );
  };

export default QuestionsScreen;
