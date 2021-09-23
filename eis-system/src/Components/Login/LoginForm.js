import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../Actions/action.auth';

const LoginForm = ({ login }) => {
    const [emailData, setEmailData] = useState(``);
    const [passwordData, setPasswordData] = useState(``);

    const onChangeEmail = (e) => {
        setEmailData(e.target.value)
    }
    
    const onChangePassword = (e) => {
        setPasswordData(e.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        login(emailData, passwordData)
    }

    return (
        <div className="login">
            <form onSubmit={(e) => onSubmit(e)}>
                <label className="lemail">Email</label><br></br>
                <input type="text" onChange={(e) => onChangeEmail(e)}
                    autoComplete="on" name="Email" id="Email" className="eMail"></input>

                <br></br>
                <label className="lpass">Password</label><br></br>
                <input type="Password"  onChange={(e) => onChangePassword(e)}
                    autoComplete="on" name="Password" id="Password" className="pass"></input>

                <br></br>
                <h4 className="createAccount"><Link to="/Register">Create an Account</Link></h4>

                <input type="submit" name="log" id="log" value="LOGIN" className="btn"></input>
            </form>
        </div>
    )
}

export default connect(null, {login})(LoginForm);
