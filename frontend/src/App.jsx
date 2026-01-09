import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Loader from './components/Loader'

// Lazy load route components
const Home = lazy(() => import('./components/Home'))
const Services = lazy(() => import('./components/Services'))
const ContactUs = lazy(() => import('./components/ContactUs'))
const Masterclass = lazy(() => import('./components/Masterclass'))
const Footer = lazy(() => import('./components/Footer'))

function AppContent() {
  const location = useLocation();
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/master-class" element={<Masterclass />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      {location.pathname === '/' && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <AppContent />
      </Suspense>
    </Router>
  )
}

export default App
