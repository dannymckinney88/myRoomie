import React, { useState } from "react"
import Nav1 from "../components/nav/Nav1"
import { useAuth } from "../contexts/AuthContext"
import Alert from "../components/Alert.js"
import Background from "../assets/signup-bg.jpg"
import { useFirestore } from "../contexts/FirestoreContext"

// import { db } from "../firebase"

const Signup = (props) => {
  const [email, setEmail] = useState(props.match.params.email)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [error, setError] = useState("")
  const { signup, currentUser } = useAuth()
  const { addUser } = useFirestore()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleUserName = (e) => {
    setUserName(e.target.value)
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
      console.log(email, password)

      await signup(email, password).then((cred) => {
        return addUser(userName, email, cred.user.uid).then(() => {
          props.history.push("/profile")
        })
      })
      console.log(currentUser.uid)
    } catch {
      setError("Failed to create an account")
    }
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
                onChange={handleUserName}
                type="text"
                name="userName"
                value={userName}
                required
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
                name="email"
                value={email}
                required
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
                name="password"
                value={password}
                required
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
                name="password"
                value={passwordConfirm}
                required
              />
            </div>
            <div>
              <button
                type="submit"
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
