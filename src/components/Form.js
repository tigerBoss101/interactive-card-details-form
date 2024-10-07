import "./Form.css";

export default function Form() {
    return (
        <form action="#">
            <p>
                <label htmlFor="name">CARDHOLDER NAME</label>
                <input type="text" id="name" name="name" required/>
            </p>
            <p>
                <label htmlFor="card-number">CARD NUMBER</label>
                <input
                    type="text"
                    inputMode="numeric"
                    id="card-number"
                    name="card-number"
                    pattern="\d*"
                    maxLength="16"
                    required
                />
            </p>
            <p>
                <label htmlFor="expire-month">EXP. DATE (MM/YY)</label>
                <span className="inputs">
                    <input
                        type="text"
                        inputMode="numeric"
                        id="expire-month"
                        name="expire-month"
                        pattern="\d*"
                        maxLength="2"
                        required
                    />
                    <label htmlFor="expire-year" className="hidden">EXP. YEAR</label>
                    <input
                        type="text" 
                        inputMode="numeric"
                        id="expire-year"
                        name="expire-year"
                        pattern="\d*"
                        maxLength="2"
                        required
                    />
                </span>
            </p>
            <p>
                <label htmlFor="cvc">CVC</label>
                <input
                    type="text"
                    inputMode="numeric"
                    id="cvc"
                    name="cvc"
                    pattern="\d*"
                    maxLength="3"
                    required
                />
            </p>
            <input type="submit" id="confirm-button" value="Confirm" />
        </form>
    )
}