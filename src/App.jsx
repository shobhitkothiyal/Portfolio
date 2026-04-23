import { useState, useEffect } from 'react'
import FluidCursor from './components/CanvasCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Slight delay so entrance animations are visible
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <FluidCursor />

      {/* Background blobs */}
      <div className="hero-shapes" style={{ position: 'fixed', zIndex: -1 }}>
        <div
          className="hero-shape"
          style={{
            width: '500px', height: '500px',
            background: 'rgba(139, 92, 246, 0.12)',
            top: '-10%', left: '-5%',
            animationDelay: '0s',
          }}
        />
        <div
          className="hero-shape"
          style={{
            width: '400px', height: '400px',
            background: 'rgba(59, 130, 246, 0.1)',
            bottom: '-10%', right: '-5%',
            animationDelay: '5s',
          }}
        />
        <div
          className="hero-shape"
          style={{
            width: '300px', height: '300px',
            background: 'rgba(236, 72, 153, 0.06)',
            top: '40%', right: '20%',
            animationDelay: '10s',
          }}
        />
      </div>

      <Navbar />

      <main>
        <Hero isLoaded={isLoaded} />
        <MarqueeStrip />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
