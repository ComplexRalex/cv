import { useLang, useShowPicture } from "../hooks";
import { langTypes } from "../types";
import { BoldLine } from "./BoldLine"
import "./styles"

export const Page = ({ title, tooltips, secret, children }) => {

    const { lang, setSpanish, setEnglish } = useLang();
    const { showingPicture, showPicture, hidePicture } = useShowPicture();
    const isES = langTypes.es === lang;
    const classEN = !isES ? 'active' : '';
    const classES = isES ? 'active' : '';

    return (
        <div className={ !secret ? "wrap-container" : "wrap-container ralex" }>
            <div className="root-container">
                <BoldLine />
                <div className="body-container">
                    <header className="header unselectable">
                        <div>
                            <h1
                                title={showingPicture ? tooltips.title.normal : tooltips.title.secret}
                                onDoubleClick={() => showingPicture ? hidePicture() : showPicture()}>
                                { title }
                            </h1>
                            <span className="langs">
                                <span onClick={setEnglish} className={classEN}>EN</span> | <span onClick={setSpanish} className={classES}>ES</span>
                            </span>
                        </div>
                        <hr />
                    </header>
                    <div className="page-container">
                        { children }
                    </div>
                </div>
                <BoldLine />
            </div>
        </div>
    )
}
