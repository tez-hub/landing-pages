import "./nav.css";


const Nav = () => {
    return (
        <div className="navbar">
            <div className="div__stuff">
                <div className="red__one one"></div>
                <div className="red__one two"></div>
                <div className="red__one three"></div>
                <div className="red__one four"></div>
                <div className="red__one five"></div>
                <div className="red__one six"></div>
                <div className="red__one seven"></div>
                <div className="red__one eight"></div>
                <div className="red__one nine"></div>
                <div className="red__one ten"></div>
                <div className="red__one eleven"></div>
            </div>
            
            <div className="navbar__details">


                <div className="logo">
                    <h3>Logo</h3>
                </div>

                <div className="nav__links">
                    <ul>
                        <li>About Us</li>
                        <li>Service</li>
                        <li>Process</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;