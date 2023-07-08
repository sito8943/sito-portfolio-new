import { BrowserRouter, Routes, Route } from "react-router-dom";

// sections
import Hero from "./views/Hero/Hero";
import IMake from "./views/IMake/IMake";
import AboutUs from "./views/AboutUs/AboutUs";
import Skills from "./views/Skills/Skills";
import Projects from "./views/Projects/Projects";
import ContactUs from "./views/ContactUs/ContactUs";

// components
import ToTop from "./components/ToTop/ToTop";
import Navbar from "./components/Navbar/Navbar";

// contexts
import { ActiveProvider } from "./views/Projects/ActiveProvider";

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
                <AboutUs />
                <Skills />
                <ActiveProvider>
                  <Projects />
                </ActiveProvider>
                <ContactUs />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
