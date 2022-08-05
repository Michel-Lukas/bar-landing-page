import {FaGlassMartiniAlt} from "react-icons/fa";
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className="container">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="navbar-icon">
                        <FaGlassMartiniAlt size={30} style={{ margin: "auto", color: "#fff"}}/>
                    </div>

                    <div className="uppercase spacing-wide navbar-title">
                        truva
                    </div>
                </div>


                <div className="navbar-items">
                    <div className="condensed uppercase">
                        <Link to="menu" smooth="true" duration={500}>
                            Menu
                        </Link>
                    </div>

                    <div className="condensed uppercase">
                        <Link to="pictures" smooth="true" duration={500}>
                            Gallery
                        </Link>
                    </div>

                    <div className="condensed uppercase">
                        <Link to="about" smooth="true" duration={500}>
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
