import "./styles"

export const BoldLine = ({ bottom }) => {
    return (
        <div
            className={`bold-line ${bottom ? 'bottom' : ''}`}
        ></div>
    )
}
