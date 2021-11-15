import { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store";
import { check_authenticated } from "../src/Actions/action.auth";
import setAuthToken from "../src/util/setAuthToken"
import Routes from "./util/routing/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Check for token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}


function App() {
  //Setting up token
  useEffect(() => {
    store.dispatch(check_authenticated());
    // eslint-disable-next-line
  }, []);
  return (

    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes />

        {/* <Layout/>

        <Route exact path="/" component={LoginForm}>
          <div className="Container">
            <Logo />
            <div className="BlueSlice">
              <h2 className="Quote">“Politics are usually the executive expression of human immaturity.”</h2>
              <h2 className="Writer">Vera Brittain</h2>
            </div>
            <Header />
            <LoginForm />
          </div>
        </Route>

        <Route exact path="/Register" component={RegisterForm}>
          <div className="reg-container">
            <Logo2 />
            <div className="BlueSlice2">
              <h2 className="Quote2">“Politics are usually the executive expression of human immaturity.”</h2>
              <h2 className="Writer2">Vera Brittain</h2>
            </div>
            <RegHeader />
            <RegisterForm />
          </div>
        </Route>

        <Route exact path="/Dashboard" component={Dashboard}>
          <Dashboard />
        </Route> */}

      </Router>

    </Provider>

  );
}

export default App;
