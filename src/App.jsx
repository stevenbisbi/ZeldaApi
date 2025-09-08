import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./Pages/Home";
import { Creatures } from "./Pages/Creatures";
import { Equipment } from "./Pages/Equipment";
import { Materials } from "./Pages/Materials";
import { Monsters } from "./Pages/Monsters";
import { Treasure } from "./Pages/Treasure";
import { Footer } from "./components/Footer";
import { SearchProvider } from "./context/SearchContext";

export function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <div className="mt-5 px-4">
          <Navigation />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creatures" element={<Creatures />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/monsters" element={<Monsters />} />
          <Route path="/treasure" element={<Treasure />} />
        </Routes>
        <Footer />
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
