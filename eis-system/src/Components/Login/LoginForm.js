import { Link } from "react-router-dom";


const LoginForm = () => {
    return (
        <div className="login">
           <label className="lemail">Email</label><br></br>
           <input type="text" name="Email" id="Email" className="eMail"></input>

           <br></br>
           <label className="lpass">Password</label><br></br>
           <input type="Password" name="Password" id="Password" className="pass"></input>

           <br></br>  
           <h4 className="createAccount"><Link to="/Register">Create an Account</Link></h4>

            <input type="button" name="log" id="log" value="LOGIN" className="btn"></input>
        </div>
    )
}

export default LoginForm
