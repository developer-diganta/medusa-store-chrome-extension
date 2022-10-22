import logo from './logo.svg';
import './App.css';
import Medusa from "@medusajs/medusa-js"
import SignIn from './components/SignIn/SignIn';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import Order from './components/Orders/Order';

function App() {
  
  const medusa = new Medusa({ baseUrl: "http://localhost:9000", maxRetries: 3 })
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index.html" element={<SignIn medusa={medusa} />} />
        <Route path="/home" element={<Home medusa={medusa} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
