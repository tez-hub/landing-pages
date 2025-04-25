import "./about.css";
import AboutImage from '../../assets/about.jpg'

const About = () => {
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
                <p className="about__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia qui inventore? Fuga, voluptatum! Quas, fugiat, maiores, recusandae modi rem quos ipsam iste rerum tenetur debitis eius aliquam dolore iure.</p>
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