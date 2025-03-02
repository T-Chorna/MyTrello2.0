import { Routes, Route } from "react-router-dom";
import { Board } from "./pages/Board/Board";

function App() {
  return (
    <Routes>
      <Route path="/board" element={<Board />} />
    </Routes>
  );
}

export default App;

