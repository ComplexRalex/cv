import { useContext } from "react"
import { ShowSecretContext } from "../providers/ShowSecretProvider"

export const useShowSecret = () => {

    return useContext(ShowSecretContext);
}