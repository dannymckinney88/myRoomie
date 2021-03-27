import React from "react";
import TabsContainer from "../components/TabsContainer";
import { Link } from "react-router-dom";

const Room = () => {
  return (
    <div>
      <Link className="px-3" to="/profile">
        Home{" "}
      </Link>
      <TabsContainer />
    </div>
  );
};

export default Room;
