import React from 'react'
import '../../App.css'
import Hero from '../../components/Hero/Hero'
import Cards from '../../components/Cards/Cards'
import { Footer } from '../../components/Footer/Footer'
import WaterHero from '../../components/WaterHero/WaterHero'
import TopWaters from '../../components/TopWaters/TopWaters'
import TopFoods from '../../components/TopFoods/TopFoods'


const Home = () => {
  return (
    <>
        <Hero/>
        <Cards/>
        <WaterHero/> 
        <TopWaters/>
        <TopFoods/>       
        <Footer/>
        

    </>
  )
}

export default Home