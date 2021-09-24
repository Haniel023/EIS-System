import { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../Actions/action.auth';
import { toast } from 'react-toastify';
import Logo from './Logo';
import Header from './Header';

const LoginForm = ({ login, check_authenticated }) => {
    const [emailData, setEmailData] = useState(``);
    const [passwordData, setPasswordData] = useState(``);
    const history = useHistory();

    const onChangeEmail = (e) => {
        setEmailData(e.target.value)
    }

    const onChangePassword = (e) => {
        setPasswordData(e.target.value)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        login(emailData, passwordData)
        if (localStorage.getItem('access')) {
            history.push("/Dashboard")
            toast.success('Login Success', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.warn(`Wrong Credentials ${emailData}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    if (check_authenticated) {
        return <Redirect to="/" />;
    }

    return (
        <div className="Container">
            <Header />
            <Logo />
            <div className="BlueSlice">
                <h2 className="Quote">“Politics are usually the executive expression of human immaturity.”</h2>
                <h2 className="Writer">Vera Brittain</h2>
            </div>
            <div className="login">
            <form onSubmit={(e) => onSubmit(e)}>
                <label className="lemail">Email</label><br></br>
                <input type="text" onChange={(e) => onChangeEmail(e)}
                    autoComplete="on" name="Email" id="Email" className="eMail"></input>

                <br></br>
                <label className="lpass">Password</label><br></br>
                <input type="Password" onChange={(e) => onChangePassword(e)}
                    autoComplete="on" name="Password" id="Password" className="pass"></input>

                <br></br>
                <h4 className="createAccount"><Link to="/Register">Create an Account</Link></h4>

                <input type="submit" name="log" id="log" value="LOGIN" className="btn"></input>
            </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (state) => {
    return {
        isAuthenticated: state.auth.check_authenticated,
    };
};

export default connect(mapDispatchToProps, { login })(LoginForm);
