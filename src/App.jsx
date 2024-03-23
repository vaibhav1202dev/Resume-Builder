import "./App.css";
import HomePage from "./Pages/HomePage";
import Preview from "./components/Preview";
import { Route, Routes } from "react-router-dom";
import ResumePage from "./Pages/ResumePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/preview" element={Preview} />
      </Routes>
    </>
  );
}

export default App;
