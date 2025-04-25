
import { useEffect } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import gsap from 'gsap';

function App() {

  useEffect(() => {
    gsap.to(".overlay", {
      y: "-100%",
      duration: 1.5,
      ease: "power4.inOut"
    });

    gsap.fromTo(".hero", {
      y: "-100%"
    }, {
      y: 0,
      duration: 1.5,
      // ease: "power4.inOut"
    })
  }, [])

  return (
    <>
    <div className="overlay"></div>
    <div className="hero">
      <Hero />
    </div>
    </>
  )
}

export default App
