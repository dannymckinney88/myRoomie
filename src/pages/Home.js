<<<<<<< HEAD
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
        <div class=" mt-40  grid grid-cols-2 sm:grid-cols-1 gap-10">
          <div class="break-words ">
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
          </div>
          <div class="w-1/2  ">
            <img
              src={img}
              alt="Team at work paper img"
              class="object-fill max-w-4xl"
              // style={{ height: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
=======
import React from 'react'

const Home = () => {
  return (
    <div className="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
      <p className="text-black-600 group-hover:text-gray-900 ...">Home</p>
      <p className="text-green-500 group-hover:text-gray-500 ...">Welcome Roomie!</p>
    </div>
  )
>>>>>>> main
};

export default Home;
