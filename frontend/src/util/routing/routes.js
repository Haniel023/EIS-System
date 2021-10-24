import React from "react";
import { Route, Switch } from "react-router-dom";
//Private Route
import PrivateRoute from "../routing/privateRoute";
import LoginForm from "../../Components/Login/LoginForm";
import RegisterForm from "../../Components/Register/RegisterForm";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Support from "../../Components/Support/Support";

//All the routes file
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/Register" component={RegisterForm} />
        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Support" component={Support} />
      </Switch>
    </div>
  );
};

export default Routes;