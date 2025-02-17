import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <div className="flex flex-col items-center justify-center my-3">
        <h1 className="text-center text-3xl my-2">
          Welcome Home,
          <b className="text-blue-900">{user}</b>
        </h1>
        <button
          className="bg-blue-600 py-2 px-3 rounded-lg text-white mx-auto"
          onClick={() => setUser("Georges")}
          type="button"
        >
          Edit Name
        </button>
      </div>
      <div className="flex flex-row gap-3 justify-center items-center font-bold text-blue-500">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/podcasts">Podcasts</Link>
      </div>
    </div>
  );
};

export default Home;
