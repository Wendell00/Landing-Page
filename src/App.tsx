import { useState } from 'react'
import { NavBar } from './components/navbar'
import { Main } from './components/main'
import { SectionProducts } from './components/sectionProducts' 
import { SectionPartners } from './components/sectionPartners'
import { Footer } from './components/footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <SectionProducts/>
      <SectionPartners/>
      <Footer/>
    </div>
  )
}

export default App
