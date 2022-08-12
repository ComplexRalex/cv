import "./styles"

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
            <span className="date">
                { when }
            </span>
        </div>
    )
}
