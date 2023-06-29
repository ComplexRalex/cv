import "./styles"

// A workaround, yey!
const splitDates = (date = "") => {
    return date.split('-').map(date => date.trim());
}

export const EventInfo = ({ title, subtitle, when }) => {
    return (
        <div className="event-container">
            <div className="titles">
                <span className="title">
                    { title }
                </span>
                <span className="subtitle">
                    { subtitle }
                </span>
            </div>
            <div className="dates">
                {
                    splitDates(when).map(date => (
                        <span className="date" key={date}>
                            { date }
                        </span>
                    ))
                }
            </div>
        </div>
    )
}
