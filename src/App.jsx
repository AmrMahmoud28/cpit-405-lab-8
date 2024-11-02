import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Header from "./components/header/Header";
import "./app.css"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/cpit-405-lab-8/" element={<Home />} />
        <Route path="/cpit-405-lab-8/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
