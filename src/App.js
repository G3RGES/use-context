import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Podcasts from "./components/Podcasts";
import Dashboard from "./components/Dashboard";
import Recommendations from "./components/Recommendations";
import { UserContext } from "./context/UserContext";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Gerges");

  return (
    <>
      <h1 className="text-3xl text-center py-6 my-2">useContext</h1>

      <Router>
        <UserContext.Provider value="Gerges">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
