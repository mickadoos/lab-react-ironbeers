import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BeersList from "./pages/BeersList";
import BeerDetails from "./pages/BeerDetails";
import NewBeer from "./pages/NewBeer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/random-beer" element={<BeerDetails />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </>
  );
}

export default App;
