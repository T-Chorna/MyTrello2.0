import { Routes, Route } from "react-router-dom";
import  Board from "./pages/Board/Board";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board/:board_id" element={<Board />} />
    </Routes>
  );
}

export default App;

