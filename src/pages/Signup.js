import React, { useState } from "react";
import * as FirestoreService from "../firebase";
import Background from "../assets/signup-bg.jpg";
import Nav1 from "../components/Nav1";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    FirestoreService.SignUp(email, password)
    props.history.push('/profile') // needs to be redirected to profile page
  };

  const heroImgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${Background})`,
  };

  return (
    <div
<<<<<<< HEAD
      onSubmit={handleSubmit}
      className="h-screen flex flex-col bg-fixed bg-center bg-cover bg-no-repeat"
=======
      className="h-screen bg-gray-200 flex flex-col justify-center bg-fixed bg-center bg-cover bg-no-repeat"
>>>>>>> main
      style={heroImgStyle}
    >
      <Nav1 />
      <div className="w-full mx-auto pt-24">
        <div className="text-3xl font-bold text-white mt-2 text-center">
          Signup
        </div>
        <div className="max-w-md mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form onSubmit={handleSubmit} action="" className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="text-small font-bold text-gray-600 block"
              >
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded mt-1"
                onChange={handleEmail}
                type="email"
                id="email"
                name="email"
                value={email}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="text-small font-bold text-gray-600 block"
              >
                Password
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded mt-1"
                onChange={handlePassword}
                type="password"
                id="password"
                name="password"
                value={password}
              />
            </div>
            <div>
              <button type="button" onClick={handleSubmit} className="w-full py-2 px4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-small ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
