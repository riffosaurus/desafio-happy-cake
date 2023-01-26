import {BroswerRouter, BrowserRouter} from "react-router-dom";
//import de react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navigation />

      </BrowserRouter>
    </div>
  );
}

export default App;
