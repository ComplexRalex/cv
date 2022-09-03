import { createContext, useState } from "react";
import { langTypes } from "../types";

const initialState = langTypes.en;

export const LangContext = createContext(initialState);

export const LangProvider = ({ children }) => {

    const [lang, setLang] = useState(initialState);

    const setSpanish = () => { setLang(langTypes.es) }
    const setEnglish = () => { setLang(langTypes.en) }

    return (
        <LangContext.Provider value={{ lang, setSpanish, setEnglish }}>
            { children }
        </LangContext.Provider>
    )

};