import { useLang } from "../hooks/useLang";
import { langTypes } from "../types";
import { BoldLine } from "./BoldLine"
import "./styles"

export const Page = ({ title, children }) => {

    const { lang, setSpanish, setEnglish } = useLang();
    const isES = langTypes.es === lang;
    const classEN = !isES ? 'active' : '';
    const classES = isES ? 'active' : '';

    return (
        <>
            <BoldLine />
            <div className="body-container">
                <header className="header">
                    <div>
                        <h1>{ title }</h1>
                        <span className="langs">
                            <span onClick={setEnglish} className={classEN}>EN</span> | <span onClick={setSpanish} className={classES}>ES</span>
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
