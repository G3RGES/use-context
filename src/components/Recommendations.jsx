import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Recommendations = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1 className="text-center text-2xl">
        Your Recommendations, <b>{user}</b>
      </h1>
    </div>
  );
};

export default Recommendations;
