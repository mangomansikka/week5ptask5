import About from "./components/About";
import Contact from "./components/contact";
import Layout from "./components/Layout";
import Services from "./components/Services";
import Tours from "./components/Tours";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Registration from "./components/Registration";
import "./app.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Added other routes if you want*/}
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} /> {/* Added this line for 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
