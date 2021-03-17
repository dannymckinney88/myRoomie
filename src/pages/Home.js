import { ReactComponent as Logo } from "../assets/myRoomie-logo/vector/default-monochrome.svg";
import img from "../assets/team-at-work.png";
const Home = () => {
  return (
    <div>
      <nav class="group  my-5 border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
        <p class="text-black-600 group-hover:text-gray-900 float-right px-3">
          Log In
        </p>
        <p class="text-black-600 group-hover:text-gray-900 float-right px-3">
          sign up
        </p>
        <img src="/src/assets/process-outline.png" alt="" />
        <Logo class="w-20 ml-3" />
      </nav>
      <div class="container mx-auto">
        <div class="grid grid-cols-2 h-screen mt-80">
          <div class="">
            <h1>myRoomie helping conect shared lilving easier and covenient</h1>
          </div>
          <div class="">
            <img src={img} alt="" class="max-w-3xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
