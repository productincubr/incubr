import { lazy, Suspense } from 'react'
import Hero from './Hero'

// Lazy load below-the-fold components for faster initial load
const Business = lazy(() => import('./Business'))
const Incubatees = lazy(() => import('./Incubatees'))
const Clients = lazy(() => import('./Clients'))
const Together = lazy(() => import('./Together'))
const WorkingOn = lazy(() => import('./WorkingOn'))

const Home = () => {
  return (
    <>
      <Hero/>
      <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
        <Business/>
        <Incubatees/>
        <Clients/>
        <Together/>
        <WorkingOn/>
      </Suspense>
    </>
  )
}

export default Home
