import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
          <Sidebar />
          <Footer />
      </Router>
    </div>
  );
}

export default App;
