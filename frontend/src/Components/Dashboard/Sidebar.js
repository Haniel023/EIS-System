import logo from "./Assets/EISLogo.png";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidelogo">
                <img src={logo} width="40" height="40"></img>
            </div>
            <button className="sidebarButton">
                Dashboard
            </button>
            <button className="sidebarButton">
                Support
            </button>
            <button className="sidebarButton">
                Developers
            </button>
            <button className="sidebarButton logoutButton">
                Logout
            </button>
        </div>
    );
  };
  
  export default Sidebar;