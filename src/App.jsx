import { BrowserRouter, Routes, Route } from "react-router-dom";

// sections
import Hero from "./views/Hero/Hero";
import IMake from "./views/IMake/IMake";

// components
import ToTop from "./components/ToTop/ToTop";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <main>
      <ToTop />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <IMake />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
