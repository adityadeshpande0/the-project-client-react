import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";

interface QuestionProps {
  question: string;
  options: string[];
  onSelectOption: (option: string) => void;
}

const Questions: React.FC<QuestionProps> = ({
  question,
  options,
  onSelectOption,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelectOption(value);
  };

  return (
    <div className="p-4 rounded-2xl shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <RadioGroup
        name="question-options"
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
            className="mb-2"
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default Questions;