
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Cart.js';
import Home from './Home';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <BrowserRouter>
      <Navbar/>
    <Routes>

    <Route path="/"  exact element={<Home/>} />
    <Route path="/cart"  exact element={<Cart/>} />
    
 

    </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
