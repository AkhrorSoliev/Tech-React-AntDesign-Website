import React from 'react'
import AppHero from '../home/hero'
import About from './about'
import AppFeature from './feature'

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <About />
      <AppFeature />
    </div>
  )
}

export default AppHome
