import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../screens/authentication/Login/Login";
import QuestionsScreen from "../screens/questions/QuestionsScreen";
import Register from "../screens/authentication/register/Register";
import ProfileScreen from "../screens/profile/ProfileScreen";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" Component={Login} />
        <Route path="/questions" Component={QuestionsScreen} />
        <Route path="/signup" Component={Register} />
        <Route path="/user-profile" Component={ProfileScreen} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
