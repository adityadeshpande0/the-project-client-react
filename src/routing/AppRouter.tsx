import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../screens/authentication/Login/Login";
import QuestionsScreen from "../screens/questions/QuestionsScreen";
import Register from "../screens/authentication/register/Register";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/questions" Component={QuestionsScreen} />
        <Route path="/register" Component={Register} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
