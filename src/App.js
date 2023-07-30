import { Routes, Route } from "react-router-dom";
import withLoader from "./components/Loader";
import Customers from "./components/Customers";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import GpsCaraSoul from "./pages/GpsCaraSoul";
import Sensore from "./pages/Sensore";
import Cameras from "./pages/Cameras";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/gps" element={<GpsCaraSoul />}></Route>
        <Route path="/Sensor" element={<Sensore />}></Route>
        <Route path="/Cus" element={<Customers />}></Route>
        <Route path="/Cameras" element={<Cameras />}></Route>
      </Routes>
    </>
  );
};

export default withLoader(App);
