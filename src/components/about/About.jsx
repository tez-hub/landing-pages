import "./about.css";

const About = () => {
    return (
        <>
        <div className="about__section">
            <div className="about__section__one">
                <h4>About Us</h4>
                <div className="about__section__one__details">
                    <img src="" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit pariatur, aut quos ratione culpa animi modi ipsam! Deserunt, vitae!</p>
                </div>
            </div>
            <div className="about__section__two">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia qui inventore? Fuga, voluptatum! Quas, fugiat, maiores, recusandae modi rem quos ipsam iste rerum tenetur debitis eius aliquam dolore iure.</p>
                <div className="about__section__two__statistics">
                    <div className="stat_one">
                        <h4>3+</h4>
                        <p>Years of progress</p>
                    </div>
                    <div className="stat_two">
                        <h4>10+</h4>
                        <p>Client Projects</p>
                    </div>
                    <div className="stat_three">
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