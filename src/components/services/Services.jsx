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
                        key={selectedService.id}
                        className="service-image"
                        src={selectedService.image}
                        alt={selectedService.name}
                        // style={{ width: "100%", maxWidth: "500px", height: "340px", objectFit: "cover", borderRadius: "10px" }}
                    />
                    <div className="services__container__list">
                        <ul>
                            <li className="growth">Growth</li>
                            <li className="strategy">Strategy</li>
                            <li className="brand">Growth</li>
                        </ul>
                    </div>

                    <div className="services__container__list2">
                        <ul>
                            <li><div className="dot"></div>Lorem ipsum dolor sit amet consectetur.</li>
                            <li><div className="dot"></div>Lorem ipsum dolor sit amet consectetur.</li>
                            <li><div className="dot"></div>Lorem ipsum dolor sit amet consectetur.</li>
                        </ul>
                    </div>
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
                                        height:  selectedService.id === service.id ? "15px": "0px",
                                        width:  selectedService.id === service.id ? "15px": "0px",
                                        borderRadius:  selectedService.id === service.id ? "50%" : "0",
                                        backgroundColor:  selectedService.id === service.id ? "red": "transparent",
                                        marginRight: "10px"
                                }}></div> {service.name}
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