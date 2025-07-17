import { useState } from 'react'
import './App.css'
import Main from './assets/main'
import Footer from './assets/footer'
import Navbar from './assets/Navbar'
function App() {

  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar  />
      <Main />
      <Footer />
    </div>
  )
}

export default App
