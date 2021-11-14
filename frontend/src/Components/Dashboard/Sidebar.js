import logo from "./Assets/EISLogo.png";
import icoDashboard from "./Assets/icoDashboard.png";
import icoSupport from "./Assets/icoSupport.png";
import icoDevelopers from "./Assets/icoDevelopers.png";
import icoLogout from "./Assets/icoLogout.png";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
    const History = useHistory();
    
    return (
        <div className="sidebar">
            <div>
                <img src={logo} className="sideLogo"></img>
            </div>
            <button className="sidebarButton" onClick={() => { History.push("/Dashboard") }}>
                <img src={icoDashboard} className="buttonLogo"></img>
                Dashboard
            </button>
            <button className="sidebarButton" onClick={() => { History.push("/Support") }}>
                <img src={icoSupport} className="buttonLogo"></img>
                Support
            </button>
            <button className="sidebarButton" onClick={() => { History.push("/DevPage") }}>
            <img src={icoDevelopers} className="buttonLogo"></img>
                Developers
            </button>
            {/* <button className="sidebarButton logoutButton">
            <img src={icoLogout} className="buttonLogo"></img>
                Logout
            </button> */}
        </div>
    );
  };
  
  export default Sidebar;