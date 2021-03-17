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
      <div class="container mx-auto">
        <div className="row">
          <div class="grid grid-cols-2  mt-40">
            <div class="break-words">
              <h1 class="text-4xl font-bold">
                myRoomie helping conect shared lilving, easier and covenient.
              </h1>
              <p class="font-medium mt-6">
                Invite roomates, signficant others, or anyone living together,
                and make living together a breeze. From spliting bills to
                dividing chores and place to track all of it conveniently.
              </p>
              <form action="" class="row my-5">
                <div class="d-none d-md-block col-md-7">
                  <input type="email" class="form-control h-100" />
                </div>
              </form>
            </div>
            <div>
              <img
                src={img}
                alt=""
                class="max-w-3xl "
                style={{ height: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
