import logo from "./Assets/EISLogo.png";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidelogo">
                <img src={logo} width="40" height="40"></img>
            </div>
            <h2 className="sidebarButton">
                Dashboard
            </h2>
            <h2 className="sidebarButton">
                Support
            </h2>
            <h2 className="sidebarButton">
                Developers
            </h2>
            <h2 className="sidebarButton">
                Logout
            </h2>
        </div>
    );
  };
  
  export default Sidebar;