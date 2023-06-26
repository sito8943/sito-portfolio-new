// sections
import Hero from "./views/Hero/Hero";
import IMake from "./views/IMake/IMake";

// components
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
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
