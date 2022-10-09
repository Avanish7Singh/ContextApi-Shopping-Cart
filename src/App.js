import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/cart' element={  <Cart />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
