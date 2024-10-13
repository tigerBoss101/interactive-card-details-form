import "./Cards.css";
import background from "../assets/images/bg-main-desktop.png"
import front from "../assets/images/bg-card-front.png"
import back from "../assets/images/bg-card-back.png"

export default function Cards() {
    return (
        <div className="cards">
            <img src={background} alt="background" />
            <div className="card" id="front">
                <img src={front} alt="Front of card" />
            </div>
            <div className="card" id="back">
                <img src={back} alt="Back of card" />
            </div>
        </div>
    )
}