import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSections from './sections/ShowcaseSections'
import NavBar from './components/HeroModels/NavBar'
import LogoSection from './components/LogoSection'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSections />
      <LogoSection />
    </>
  )
}

export default App