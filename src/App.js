import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Event from "./components/Event";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Form />} />
        <Route exact path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
