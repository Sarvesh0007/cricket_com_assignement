import "./App.css";
import LandingScreen from "./Pages/LandingScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
