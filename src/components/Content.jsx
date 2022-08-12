import "./styles"

export const Content = ({ title, children }) => {
    return (
        <section className="content-container">
            <h3>{ title }</h3>
            <hr />
            { children }
        </section>
    )
}
