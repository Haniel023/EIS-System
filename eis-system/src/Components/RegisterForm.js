import React from 'react'

const RegisterForm = () => {
    return (
            <div className="register">
               <label className="first-Name">First Name</label><br></br>
                    <input type="text" name="firstName"  id="fName" className="firstName"></input>
    
               <br></br>
               <label className="last-Name">Last Name</label><br></br>
                    <input type="text" name="lastName"  id="lName" className="lastName"></input>
    
               <br></br>  
               <label className="l-email">Email</label><br></br>
                    <input type="text" name="Email"  id="e-mail" className="e-Mail"></input>
    
               <br></br>
               <label className="l-pass">Password</label><br></br>
                    <input type="Password" name="Password"  id="passWd" className="passW"></input>
    
               <br></br>  
                <input type="submit" name="register" id="signUp" value="Sign Up" className="btn-reg"></input>
            </div>
    )
}

export default RegisterForm