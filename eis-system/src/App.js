import Header from "./Components/Header";
import RegHeader from "./Components/RegHeader";
import Logo from "./Components/Logo";
import Logo2 from "./Components/Logo2";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
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

    </Router>    
    
  );
}

export default App;
