import './App.css'
import Business from './components/Business'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Incubatees from './components/Incubatees'
import Together from './components/Together'
import WorkingOn from './components/WorkingOn'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Business/>
      <Incubatees/>
      <Clients/>
      <Together/>
      <WorkingOn/>
      <Footer/>
    </>
  )
}

export default App
