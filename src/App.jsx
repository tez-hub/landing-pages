
import { useEffect } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import gsap from 'gsap';
import About from './components/about/About';

function App() {


  useEffect(() => {
    // Prevent scroll restoration on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);
  

  useEffect(() => {
    gsap.to(".overlay", {
      y: "-100%",
      duration: 1.2,
      // ease: "power4.inOut"
    });

    gsap.fromTo(".hero", {
      y: "100%"
    }, {
      y: 0,
      duration: 1.2,
      // ease: "power4.inOut"
    })
  }, [])

  return (
    <>
    <div className="overlay"></div>
    <div className="hero">
      <Hero />
    </div>
    <About />
    </>
  )
}

export default App
