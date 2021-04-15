import { useState } from "react"
import img from "../assets/team-at-work.png"
import Nav1 from "../components/nav/Nav1"
import Background from "../assets/home.jpg"
import { Redirect } from "react-router"

const Home = () => {
  const [email, setEmail] = useState("")
  const [redirect, setRedirect] = useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  // }

  const heroImgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${Background})`,
  }

  return (
    <>
      {redirect && <Redirect to={`/signup/${email}`} />}
      <div className="font-serif bg-green-300 h-screen	">
        <Nav1 />
        <div className="container mx-auto ">
          <div className=" mt-60 flex flex-wrap  lg:-mx-4">
            <div className="break-words w-1/2 overflow-hidden lg:my-4 lg:px-4">
              <h1 className="text-5xl font-bold">myRoomie,</h1>
              <h2 className="text-4xl font-bold">
                Connecting roomates, making life easier and convenient.
              </h2>
              <p className="font-medium mt-6">
                Invite roomates, signficant others, or anyone living together,
                and make living together a breeze. From spliting bills to
                dividing chores and place to track all of it conveniently.
              </p>
              <form action="" className="row my-5">
                <div className="flex justify-center">
                  <input
                    type="email"
                    className="h-10 w-96 mr-9"
                    onChange={handleEmail}
                    value={email}
                  />
                  <button
                    type="submit"
                    onClick={() => {
                      setRedirect(true)
                    }}
                    className="bg-gray-50"
                  >
                    Sign up for free
                  </button>
                </div>
                <div classNameName="col-md-5 pl-md-2"></div>
              </form>
            </div>
            <div className="w-1/2  ">
              <img
                src={img}
                alt="Team at work paper img"
                className=""
                style={{ height: "60%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
