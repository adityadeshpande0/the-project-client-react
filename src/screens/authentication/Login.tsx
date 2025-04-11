import React from "react";
import TextInputField from "../../components/text-input-fields/TextInputField";

const Login: React.FC = () => {
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Add login logic here
    console.log("Login submitted");
  };

  return (
    <div className="login-container">
      <TextInputField label={"Email"} value={""} onChange={(e) => {}} />
      <TextInputField label={"Password"} value={""} onChange={(e) => {}} />
    </div>
  );
};

export default Login;
