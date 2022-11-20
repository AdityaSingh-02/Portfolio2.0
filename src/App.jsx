import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Socials from './Components/Socials'
import AboutMe from './Components/AboutMe'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio';
import ContactMe from './Components/ContactMe'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Socials />
      <AboutMe />
      <Resume />
      <Portfolio />
      <ContactMe />
    </>
  )
}

export default App
