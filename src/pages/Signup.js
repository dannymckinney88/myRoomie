import React, { useState } from "react";
import SignUp from "../firebaseAuth/SignUp";
import Background from "../assets/signup-bg.jpg";
import Nav1 from "../components/Nav1";

const Signup = () => {
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
    const { email } = setEmail;
    const { password } = setPassword;
    SignUp();
  };

  const heroImgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${Background})`,
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="h-screen flex flex-col bg-fixed bg-center bg-cover bg-no-repeat"
      style={heroImgStyle}
    >
      <Nav1 />
      <div className="w-full mx-auto pt-24">
        <div className="text-3xl font-bold text-white mt-2 text-center">
          Signup
        </div>
        <div className="max-w-md mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form action="" className="space-y-6">
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
              <button className="w-full py-2 px4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-small ">
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
