

const LoginForm = () => {
    return (
        <div className="login">
           <label className="lemail">Email</label><br></br>
           <input type="text" name="Email" id="Email" className="eMail"></input>
           <br></br>
           <label className="lpass">Password</label><br></br>
           <input type="Password" name="Password" id="Password" className="pass"></input>
           <br></br>  
           <a href="https://near-buy.netlify.app/kethcup" className="forgotPass">Forgot Password</a>
            <input type="button" name="log" id="log" value="LOGIN" className="btn"></input>
        </div>
    )
}

export default LoginForm
