import "./Form.css";
// import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from "./Input";

export default function Form({ setData, setComplete }) {
    const { register, handleSubmit, formState: {errors} } = useForm();

    // useEffect(() => {
    //     console.log(formState.errors);
    // }, [formState]);

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
        console.log(errors);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <p>
                <label htmlFor="name">CARDHOLDER NAME</label>
                <Input
                    name="name"
					invalid={errors.name}
                    placeholder="e.g. Jane Appleseed"
                    onChange={onChange}
                    register={register}
                />
                {
                    errors.name?.type === "required" &&
                    <span className="error">Can't be blank</span>
                }
            </p>
            <p>
                <label htmlFor="cardNumber">CARD NUMBER</label>
                <Input
                    isNumeric
                    name="cardNumber"
					invalid={errors.cardNumber}
                    pattern={/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/}
                    maxLength={19}
                    placeholder="e.g. 1234 5678 9123 0000"
                    autoComplete="cc-number"
                    onChange={onChange}
                    register={register}
                />
                <span className="error">
                    {
                        errors.cardNumber?.type === "required" ?
                        "Can't be blank"
                        : errors.cardNumber?.type === "pattern" &&
                        "Must be 16 digits"
                    }
                </span>
            </p>
            <p>
                <label htmlFor="expMonth">EXP. DATE (MM/YY)</label>
                <span className="inputs">
                    <Input
                        isNumeric
                        name="expMonth"
					    invalid={errors.expMonth}
                        pattern={/^(0[1-9]|1[0-2])$/}
                        maxLength={2}
                        placeholder="MM"
                        autoComplete="cc-exp-month"
                        onChange={onChange}
                        register={register}
                    />
                    <label htmlFor="expYear" className="hidden">EXP. YEAR</label>
                    <Input
                        isNumeric
                        name="expYear"
					    invalid={errors.expYear}
                        pattern={/^\d{2}$/}
                        maxLength={2}
                        placeholder="YY"
                        autoComplete="cc-exp-year"
                        onChange={onChange}
                        register={register}
                    />
                </span>
                <span className="error">
                    {
                        (
                            errors.expMonth?.type === "required"
                            || errors.expYear?.type === "required"
                        ) ?
                        "Can't be blank"
                        : (errors.expMonth?.type === "pattern"
                           || errors.expYear?.type === "pattern"
                        ) &&
                        "Must be 2 digits, valid month"
                    }
                </span>
            </p>
            <p>
                <label htmlFor="cvc">CVC</label>
                <Input
                    isNumeric
                    name="cvc"
					invalid={errors.cvc}
                    pattern={/^\d{3}$/}
                    maxLength={3}
                    placeholder="e.g. 123"
                    autoComplete="cc-csc"
                    onChange={onChange}
                    register={register}
                />
                <span className="error">
                    {
                        errors.cvc?.type === "required" ?
                        "Can't be blank"
                        : errors.cvc?.type === "pattern" &&
                        "Must be 3 digits"
                    }
                </span>
            </p>
            <input type="submit" id="confirm-button" value="Confirm" />
        </form>
    )
}