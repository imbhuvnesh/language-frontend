import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Payment from "./pages/Payment";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<AboutUs />}></Route>
        <Route exact path="/courses" element={<Courses />}></Route>
        <Route exact path="/pay" element={<Payment />}></Route>
        <Route exact path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
