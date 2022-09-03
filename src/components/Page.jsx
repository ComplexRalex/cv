import { NavLink, useLocation } from "react-router-dom"
import { BoldLine } from "./BoldLine"
import "./styles"

export const Page = ({ title, children }) => {
    const { pathname } = useLocation();

    return (
        <>
            <BoldLine />
            <div className="body-container">
                <header className="header">
                    <div>
                        <h1>{ title }</h1>
                        <span className="langs">
                            <NavLink to="/en" className={['/', '/en'].includes(pathname) ? "active" : ""}>EN</NavLink> | <NavLink to="/es">ES</NavLink>
                        </span>
                    </div>
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
