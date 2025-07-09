// import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      {/* <h1>Hello Kenya</h1>
      <h2>React, TailwindCSS</h2> */}
    </>
  )
}

export default App
