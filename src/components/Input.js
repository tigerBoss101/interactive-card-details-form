import "./Input.css";

export default function Input({
    isNumeric=false,
    name,
    pattern=/^.*$/,
    maxLength,
    placeholder,
    autoComplete,
    onChange,
    register
}) {
    return (
        <input
            className="_input"
            type="text"
            inputMode={isNumeric ? "numeric" : "text"}
            maxLength={maxLength}
            placeholder={placeholder}
            autoComplete={autoComplete}
            {...register(name, {
                onChange: onChange,
                required: true,
                pattern: pattern,
            })}
        />
    )
}
