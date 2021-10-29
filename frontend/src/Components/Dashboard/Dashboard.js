import React, { useState, useEffect } from "react";
import HeaderPanel from "./HeaderPanel";
import Revenue from "./Revenue";
import Expenses from "./Expenses";
import IncomeStatement from "./IncomeStatement";
import RevenueTile from "./RevenueTile";
import ExpensesTile from "./ExpensesTile";
import NpMarginTile from "./NpMarginTile";
import GpMarginTile from "./GpMarginTile";
// import { logout } from "../../Actions/action.auth"
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom"
// import { toast } from "react-toastify";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Grid from "react-loader-spinner";
import Sidebar from "./Sidebar";

const Dashboard = ({ isAuthenticated }) => {

  // const history = useHistory();

  // const logoutSubmission = () => {
  //   logout()
  //   history.push('/');
  //   toast.success('Logout Success', {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }

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

  const [Loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1500)
  }, [])

  return (
    <div style={{minHeight:'100%'}}>
          <div className="mainDiv">
            <span>
              <>{isAuthenticated ? loggedInNow : notloggedIn}</>
            </span>
            <Sidebar />
            <HeaderPanel />
            <div className="mainPanel">
              <Revenue />
              <Expenses />
              <IncomeStatement />
              <RevenueTile />
              <ExpensesTile />
              <NpMarginTile />
              <GpMarginTile />
            </div>
            {/* <button onClick={() => { logoutSubmission() }} to="/">LOGOUT</button> */}
          </div>
          <div style={{ minHeight: '120%', minWidth: '100%', backgroundColor: '#e5e5e5', display: Loader === true ? 'flex' : 'none', 
                          justifyContent: 'center', alignItems:'center', position:'absolute', top: 0, }}>
            <Grid
              type="Puff"
              color="#0abab5"
              height={100}
              width={100}
              timeout={1500}
            />
          </div>
    </div>
  );
};

const mapDispatchToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(mapDispatchToProps)(Dashboard);
