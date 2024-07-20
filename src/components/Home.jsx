import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-3xl">Home</h1>
      <div className="flex flex-row gap-3 justify-center items-center">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/podcasts">Podcasts</Link>
      </div>
    </div>
  );
};

export default Home;
