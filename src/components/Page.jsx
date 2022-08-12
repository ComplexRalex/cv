import { BoldLine } from "./BoldLine"
import "./styles"

export const Page = ({ title, children }) => {
    return (
        <>
            <BoldLine />
            <div className="body-container">
                <header className="header">
                    <h1>{ title }</h1>
                    <hr />
                </header>
                <div className="page-container">
                    { children }
                </div>
                {/* <BoldLine /> */}
            </div>
            <BoldLine />
        </>
    )
}
