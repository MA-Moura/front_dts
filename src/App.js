import "./App.css";
import HomePage from "./Home";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ValidPage from "./Valid";
import NotvalidPage from "./notValid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<HomePage />} />
        <Route path="/notvalid" element={<NotvalidPage />} />
        <Route path="/valid" element={<ValidPage />} />
      </Routes>
    </Router>
  );
}
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
};

export default App;
