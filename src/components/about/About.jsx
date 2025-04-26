import "./about.css";
import AboutImage from '../../assets/about.jpg'
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
    gsap.registerPlugin(ScrollTrigger);
    const paragraphRef = useRef(null);

    useEffect(() => {
        const words = paragraphRef.current.querySelectorAll(".word");
    
        gsap.fromTo(
          words,
          { opacity: 0.4 },
          {
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
    }, []);

    const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia qui inventore? Fuga, voluptatum! Quas, fugiat, maiores, recusandae modi rem quos ipsam iste rerum tenetur debitis eius aliquam dolore iure.";

  const splitText = text.split(" ");

    return (
        <>
        <div className="about__section">
            <div className="about__section__one">
                <h4><span>.</span>About Us</h4>
                <div className="about__section__one__details">
                    <img src={AboutImage} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit pariatur, aut quos ratione culpa animi modi ipsam! Deserunt, vitae!</p>
                </div>
            </div>


            <div className="about__section__two">
                <p ref={paragraphRef} className="about__p">
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia qui inventore? Fuga, voluptatum! Quas, fugiat, maiores, recusandae modi rem quos ipsam iste rerum tenetur debitis eius aliquam dolore iure. */}
                    {splitText.map((word, index) => (
                        <span
                        key={index}
                        className="word"
                        style={{
                            display: "inline-block",
                            opacity: 0.4,
                            marginRight: "6px",
                            transition: "opacity 0.3s ease",
                        }}
                        >
                        {word}
                        </span>
                    ))}
                </p>
                <div className="about__section__two__statistics">
                    <div className="stat_one">
                        <h4>3+</h4>
                        <p>Years of progress</p>
                    </div>
                    <div className="stat_one">
                        <h4>10+</h4>
                        <p>Client Projects</p>
                    </div>
                    <div className="stat_one">
                        <h4>100%</h4>
                        <p>Satisfaction Rate</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;