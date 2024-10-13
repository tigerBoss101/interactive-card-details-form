import "./Form.css";

export default function Form() {
    return (
        <form action="#">
            <p>
                <label htmlFor="name">CARDHOLDER NAME</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Jane Appleseed"
                />
            </p>
            <p>
                <label htmlFor="card-number">CARD NUMBER</label>
                <input
                    type="text"
                    inputMode="numeric"
                    id="card-number"
                    name="card-number"
                    pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
                    maxLength="19"
                    required
                    placeholder="e.g. 1234 5678 9123 0000"
                    autoComplete="cc-number"
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
                        pattern="\d{2}"
                        maxLength="2"
                        required
                        placeholder="MM"
                        autoComplete="cc-exp-month"
                    />
                    <label htmlFor="expire-year" className="hidden">EXP. YEAR</label>
                    <input
                        type="text" 
                        inputMode="numeric"
                        id="expire-year"
                        name="expire-year"
                        pattern="\d{2}"
                        maxLength="2"
                        required
                        placeholder="YY"
                        autoComplete="cc-exp-year"
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
                    pattern="\d{3}"
                    maxLength="3"
                    required
                    placeholder="e.g. 123"
                    autoComplete="cc-csc"
                />
            </p>
            <input type="submit" id="confirm-button" value="Confirm" />
        </form>
    )
}