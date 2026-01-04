import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import Masterclass from './components/Masterclass'
import Footer from './components/Footer'

function AppContent() {
  const location = useLocation();
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/masterclass" element={<Masterclass />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      {location.pathname === '/' && <Footer/>}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
