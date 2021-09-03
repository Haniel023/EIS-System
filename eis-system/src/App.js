import Header from "./Components/Header";
import Logo from "./Components/Logo";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    
    <div className="Container">
      <Logo/>
      <div className="BlueSlice">
        <h2 className="Quote">“Politics are usually the executive expression of human immaturity.”</h2>
        <h2 className="Writer">Vera Brittain</h2>
      </div>
     <Header/>
     <LoginForm/>
    </div>
  );
}

export default App;
