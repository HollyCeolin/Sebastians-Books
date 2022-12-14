import React, { useState } from "react";
import "./Registration.css";
import { database } from "../Registration/firebase";
import {ref, push, child, update} from 'firebase/database'
import { Link } from "react-router-dom";

const Registration = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const {id, value} = e.target
    if(id === "firstName"){
        setFirstName(value)
    }
    if(id === "lastName"){
        setLastName(value)
    }
    if(id === "email"){
        setEmail(value)
    }
    if(id === "password"){
        setPassword(value)
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value)
    }
  }

  const handleSubmit = () => {
    let obj = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password,
        confirmPassword : confirmPassword,
    }
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {}
    updates['/' + newPostKey] = obj
    return( update(ref(database), updates)
    )
  }

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form-label" for="firstName">
            First Name
          </label>
          <input
            type="text"
            className="form-input"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
          <div className="lastname">
            <label className="form-label" for="lastName">
              Last Name
            </label>
            <input
              type="text"
              className="form-input"
              id="lastName"
              value={lastName}
              onChange={(e) => handleInputChange(e)}
              placeholder="Last Name"
            />
          </div>
          <div className="email">
            <label className="form-label" for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
              className="form-input"
              placeholder="Email"
            />
          </div>
          <div className="password">
            <label className="form-label" for="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              value={password}
              onChange = {(e) => handleInputChange(e)}
              placeholder="Password"
            />
          </div>
          <div className="confirm-password">
            <label className="form-label" for="confirmpassword">
              Confirm Password
            </label>
            <input
              className="form-input"
              type="password"
              id="confirmpassword"
              value={confirmPassword}
              onChange = {(e) => handleInputChange(e)}
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="footer">
            <Link to="/home">
          <button onClick={() => handleSubmit()} type="submit" className="btn">
            Register
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
