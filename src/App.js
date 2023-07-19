import { Routes, Route } from "react-router-dom";
import withLoader from "./components/Loader";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import GpsCaraSoul from "./pages/GpsCaraSoul";
import Sensore from './pages/Sensore'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/gps" element={<GpsCaraSoul />}></Route>
        <Route path="/Sensor" element={<Sensore />}></Route>
      </Routes>
    </>
  );
};

export default withLoader(App);
