import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Hero from './components/Hero'
import Skills from './components/Skills'

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
          <Header />

          <Hero />

          <section id="about">
            <AboutMe />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
