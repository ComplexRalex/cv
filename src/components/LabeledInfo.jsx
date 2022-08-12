import "./styles"

export const LabeledInfo = ({ label, info }) => {
    return (
        <div className="labeled-container">
            <span className="label">{ label }</span>
            <span className="info">{ info }</span>
        </div>
    )
}
