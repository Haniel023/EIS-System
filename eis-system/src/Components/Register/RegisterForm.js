import { useState } from "react";
import { connect } from 'react-redux';
import { register } from '../../Actions/action.auth';
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Logo2 from './Logo2';
import RegHeader from './RegHeader';

const RegisterForm = ({ register }) => {
     const [firstNameData, setFirstNameData] = useState(``);
     const [lastNameData, setLastNameData] = useState(``);
     const [emailData, setEmailData] = useState(``);
     const [passwordData, setPasswordData] = useState(``);
     const history = useHistory();

     const onChangeFirstName = (e) => {
          setFirstNameData(e.target.value)
     }

     const onChangeLastName = (e) => {
          setLastNameData(e.target.value)
     }

     const onChangeEmail = (e) => {
          setEmailData(e.target.value)
     }

     const onChangePassword = (e) => {
          setPasswordData(e.target.value)
     }

     const onSubmit = (e) => {
          e.preventDefault();
          register(firstNameData, lastNameData, emailData, passwordData)
          history.push("/Login")
          toast.success('Registration Success', {
               position: "top-right",
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
          });

     }

     return (
          <div className="reg-container">
               <Logo2 />
               <div className="BlueSlice2">
                    <h2 className="Quote2">“Politics are usually the executive expression of human immaturity.”</h2>
                    <h2 className="Writer2">Vera Brittain</h2>
               </div>
               <RegHeader />
               <div className="register">
                    <form onSubmit={(e) => onSubmit(e)}>
                         <label className="first-Name">First Name</label><br></br>
                         <input type="text" onChange={(e) => onChangeFirstName(e)} name="firstName" id="fName" className="firstName"></input>

                         <br></br>
                         <label className="last-Name">Last Name</label><br></br>
                         <input type="text" onChange={(e) => onChangeLastName(e)} name="lastName" id="lName" className="lastName"></input>

                         <br></br>
                         <label className="l-email">Email</label><br></br>
                         <input type="text" onChange={(e) => onChangeEmail(e)} name="Email" id="e-mail" className="e-Mail"></input>

                         <br></br>
                         <label className="l-pass">Password</label><br></br>
                         <input type="Password" onChange={(e) => onChangePassword(e)} name="Password" id="passWd" className="passW"></input>

                         <br></br>
                         <h4 className="AlreadyAccount"><Link to="/Login">Already have an account?</Link></h4>
                         <input type="submit" name="register" id="signUp" value="Sign Up" className="btn-reg"></input>
                    </form>
               </div>
          </div>
     )
}

export default connect(null, { register })(RegisterForm);