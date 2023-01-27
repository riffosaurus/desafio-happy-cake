import { BrowserRouter, Routes, Route } from "react-router-dom";
//import de react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Contacto from "./views/Contacto";



function App() {
  return (
    <div className="App">
      {/* BroswerRouter debe englobar a toda la app */}
      
      <BrowserRouter>
      <Navigation />
        {/* Routes engloba a todas las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
