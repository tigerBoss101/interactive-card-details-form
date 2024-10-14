import "./Cards.css";
import background from "../assets/images/bg-main-desktop.png";
import logo from "../assets/images/card-logo.svg";

const placeholderData = {
    name: "JANE APPLESEED",
    cardNumber: "0000 0000 0000 0000",
    expMonth: "00",
    expYear: "00",
    cvc: "000"
}

export default function Cards({ data }) {
    const newData = Object.keys(data).reduce((acc, key) => {
        acc[key] = data[key] || placeholderData[key];
        return acc;
    }, {})

    return (
        <div className="cards">
            <img src={background} alt="background" />
            <div className="card" id="front">
                <img src={logo} alt="Credit card logo" id="logo" />
                <p id="card-number">{newData.cardNumber}</p>
                <p id="full-name" className="small" >{newData.name.toUpperCase()}</p>
                <p id="exp-date" className="small" >{newData.expMonth}/{newData.expYear}</p>
            </div>
            <div className="card" id="back">
                <p id="cvc" className="small" >{newData.cvc}</p>
            </div>
        </div>
    )
}