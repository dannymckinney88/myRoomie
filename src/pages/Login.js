import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Background from "../assets/signup-bg.jpg";
import Nav1 from "../components/Nav1";
import * as FirestoreService from "../firebase";
import Alert from "../components/Alert";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await login(email, password);
      props.history.push("/profile");
    } catch {
      setError("Failed to log in");
    }
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   FirestoreService.SignInUser(email, password);
  //   props.history.push("/profile");
  // };

  const heroImgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${Background})`,
  };
  return (
    <>
      <Nav1 />
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium text-xl hover:text-green-700">
          Welcome Roomie
        </div>
        <div className="text-3xl font-bold text-gray-500 mt-2 text-center">
          Login
        </div>
        <div className="max-w-md mx-auto mt-4 bg-white p-8 border border-gray-300">
          {error && <Alert error={error} />}
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
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-2 px4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-small "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
