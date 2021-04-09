import img from "../assets/team-at-work.png"
import Nav1 from "../components/nav/Nav1"
import Background from "../assets/home.jpg"

const Home = () => {
  const heroImgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${Background})`,
  }

  return (
    <div class="font-serif bg-green-300 h-screen	">
      <Nav1 />
      <div class="container mx-auto ">
        <div class=" mt-60 flex flex-wrap  lg:-mx-4">
          <digit v class="break-words w-1/2 overflow-hidden lg:my-4 lg:px-4">
            <h1 class="text-4xl font-bold">
              myRoomie helping conect shared lilving, easier and covenient.
            </h1>
            <p class="font-medium mt-6">
              Invite roomates, signficant others, or anyone living together, and
              make living together a breeze. From spliting bills to dividing
              chores and place to track all of it conveniently.
            </p>
            <form action="" class="row my-5">
              <div class="flex justify-center">
                <input type="email" class="h-10 w-96 mr-9" />
                <button type="submit" class="bg-gray-50">
                  Sign up for free
                </button>
              </div>
              <div className="col-md-5 pl-md-2"></div>
            </form>
          </digit>
          <div class="w-1/2  lg:my-4 lg:px-2">
            <img
              src={img}
              alt="Team at work paper img"
              class=""
              style={{ height: "60%" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
