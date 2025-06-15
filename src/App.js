import react from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import Help from "./Help"
import BriyaniCard from "./products/bryaniImg/bryaniCard";
import RollCard from "./products/rollpage/rollcard";
import MomoCard from "./products/momospage/momocard";
import Dimsumcard from "./products/dimsum/dimsumcard";
import BurgerCard from "./products/burgerpage/burgercard";
import PizzaCard from "./products/pizzapage/pizzacard";
import BakreyCard from "./products/bakreypage/bakreycard";
import Cart from "./products/cartPage/cart";



function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/rollPage" element={<RollCard/>}/>
          <Route path="/briyanipage" element={<BriyaniCard/>}/>
          <Route path="/momopage" element={<MomoCard/>}/>
          <Route path="/dimsumpage" element={<Dimsumcard/>}/>
          <Route path="/burgerpage" element={<BurgerCard/>}/>
          <Route path="/pizzapage" element={<PizzaCard/>}/>
          <Route path="/bakreypage" element={<BakreyCard/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
            
    </div>
  );
}

export default App;
