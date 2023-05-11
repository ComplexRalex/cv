import { useContext } from "react"
import { ShowPictureContext } from "../providers/ShowPictureProvider"

export const useShowPicture = () => {

    return useContext(ShowPictureContext);
}