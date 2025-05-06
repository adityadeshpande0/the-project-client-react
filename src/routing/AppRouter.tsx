import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../screens/authentication/Login/Login";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
