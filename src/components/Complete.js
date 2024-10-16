import "./Complete.css";
import completeIcon from "../assets/images/icon-complete.svg";

export default function Complete({ resetData, setComplete }) {
    const onClick = () => {
        setComplete(false);
        resetData();
    }

    return (
        <section id="complete">
            <img src={completeIcon} alt="Complete checkmark icon" />
            <div id="message">
                <p>THANK YOU!</p>
                <p>We've added your card details</p>
            </div>
            <button onClick={onClick}>Continue</button>
        </section>
    );
};