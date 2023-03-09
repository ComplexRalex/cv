import "./styles"

export const PhotoContainer = ({ children, onClick }) => {
    return (
        <div className="photo-container" onDoubleClick={(e) => onClick(e)}>
            {children}
        </div>
    )
}
