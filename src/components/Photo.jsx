import "./styles"

export const Photo = ({ src, title, alt }) => {
    return (
        <div className="photo-container">
            <img className="photo" src={src} title={title} alt={alt} />
        </div>
    )
}
