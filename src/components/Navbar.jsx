import {FaGlassMartiniAlt} from "react-icons/fa";

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
                        Menu
                    </div>

                    <div className="condensed uppercase">
                        About
                    </div>

                    <div className="condensed uppercase">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
