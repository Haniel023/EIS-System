import React from "react";
import { Route, Switch } from "react-router-dom";
//Private Route
import PrivateRoute from "../routing/privateRoute";
import LoginForm from "../../Components/Login/LoginForm";
import RegisterForm from "../../Components/Register/RegisterForm";
import Dashboard from "../../Components/Dashboard/Dashboard";

//All the routes file
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Login" component={LoginForm} />
        <Route exact path="/Register" component={RegisterForm} />
        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default Routes;