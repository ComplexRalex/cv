import { createContext, useState } from "react";

const initialState = false;

export const ShowSecretContext = createContext(initialState);

export const ShowSecretProvider = ({ children }) => {

    const [show, setShow] = useState(initialState);

    const showSecret = () => { setShow(true) }
    const hideSecret = () => { setShow(false) }

    return (
        <ShowSecretContext.Provider value={{ showingSecret: show, showSecret, hideSecret }}>
            { children }
        </ShowSecretContext.Provider>
    )

};