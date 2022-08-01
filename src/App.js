import Navbar from "./components/Navbar";
import Hookah from "./assets/hookah.svg"
import Snack from "./assets/snack.svg"
import Cocktail from "./assets/cocktail.svg"

function App() {
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
    </>
  );
}

export default App;
