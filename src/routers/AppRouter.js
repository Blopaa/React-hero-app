import React, { useContext } from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
// import { Navbar } from "../components/ui/Navbar";
import { LoginScreen } from "../components/login/LoginScreen";
// import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {  

  const {user} = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
            <PublicRoute exact path="/login" component={LoginScreen}  isAuthenticated={user.logged}/>
            <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={user.logged}/>
        </Switch>
      </div>
    </Router>
  );
};
