import Header from "./Components/Login/Header";
import RegHeader from "./Components/Register/RegHeader";
import Logo from "./Components/Login/Logo";
import Logo2 from "./Components/Register/Logo2";
import LoginForm from "./Components/Login/LoginForm";
import RegisterForm from "./Components/Register/RegisterForm";
import Dashboard from "./Components/Dashboard/Dashboard"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store";
import Layout from "./hoc/Layout";

function App() {
  return (

    <Provider store={store}>
      <Router>
          <Layout/>

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
        </Route>

      </Router>

    </Provider>

  );
}

export default App;
