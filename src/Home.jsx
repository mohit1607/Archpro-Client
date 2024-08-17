import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Layout from './Layout'
import TrendingProjects from './components/TrendingProjects'
import About from './components/About'
import About2 from './components/About2'

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