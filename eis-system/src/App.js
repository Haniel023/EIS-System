import Header from "./Components/Login/Header";
import RegHeader from "./Components/Register/RegHeader";
import Logo from "./Components/Login/Logo";
import Logo2 from "./Components/Register/Logo2";
import LoginForm from "./Components/Login/LoginForm";
import RegisterForm from "./Components/Register/RegisterForm";
import Dashboard from "./Components/Dashboard/Dashboard"
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (

    <Router>

      <Route path="/Login">
        <div className="Container">
          <Logo/>
          <div className="BlueSlice">
            <h2 className="Quote">“Politics are usually the executive expression of human immaturity.”</h2>
            <h2 className="Writer">Vera Brittain</h2>
          </div>
            <Header/>

            <LoginForm/>
        </div>
     </Route>

     <Route path="/Register">
      <div className="reg-container">
        <Logo2 />
        <div className="BlueSlice2">
          <h2 className="Quote2">“Politics are usually the executive expression of human immaturity.”</h2>
          <h2 className="Writer2">Vera Brittain</h2>
        </div>
          <RegHeader/>

        <RegisterForm />
      </div>
     </Route>

     <Route path="/Dashboard">
        <Dashboard/>
     </Route>

    </Router>    
    
  );
}

export default App;
