import { ReactComponent as Logo } from "../../assets/myRoomie-logo/vector/default-monochrome.svg"
import { Link } from "react-router-dom"

const Nav1 = () => {
  return (
    <nav class="group  bg-white hover:shadow-lg hover:border-transparent h-12 relative">
      <div className="h-10 flex flex-wrap justify-end items-center content-center">
        <div>
          <Link className=" px-3" to="/signup">
            {" "}
            Sign up{" "}
          </Link>
        </div>

        <div>
          <Link className="  px-3" to="/login">
            Login{" "}
          </Link>
        </div>
      </div>
      {/* <Link className=" float-right px-3" to="/signup">
        Sign up{" "}
      </Link>
      <Link className=" float-right px-3" to="/login">
        Login{" "}
      </Link> */}
      <Logo className="w-24 ml-3 absolute bottom-3 left-10" />
    </nav>
  )
}

export default Nav1
