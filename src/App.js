import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BeersList from "./pages/BeersList";
import BeerDetails from "./pages/BeerDetails";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<BeersList/>}/>
        <Route path="/random-beer" element={<BeerDetails/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
      </Routes>
    </>
  );
}

export default App;
