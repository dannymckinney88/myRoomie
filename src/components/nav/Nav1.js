import { ReactComponent as Logo } from "../../assets/myRoomie-logo/vector/default-monochrome.svg"
import { Link } from "react-router-dom"

const Nav1 = () => {
  return (
    <nav class="group  hover:bg-white hover:shadow-lg hover:border-transparent ...">
      <Link className=" float-right px-3" to="/signup">
        Sign up{" "}
      </Link>
      <Link className=" float-right px-3" to="/login">
        Login{" "}
      </Link>
      <Logo className="w-20 ml-3" />
    </nav>
  )
}

export default Nav1
