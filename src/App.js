import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
function App() {
  return (
    <div className="App">
       <h1 style={{color:"teal"}}>Food Recipe</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
