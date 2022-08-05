import Navbar from "./components/Navbar";
import Hookah from "./assets/hookah.svg"
import Snack from "./assets/snack.svg"
import Cocktail from "./assets/cocktail.svg"
import {Carousel} from "react-carousel-minimal"

function App() {
    // List of Pictures for Carousel
    const data = [
        {
            // Copy Image URL
            image:
                "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            // Optional Caption, leave empty quotes when no caption is required
            caption: "",
        },
        {
            image:
                "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            caption: "",
        },
        {
            image:
                "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
            caption: "",
        },
        {
            image:
                "https://images.unsplash.com/photo-1468056961052-15507578a50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            caption: "",
        },
        {
            image:
                "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80",
            caption: "",
        },
        {
            image:
                "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            caption: "",
        },
        {
            image:
                "https://images.unsplash.com/photo-1516458464372-eea4ab222b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
            caption: "",
        },
        {
            image:
                "https://images.unsplash.com/photo-1622827855145-0afff4452387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            caption: "",
        },
        {
            image:
                "https://images.unsplash.com/photo-1617538031312-0d54d0258822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            caption: "",
        },
    ];

    // Styling for captions
    const captionStyle = {
        fontSize: "2em",
        fontWeight: "bold",
    };
    // Styling for the Numbers
    const slideNumberStyle = {
        fontSize: "20px",
        fontWeight: "bold",
    };

  return (
    <>
        <Navbar />

        <section id="menu">
            <div className="section">
                <div className="card-list">
                    <div className="card border-red">
                        <div className="card-title uppercase">*NEW* Shisha</div>
                        <p className="card-p">
                            Try 20 different, hand-selected flavours of Shisha tobacco.
                            The best way to relax after a long day.
                        </p>
                        <img src={Hookah}  alt="Shisha SVG" className="card-img"/>
                    </div>

                    <div className="card border-blue">
                        <div className="card-title uppercase">Cocktails</div>
                        <p className="card-p">
                            Mojito, Tequila Sunrise, Cuba Libre, Sex on the Beach, Caipirinha, Aperol Spritz and <br />
                            the homemade TRUVA SPECIAL
                        </p>
                        <img src={Cocktail}  alt="Cocktail SVG" className="card-img"/>
                    </div>

                    <div className="card border-purple">
                        <div className="card-title uppercase">Snacks</div>
                        <p className="card-p">
                            Try a variety of different snacks, including nachos, sandwiches and Popcorn.
                            Perfect for a quick bite in-between drinks.
                        </p>
                        <img src={Snack}  alt="Snack SVG" className="card-img"/>
                    </div>
                </div>
            </div>
        </section>

        <section id="pictures">
            <div className="section">
                <div
                    style={{
                        padding: "0 20px",
                    }}
                >
                    <Carousel
                        data={data}
                        time={2000}
                        width="850px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        showNavBtn={true}
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </section>

        <section id="about">
            <div className="section-about" style={{ marginTop: "7.5rem"}}>
                <div className="about-body">
                    <div className="about-address">
                       <div className="address">
                           <div>
                               16515
                           </div>

                           <div>
                               Oranienburg
                           </div>

                           <div style={{ marginBottom: "1.5rem"}}>
                               Germany
                           </div>
                       </div>

                        <div className="about-telephone">
                           +49 1223 2134 24
                        </div>
                    </div>

                    <div className="about-open">
                        <div className="open" style={{marginBottom: "1.5rem"}}>
                            <div>
                                Mo-Wed: 5pm - 12am
                            </div>

                            <div>
                                Thur: 5pm - 11pm
                            </div>

                            <div>
                                Fri, Sat: 5pm - 2am
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default App;
