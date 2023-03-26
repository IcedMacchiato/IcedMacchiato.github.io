import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import HeroNight from '../components/HeroNight'
import Contact from '../components/Contact'



const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Projects/>
       <HeroNight/>
       <Contact/>
    </div>
  )
}

export default Home