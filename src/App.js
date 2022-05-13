import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portada from "./views/Portada";
import LoginView from "./views/LoginView";
import NavTop from "./components/NavTop";
import AboutUsView from "./views/AboutUsView";
import Footer from './components/Footer';

export default function App() {
  return (
    <div>    
      <BrowserRouter>
      <NavTop/>
        <Routes>
          <Route exact path="/login" element={<LoginView />} />
          <Route exact path="/aboutus" element={<AboutUsView />} />
          <Route exact path="/" element={<Portada />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
