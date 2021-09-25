import React from "react";
import HeaderPanel from "./HeaderPanel";
import Revenue from "./Revenue";
import Expenses from "./Expenses";
import IncomeStatement from "./IncomeStatement";
import RevenueTile from "./RevenueTile";
import ExpensesTile from "./ExpensesTile";
import { logout } from "../../Actions/action.auth"
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify";

const Dashboard = ({ isAuthenticated }) => {

  const history = useHistory();

  const logoutSubmission = () => {
    logout()
    history.push('/Login');
    toast.success('Logout Success', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const loggedInNow = (
    <>
      <h3>You are currently Logged In</h3>
    </>
  );

  const notloggedIn = (
    <>
      <h3>You are not Logged In</h3>
    </>
  );

  return (
    <div>
      <span>
        <>{isAuthenticated ? loggedInNow : notloggedIn}</>
      </span>
      <HeaderPanel />
      <div className="mainPanel">
          <Revenue />
          <Expenses />
          <IncomeStatement />
          <RevenueTile />
          <ExpensesTile />
      </div>
      <button onClick={()=>{ logoutSubmission() }} to="/">LOGOUT</button>
    </div>
  );
};

const mapDispatchToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(mapDispatchToProps)(Dashboard);
