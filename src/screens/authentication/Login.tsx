import React from "react";
import TextInputField from "../../components/text-input-fields/TextInputField";
import { Paper, Stack, Button, Typography } from "@mui/material";
import { useFormValidation } from "../../hooks/useFormValidation";

const Login: React.FC = () => {
  const formik = useFormValidation("login", (values) => {
    console.log("Form submitted with values:", values);
  });

  return (
    <Paper
      elevation={3}
      sx={{ padding: 5, maxWidth: 600, margin: "auto", marginTop: 5 }}
    >
      <Stack spacing={2}>
        <TextInputField
          label="Email"
          type="email"
          size="small"
          margin="normal"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            formik.touched.email && typeof formik.errors.email === "string"
              ? formik.errors.email
              : undefined
          }
        />

        <TextInputField
          label="Password"
          type="password"
          size="small"
          margin="normal"
          showTogglePassword={true}
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={
            formik.touched.password ? formik.errors.password : undefined
          }
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          onClick={() => formik.handleSubmit}
          disabled={!formik.isValid || !formik.dirty}
        >
          Login
        </Button>
      </Stack>
    </Paper>
  );
};

export default Login;
