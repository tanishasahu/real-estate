import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

import Index from './components/Pages/Index';
import Properties from './components/Pages/Properties';
import PropertieDetails from './components/Pages/PropertieDetails';
import Agents from './components/Pages/Agents';
import Agencies from './components/Pages/Agencies';
import Gallery from './components/Pages/Gallery';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/propertie" element={<Properties />} />

        <Route
          path="/propertie/property/:id"
          element={<PropertieDetails />}
        />

        <Route path="/agents" element={<Agents />} />

        <Route path="/agencies" element={<Agencies />} />
        
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;