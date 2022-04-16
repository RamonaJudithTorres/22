import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portada from "./views/Portada";
import LoginView from "./views/LoginView";
import NavTop from "./components/NavTop";

export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavTop/>
        <Routes>
          <Route exact path="/login" element={<LoginView />} />
          <Route exact path="/" element={<Portada />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
