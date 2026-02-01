import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar';
import Hero from './components/Home';
import FacultyServices from './components/FacultyServices';
import Services from './components/Services';
import About from './components/About';
import ExecutiveCommittee from './components/ExecutiveCommittee';
import Certifications from './components/Certifications';
import Stats from './components/Stats';
import Process from './components/Process';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllServices from "./components/AllServices";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FacultyServices />
              <Services />
              <About />
              <ExecutiveCommittee />
              <Certifications />
              <Stats />
              <Process />
              <CTA />
              <Contact />
              <Analytics />
            </>
          }
        />

        <Route path="/all-services" element={<AllServices />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
