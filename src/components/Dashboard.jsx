import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1 className="text-center text-2xl">
        Hello, <b>{user}</b>
      </h1>
      <h2 className="text-center text-xl">Your Dashboard</h2>
    </div>
  );
};

export default Dashboard;
