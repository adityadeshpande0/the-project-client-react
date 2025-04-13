import React, { useState } from "react";
import TextInputField from "../../components/text-input-fields/TextInputField";
import { Paper, Stack, Button } from "@mui/material";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login submitted", { email, password });
    // Add actual login logic here
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 5, maxWidth: 600, margin: "auto", marginTop: 5 }}
    >
      <Stack spacing={2}>
        <TextInputField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          size="small"
          type="email"
        />
        <TextInputField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          size="small"
          type="password" // auto-triggers eye icon
          showTogglePassword={true} // show eye icon
        />
        <Button type="submit" variant="contained" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Stack>
    </Paper>
  );
};

export default Login;
