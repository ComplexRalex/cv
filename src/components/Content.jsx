import "./styles"

export const Content = ({ title, children }) => {
    return (
        <section className="content-container">
            <h2>{ title }</h2>
            <hr />
            { children }
        </section>
    )
}
