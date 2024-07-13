import React from 'react'

// import Hero from '../../components/Hero';
// import About from '../../components/About';
// import Projects from '../../components/Projects';
// import Contact from '../../components/Contact';

import { Hero, About, Projects, Contact } from '../../components';

function Home() {
  console.log(Hero, About, Projects, Contact);

  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default Home
