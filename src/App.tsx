import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <p>Bienvenido a mi página personal.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
