import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'

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
          <main>
            <p>Bienvenido a mi página personal.</p>
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
