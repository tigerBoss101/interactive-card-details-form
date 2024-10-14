import "./Cards.css";
import background from "../assets/images/bg-main-desktop.png";
import logo from "../assets/images/card-logo.svg";

export default function Cards() {
    return (
        <div className="cards">
            <img src={background} alt="background" />
            <div className="card" id="front">
                <img src={logo} alt="Credit card logo" id="logo" />
                <p id="card-number">0000 0000 0000 0000</p>
                <p id="full-name" className="small" >JANE APPLESEED</p>
                <p id="exp-date" className="small" >00/00</p>
            </div>
            <div className="card" id="back">
                <p id="cvc" className="small" >000</p>
            </div>
        </div>
    )
}