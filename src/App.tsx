import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Hero from './components/Hero'

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    setShowIntro(true)
  }, [])

  return (
    <div className="app">
      {showIntro && <Intro setShowIntro={setShowIntro} />}
      {!showIntro && (
        <>
          <section id="header">
            <Header />
          </section>
            <Hero />
          <section id="about">
            <AboutMe />
          </section>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
