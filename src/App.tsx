import { useState } from 'react'
import { NavBar } from './components/navbar'
import { Main } from './components/main'
import { SectionProducts } from './components/sectionProducts' 
import { SectionPartners } from './components/sectionPartners'
import { Footer } from './components/footer'
import { FormContextProvider } from './contexts/FormContext'
import { useContext } from 'react'
import { FormContext } from './contexts/FormContext'
import { InfoProduct } from './components/infoProduct'

import './App.css'

function App() {
  const {modal} = useContext(FormContext)

  return (
    <div className="App">
      <FormContextProvider>
        <InfoProduct/>
        <NavBar />
        <Main />
        <SectionProducts/>
        <SectionPartners/>
        <Footer/>
      </FormContextProvider>
    </div>
  )
}

export default App
