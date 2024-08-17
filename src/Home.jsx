import React, { useEffect } from 'react'
import Hero from './components/Hero.jsx'
import Layout from './Layout.js'
import TrendingProjects from './components/TrendingProjects.jsx'
import About from './components/About.jsx'
import About2 from './components/About2.jsx'

const Home = () => {



  return (
      <main className="min-h-screen overflow-hidden relative bg-blue-50">
          <Layout>
              <Hero />
              <TrendingProjects />
              <About />
              <About2 />
          </Layout>
      </main>
  )
}

export default Home