import "./Input.css";

export default function Input({
    isNumeric=false,
    name,
    pattern=/^.*$/,
    maxLength,
    placeholder,
    autoComplete,
    invalid,
    onChange,
    register,
}) {
    invalid = (!!invalid).toString()
    return (
        <input
            className="_input"
            type="text"
            inputMode={isNumeric ? "numeric" : "text"}
            maxLength={maxLength}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-invalid={invalid}
            {...register(name, {
                onChange: onChange,
                required: true,
                pattern: pattern,
            })}
        />
    )
}
