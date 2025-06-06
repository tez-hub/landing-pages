import { useEffect } from "react";
import Nav from "../nav/Nav";
import "./hero.css";
import gsap from "gsap";
import HeroImage from '../../assets/hero.jpg'

const Hero = () => {

    useEffect(()=> {
        gsap.fromTo(".hero__cta", {
            y: "100vh",
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            delay: 1.5
        })

        gsap.fromTo(".hero__img img", {
            y: "100%"
        }, {
            y: 0,
            delay: 2,
            duration: 1
        })
    }, []);


    return (
        <>
        <Nav />

        <div>
            <div className="hero__cta">
                <h3>Biashara</h3>
                <h3>Platform to sell your products<span>.</span></h3>
            </div>
        </div>

        <div className="hero__desc">
            <div className="hero__desc__left">
                | Scroll
            </div>
            <div className="hero__desc__right">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum facere veniam placeat possimus? Explicabo quaerat aliquid aliquam voluptates! Quidem rem reprehenderit incidunt sequi aut voluptatem qui non mollitia blanditiis?</p>
            </div>
        </div>

        <div className="hero__img">
            <img src={HeroImage} alt="" />
        </div>
        </>
    )
}

export default Hero;