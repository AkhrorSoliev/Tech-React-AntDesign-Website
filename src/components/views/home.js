import React from 'react'

import AppHero from '../home/hero'
import About from './about'
import AppFeature from './feature'
import AppWorks from './works'
import AddFaq from './faq'
import AppPricing from './pricing'
import AppContact from './contact'

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <About />
      <AppFeature />
      <AppWorks />
      <AddFaq />
      <AppPricing />
      <AppContact />
    </div>
  )
}

export default AppHome
