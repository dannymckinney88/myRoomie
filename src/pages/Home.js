import { ReactComponent as Logo } from "../assets/myRoomie-logo/vector/default-monochrome.svg";
import img from "../assets/team-at-work.png";
const Home = () => {
  return (
    <div class="font-serif bg-green-100 h-screen	">
      <nav class="group  hover:bg-white hover:shadow-lg hover:border-transparent ...">
        <p class="text-black-600 group-hover:text-gray-900 float-right px-3">
          Log In
        </p>
        <p class="float-right px-3">sign up</p>
        <Logo class="w-20 ml-3" />
      </nav>
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
  );
};

export default Home;
