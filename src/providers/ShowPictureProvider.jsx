import { createContext, useState } from "react";

const initialState = false;

export const ShowPictureContext = createContext(initialState);

export const ShowPictureProvider = ({ children }) => {

    const [show, setShow] = useState(initialState);

    const showPicture = () => { setShow(true) }
    const hidePicture = () => { setShow(false) }

    return (
        <ShowPictureContext.Provider value={{ showingPicture: show, showPicture, hidePicture }}>
            { children }
        </ShowPictureContext.Provider>
    )

};