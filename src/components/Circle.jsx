import "./styles"

export const Circle = ({ full = false }) => {
    return (
        <div
            className={`circle ${full ? 'full' : ''}`}
        ></div>
    )
}
