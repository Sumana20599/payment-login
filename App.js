//import logo from './logo.svg';
import React, { useState } from "react";
import Axios from 'axios';
//import ReactDOM from "react-dom";
import './App.css';

function App() {
  const url='https://localhost:8080/customer'
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const submitLogin=()=>{
        Axios.post(url,{
            username:username,
            password:password
        }).then(result=>{
            alert("success")
        })
    }
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // User Login info
  // const database = [
  //   {
  //     username: "ANUPAMA N",
  //     password: "pass"
  //   },
  //   {
  //     username: "ANANTHAMURTHY SHAMASUNDARA ",
  //     password: "pass"
  //   },
  //   {
  //     username: "AJAY SHAMU KUMAR",
  //     password: "pass"
  //   },
  //   {
  //     username: "AREEFIKBAL T F",
  //     password: "pass"
  //   },
  //   {
  //     username: "ASHAJYOTHI M",
  //     password: "pass"
  //   },
  //   {
  //     username: "ASADI LINGAREDDY",
  //     password: "pass"
  //   },
  //   {
  //     username: "ANAND L S",
  //     password: "pass"
  //   },
  //   {
  //     username: "ANIL KUMAR",
  //     password: "pass"
  //   },
  //   {
  //     username: "ABRAHAM VARGHESE",
  //     password: "pass"
  //   },
  //   {
  //     username: "ABHISHEK BIYANI",
  //     password: "pass"
  //   },
  //   {
  //     username: "ANITHA B ASHWATH",
  //     password: "pass"
  //   },
  //   {
  //     username: "A S VIJAY KUMAR",
  //     password: "pass"
  //   },
  //   {
  //     username: "ASHOKA AR",
  //     password: "pass"
  //   },
  //   {
  //     username: "B A SANTOSH",
  //     password: "pass"
  //   },
  //   {
  //     username: "ARJUN PARAMESWARA",
  //     password: "pass"
  //   },
  //   {
  //     username: "B JAYARAM",
  //     password: "pass"
  //   },
  //   {
  //     username: "ANJAN KUMAR G",
  //     password: "pass"
  //   },
  //   {
  //     username: "ANU",
  //     password: "pass"
  //   },
  //   {
  //     username: "NKITA BANERJEE",
  //     password: "pass"
  //   },
  //   {
  //     username: "ANIL KUMAR NAGARAJ",
  //     password: "pass"
  //   },
  //   {
  //     username: "A M MAYANNA",
  //     password: "pass"
  //   },
  //   {
  //     username: "ASHOK H R",
  //     password: "pass"
  //   },
  //   {
  //     username: "B PRAKASH BABU",
  //     password: "pass"
  //   },
  //   {
  //     username: "ANANTHAKUMAR",
  //     password: "pass"
  //   },
  //   {
  //     username: "ANIL V GORUR",
  //     password: "pass"
  //   },
  //   {
  //     username: "A RAJESH KUMAR",
  //     password: "pass"
  //   },
  //   {
  //     username: "AYISHA KAUSAR",
  //     password: "pass"
  //   },
   
  //   {
  //     username: "ANITA B MEHTA",
  //     password: "pass"
  //   },
  //   {
  //     username: "ANNUKA NIRVAN",
  //     password: "pass"
  //   },
  //   {
  //     username: "ASHISH MISHRA",
  //     password: "pass"
  //   },
  //   {
  //     username: "A KRISHNA MOHAN",
  //     password: "pass"
  //   },
  //   {
  //     username: "ABY GEORGE",
  //     password: "pass"
  //   },
  //   {
  //     username: "ANIL GUPTA",
  //     password: "pass"
  //   },
  //   {
  //     username: "ABHITHA",
  //     password: "pass"
  //   },
  //   {
  //     username: "ARPITHA M S",
  //     password: "pass"
  //   },
  //   {
  //     username: "AVISHEK MUKHERJEE",
  //     password: "pass"
  //   },
    

  // ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" value={username} onChange={handleUsername} name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          {/* <input type="password" name="pass" required /> */}
          <input type="password" value={password} onChange={handlePassword} name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          {/* <input type="submit" /> */}
          <input type="submit" value={submitLogin} onChange={handleSubmit} name="usubmit" required />
        </div>
      </form>
    </div>
  );
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
export default App;

