import "./styles"

export const Photo = ({ src, title, alt }) => {
    return (
        <img className="photo" src={src} title={title} alt={alt} />
    )
}
