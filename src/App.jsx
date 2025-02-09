import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Home } from "./Pages/Home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
