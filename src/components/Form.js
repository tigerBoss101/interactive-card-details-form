import "./Form.css";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from "./Input";

export default function Form({ setData, setComplete }) {
    const { register, handleSubmit, formState } = useForm();

    useEffect(() => {
        console.log(formState.errors);
    }, [formState]);

    const onChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        if (name === "cardNumber") {
            value = (value.replace(' ', '').match(/\d{1,4}/g) || []).join(' ');
            event.target.value = value;
        }
        else if (name === "expMonth" || name === "expYear" || name === "cvc") {
            value = value.replace(/\D/g, "")
            event.target.value = value;
        }
        setData(prev => {
            return {
                ...prev,
                [name]: value
            };
        });
    }
    const onSubmit = _ => {
        setComplete(true);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>
                <label htmlFor="name">CARDHOLDER NAME</label>
                <Input
                    name="name"
                    placeholder="e.g. Jane Appleseed"
                    onChange={onChange}
                    register={register}
                />
            </p>
            <p>
                <label htmlFor="card-number">CARD NUMBER</label>
                <Input
                    isNumeric
                    name="cardNumber"
                    pattern={/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/}
                    maxLength={19}
                    placeholder="e.g. 1234 5678 9123 0000"
                    autoComplete="cc-number"
                    onChange={onChange}
                    register={register}
                />
            </p>
            <p>
                <label htmlFor="exp-month">EXP. DATE (MM/YY)</label>
                <span className="inputs">
                    <Input
                        isNumeric
                        name="expMonth"
                        pattern={/^(0[1-9]|1[0-2])$/}
                        maxLength={2}
                        placeholder="MM"
                        autoComplete="cc-exp-month"
                        onChange={onChange}
                        register={register}
                    />
                    <label htmlFor="exp-year" className="hidden">EXP. YEAR</label>
                    <Input
                        isNumeric
                        name="expYear"
                        pattern={/^\d{2}$/}
                        maxLength={2}
                        placeholder="YY"
                        autoComplete="cc-exp-year"
                        onChange={onChange}
                        register={register}
                    />
                </span>
            </p>
            <p>
                <label htmlFor="cvc">CVC</label>
                <Input
                    isNumeric
                    name="cvc"
                    pattern={/^\d{3}$/}
                    maxLength={3}
                    placeholder="e.g. 123"
                    autoComplete="cc-csc"
                    onChange={onChange}
                    register={register}
                />
            </p>
            <input type="submit" id="confirm-button" value="Confirm" />
        </form>
    )
}