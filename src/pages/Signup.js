import React, { useState } from "react"
import Nav1 from "../components/nav/Nav1"
import { useAuth } from "../contexts/AuthContext"
import Alert from "../components/Alert.js"
import Background from "../assets/signup-bg.jpg"
import { db } from "../firebase"

const Signup = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [error, setError] = useState("")
  const { signup } = useAuth()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (password !== passwordConfirm) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      // setLoading(true)
      await signup(email, password)
      props.history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    // setLoading(false);
  }

  const heroImgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${Background})`,
  }

  return (
    <div
      className="h-screen bg-gray-200 flex flex-col  bg-fixed bg-center bg-cover bg-no-repeat"
      style={heroImgStyle}
    >
      <Nav1 />
      <div className="w-full mx-auto mt-24">
        <div className="max-w-md mx-auto mt-4 bg-white p-8 border border-gray-300">
          {error && <Alert error={error} />}
          <div className="text-3xl font-bold text-black mb-8 text-center">
            <h1>Join myRoomie</h1>
            <h2>Signup</h2>
          </div>
          <form onSubmit={handleSubmit} action="" className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="text-small font-bold text-gray-600 block"
              >
                Username
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
              <label
                htmlFor=""
                className="text-small font-bold text-gray-600 block"
              >
                Re-Enter Password
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded mt-1"
                onChange={handlePasswordConfirm}
                type="password"
                id="password"
                name="password"
                value={passwordConfirm}
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
    </div>
  )
}

export default Signup
