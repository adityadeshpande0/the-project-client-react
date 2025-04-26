import React from "react";

interface QuestionProps {
  question: string;
  options: string[];
  onSelectOption: (option: string) => void;
}

const Questions: React.FC<QuestionProps> = ({ question, options, onSelectOption }) => {
  return (
    <div className="p-4 rounded-2xl shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => onSelectOption(option)}
              className="w-full text-left p-3 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
