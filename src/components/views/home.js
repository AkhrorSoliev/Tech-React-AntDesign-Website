import React from 'react'
import AppHero from '../home/hero'
import About from './about'
import AppFeature from './feature'
import AppWorks from './works'

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <About />
      <AppFeature />
      <AppWorks/>
    </div>
  )
}

export default AppHome
