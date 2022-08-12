import "./styles"

export const Page = ({ title, children }) => {
    return (
        <>
            <header className="header">
                <h1>{ title }</h1>
                <hr />
            </header>
            <div className="page-container">
                { children }
            </div>
        </>
    )
}
