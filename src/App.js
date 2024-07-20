import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Podcasts from "./components/Podcasts";
import Dashboard from "./components/Dashboard";
import Recommendations from "./components/Recommendations";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center py-6 my-2">useContext</h1>

      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/recommendation" element={<Recommendations />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
