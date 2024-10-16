import "./Form.css";
import { useForm } from 'react-hook-form';

export default function Form({ setData }) {
    const { register, handleSubmit } = useForm();
    const onChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        if (name === "cardNumber") {
            value = (value.replace(' ', '').match(/\d{1,4}/g) || []).join(' ');
            event.target.value = value;
        }
        setData(prev => {
            return {
                ...prev,
                [name]: value
            };
        });
    }
    const onSubmit = data => {
        console.table(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>
                <label htmlFor="name">CARDHOLDER NAME</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Jane Appleseed"
                    {...register("name")}
                    onChange={onChange}
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
                    {...register("cardNumber")}
                    onChange={onChange}
                />
            </p>
            <p>
                <label htmlFor="exp-month">EXP. DATE (MM/YY)</label>
                <span className="inputs">
                    <input
                        type="text"
                        inputMode="numeric"
                        id="exp-month"
                        name="exp-month"
                        pattern="\d{2}"
                        maxLength="2"
                        required
                        placeholder="MM"
                        autoComplete="cc-exp-month"
                        {...register("expMonth")}
                        onChange={onChange}
                    />
                    <label htmlFor="exp-year" className="hidden">EXP. YEAR</label>
                    <input
                        type="text" 
                        inputMode="numeric"
                        id="exp-year"
                        name="exp-year"
                        pattern="\d{2}"
                        maxLength="2"
                        required
                        placeholder="YY"
                        autoComplete="cc-exp-year"
                        {...register("expYear")}
                        onChange={onChange}
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
                    {...register("cvc")}
                    onChange={onChange}
                />
            </p>
            <input type="submit" id="confirm-button" value="Confirm" />
        </form>
    )
}