import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Podcasts = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1 className="text-center text-2xl">
        Your Podcasts <b>{user}</b>
      </h1>
    </div>
  );
};

export default Podcasts;
