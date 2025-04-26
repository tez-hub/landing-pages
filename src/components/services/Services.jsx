import { useState } from "react";
import './services.css'
import WebImage from '../../assets/web.jpg'
import SEO from '../../assets/SEO.jpg'
import SocialMedia from '../../assets/social-media.jpg'
import Branding from '../../assets/branding.jpg'

const services = [
  { id: 1, name: "Web Design", image: WebImage},
  { id: 2, name: "SEO Optimization", image: SEO},
  { id: 3, name: "Social Media", image: SocialMedia },
  { id: 4, name: "Branding", image: Branding },
  { id: 5, name: "Branding", image: Branding },
];

const Services = () => {

    const [selectedService, setSelectedService] = useState(services[0]);


    return (
        <div className="services">

            <div className="services__container">
                {/* Left: Image */}
                <div className="services__container__image">
                    <img
                        src={selectedService.image}
                        alt={selectedService.name}
                        style={{ width: "100%", maxWidth: "500px", height: "auto", borderRadius: "10px" }}
                    />
                </div>

                {/* Right: Service List */}
                <div style={{ flex: 3 }}>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                    {services.map((service) => (
                        <li
                        key={service.id}
                        onClick={() => setSelectedService(service)}
                        style={{
                            marginBottom: "32px",
                            fontSize: "50px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            color: "#333",
                        }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >

                                <div style={{
                                        height: "10px",
                                        width: "10px",
                                        borderRadius: "50%",
                                        backgroundColor: "red",
                                        marginRight: "10px"
                                }}></div>
                                 {service.name}
                            </div>

                        <hr />
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;