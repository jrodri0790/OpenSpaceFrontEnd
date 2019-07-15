import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import KeyNote from './KeyNote'
import Faq from './Faq'
import Collaborators from './Collaborators'
import SocialMedia from './SocialMedia'
import Footer from './Footer'
import Agenda from './agenda/Agenda'
import Location from './location/Location'

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Home />
      <About/>
      <KeyNote />
      <Agenda />
      <Location />
      <Faq />
      <Collaborators />
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default App
