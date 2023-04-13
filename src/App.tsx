import { useState } from 'react'
import { NavBar } from './components/navbar'
import { Main } from './components/main'
import { SectionProducts } from './components/sectionProducts' 
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <SectionProducts/>
    </div>
  )
}

export default App
