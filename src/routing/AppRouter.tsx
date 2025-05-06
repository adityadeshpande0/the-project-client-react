import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../screens/authentication/Login/Login";
import QuestionsScreen from "../screens/questions/QuestionsScreen";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/questions" Component={QuestionsScreen} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
