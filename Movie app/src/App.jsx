import MovieCard from "./components/MovieCard";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Favorite from "./pages/favorites";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
