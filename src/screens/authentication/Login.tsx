import React from "react";

const Login: React.FC = () => {
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Add login logic here
    console.log("Login submitted");
  };

  return (
    <div className="login-container">
     
    </div>
  );
};

export default Login;
